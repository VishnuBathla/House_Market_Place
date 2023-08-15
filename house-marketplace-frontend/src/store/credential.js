import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { store } from './index';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const fetchCredentials = createAsyncThunk('credentials/fetchCredentials',async ()=>{
    const response = await axios.get('http://localhost:8888/credentials')
   return response.data

})
export const addCredentials = createAsyncThunk('credentials/addUser',async (cred)=>{
    const {credentials}=store.getState().credential
    const check= credentials.some(credential=>{
        return credential.email===cred.email})
    if(check){
            toast.error("Email Already Exists")
        }else{
            const response = await axios.post('http://localhost:8888/credentials',cred)
        return response.data}
})
export const updateCredentials = createAsyncThunk('credentials/updateUser',async (cred)=>{
    const {credentials}=store.getState().credential
    const check = credentials.filter(credential=>credential.email===cred.email)
    if(check.length===0 || (check.length===1 && check[0].id===cred.id) ){
            const response = await axios.put(`http://localhost:8888/credentials/${cred.id}`,cred)
             return response.data
            }
    else{
        toast.error("Email Already Exists")
    }
        // }else{
        //     const response = await axios.post('http://localhost:8888/credentials',cred)
        // return response.data
})


const credentialSlice =createSlice({
    name:'credentials',
    initialState:{
        credentials:[],
        user_logged_in:{
            name:"",
            email:"",
            id:-1,
            password:""
        },
        is_signed_in:false,
    },
    

    reducers:{
        validator(state,action){
            const current=state.credentials.find(cred => cred.email.toLowerCase() === action.payload.email.toLowerCase() && cred.password === action.payload.password)
            if(current){
                state.is_signed_in=true
                state.user_logged_in={name:current.name,
                email:current.email,id:current.id,
            password:current.password}
            }else{
                toast.error('Bad User Credentials')
            }
        },
        logout(state){
            state.is_signed_in = false
            state.user_logged_in = {
                name:"",
                email:"",
                id:-1,
                password:''
            }
        },
        // async addUser(state,action){
        //     const check= state.credentials.some(cred=>cred.Email===action.payload.email)
        //     if(check){
        //         toast.error("Email Already Exists")
        //     }else{
        //         action.payload.dispatch(addCredentials(action))
        //     }
        // }

    },
    extraReducers :{
        [fetchCredentials.fulfilled] : (state,action) =>{
            state.credentials = [...action.payload]

        },
        [fetchCredentials.rejected] : () =>{
            toast.error('Operation failed!');
            
        },
        [addCredentials.fulfilled] : (state,action) =>{
            if(action.payload){
            state.credentials.push(action.payload)
            state.is_signed_in = true
            state.user_logged_in={name:action.payload.name,
                email:action.payload.email,id:action.payload.id,password:action.payload.password}
        }
        },
        [addCredentials.rejected] : () =>{
            toast.error('Operation failed!');
        },
        [updateCredentials.fulfilled] : (state,action) =>{
            if(action.payload){
            state.credentials= state.credentials.map(
                cred=>cred.id===action.payload.id?action.payload:cred
            )
            state.user_logged_in=action.payload
        }
        },
        [updateCredentials.rejected] : () =>{
            toast.error('Operation failed!');
        },
        
    }
    

})
export const CredentialActions = credentialSlice.actions
export default credentialSlice.reducer