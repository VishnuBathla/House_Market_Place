import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './index';
export const fetchHouses = createAsyncThunk('houses/fetchHouses',async ()=>{
    const response = await axios.get('http://localhost:8888/houses')
    return response.data
})
export const addHouse = createAsyncThunk('houses/addHouse',async (house)=>{
            const response = await axios.post('http://localhost:8888/houses',house)
            return response.data
})
export const editHouse = createAsyncThunk('houses/editHouse',async (house)=>{
    await axios.put(`http://localhost:8888/houses/${house.id}`,house)
})
export const deleteHouse = createAsyncThunk('houses/deleteHouse',async (house)=>{
    await axios.delete(`http://localhost:8888/houses/${house.id}`)
    // console.log('deleted')
})

export const getCurrentUserData = createAsyncThunk('houses/currentUserHouses',async ()=>{
    const {houses}=store.getState().houses
    const {user_logged_in} = store.getState().credential
    return houses.filter(house=>house.email===user_logged_in.email)
})



const HouseSlice =createSlice({
    name:'houses',
    initialState:{
        houses:[],
        house_with_offer:[],
        house_on_rent:[],
        house_on_sale:[],
        corousel:[],
        selected_House:{
            "id":"",
            "email":"",
            "sell/rent":"",
            name:"",
            "bedrooms":-1,
            "bathrooms":-1,
            "parking spot":false,
            "furnished":false,
            "address":"",
            "offer":false,
            "regular price":-1,
            "discounted price":-1,
            "image":[]  
        },
        current_User_Houses:[]
    },
    

    reducers:{
        findbyIndex(state,action){
            // console.log(action.payload)
            state.selected_House = state.houses.find(house=>house.id===action.payload)||
            {
                "id":"",
                "email":"",
                "sell/rent":"",
                name:"",
                "bedrooms":-1,
                "bathrooms":-1,
                "parking spot":false,
                "furnished":false,
                "address":"",
                "offer":false,
                "regular price":-1,
                "discounted price":-1,
                "image":[]  
            }

        },
        

    },
    extraReducers :{
        [fetchHouses.fulfilled] : (state,action) =>{
            state.houses = [...action.payload].reverse()
            state.corousel = state.houses.slice(0,5)
            for(let i=0;i<state.houses.length;i++){
                if(state.houses[i].offer){
                    state.house_with_offer=[...state.house_with_offer,state.houses[(i)]]
                }
                if(state.houses[i]["sell/rent"]==="Sell"){
                    state.house_on_sale=[...state.house_on_sale,(state.houses[i])]
                }
                if(state.houses[i]["sell/rent"]==="Rent"){
                    state.house_on_rent=[...state.house_on_rent,(state.houses[i])]
                }
            }

        },
        [fetchHouses.rejected] : () =>{
            toast.error('Operation failed!');
            
        },
        [addHouse.fulfilled] : (state,action) =>{
            state.houses=[action.payload,...state.houses]
            state.current_User_Houses=[action.payload,...state.current_User_Houses]
            if(state.corousel.length===5){
                state.corousel.pop()
            }
            state.corousel=[action.payload,...state.corousel]
            if(action.payload["sell/rent"]==="Sell"){
                state.house_on_sale=[action.payload,...state.house_on_sale]
            }
            else{
                state.house_on_rent=[action.payload,...state.house_on_rent]
            }
            if(action.payload.offer){
                // console.log(action.payload)
                state.house_with_offer=[action.payload,...state.house_with_offer]
            }
        },
        [addHouse.rejected] : () =>{
            toast.error('Operation failed!');
        },
        [getCurrentUserData.fulfilled] : (state,action) =>{
            state.current_User_Houses=[...action.payload]
        },
        [getCurrentUserData.rejected] : () =>{
            toast.error('Operation failed!');
        },  
        [editHouse.fulfilled] : (state,action) =>{

            state.houses=state.houses.map((house)=>{
                return house.id===action.meta.arg.id?action.meta.arg:house
            })
            state.current_User_Houses=state.current_User_Houses.map((house)=>{
                return house.id===action.meta.arg.id?action.meta.arg:house
            })
            state.corousel = state.corousel.map((house)=>{
                return house.id===action.meta.arg.id?action.meta.arg:house
            })
            state.house_with_offer = state.house_with_offer.filter((house)=>house.id!==action.meta.arg.id)
            state.house_on_rent = state.house_on_rent.filter((house)=>house.id!==action.meta.arg.id)
            state.house_on_sale = state.house_on_sale.filter((house)=>house.id!==action.meta.arg.id)
            if(action.meta.arg["sell/rent"]==="Sell"){
                state.house_on_sale=[action.meta.arg,...state.house_on_sale]
            }
            else{
                state.house_on_rent=[action.meta.arg,...state.house_on_rent]
            }
            if(action.meta.arg.offer){
                // console.log(action.payload)
                state.house_with_offer=[action.meta.arg,...state.house_with_offer]
            }
        },
        [editHouse.rejected] : () =>{
            toast.error('Operation failed!');
        },
        [deleteHouse.fulfilled] : (state,action) =>{
            state.houses=[...state.houses.filter((house)=>house.id!==action.meta.arg.id)]
            state.current_User_Houses=[...state.current_User_Houses.filter((house)=>house.id!==action.meta.arg.id)]
            state.house_with_offer = [...state.house_with_offer.filter((house)=>house.id!==action.meta.arg.id)]
            state.house_on_rent = [...state.house_on_rent.filter((house)=>house.id!==action.meta.arg.id)]
            state.house_on_sale = [...state.house_on_sale.filter((house)=>house.id!==action.meta.arg.id)]
            state.corousel = state.houses.slice(0,5)

        },
        [deleteHouse.rejected] : () =>{
            toast.error('Operation failed!');
        }
        
    }
    

})
export const HouseActions = HouseSlice.actions
export default HouseSlice.reducer