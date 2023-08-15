import { useEffect, useState } from "react"
import NameSlip from "./nameSlip"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { updateCredentials } from "../store/credential"
import PostOption from "./postOption"
import YourListing from "./yourListing"
const Profile=()=>{
    const {user_logged_in}=useSelector(state=>state.credential)
    const [name,setName] = useState(user_logged_in.name)
    const [email,setEmail] = useState(user_logged_in.email)
    const [isEditable,setEditable] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        setName(user_logged_in.name)
        setEmail(user_logged_in.email)
    },[user_logged_in])
    const clickHandler = ()=>{
        if(isEditable){
            if(name===""){
                toast.error('Enter Name')
                return 
            }
            if(email==="" || !(/\S+@\S+\.\S+/.test(email))){
                toast.error('Enter Valid Email')
                return
            }
            // console.log(user_logged_in.id)
            dispatch(updateCredentials({name:name,email:email,id:user_logged_in.id,password:user_logged_in.password}))
            setName(user_logged_in.name)
            setEmail(user_logged_in.email)
    }
        setEditable(!isEditable)
    }
    return (
    <>
    <div style={{fontSize:'1.3rem',paddingLeft:'5%',display:'flex',width:"50%",justifyContent:'space-between'}}>
    <span>Personal Details</span>
    <span style={{color:'teal',cursor:"pointer",paddingRight:'10%'}} onClick={clickHandler}>{isEditable?'done':'change'}</span>
    </div>
    {/* <button onClick={()=>{navigate('/edit-listing/1')}}>Press me</button> */}
    <NameSlip setter={{setName,setEmail}} values={{name,email,isEditable}}/>
    <PostOption/>
    <YourListing/>
    
    </>
    )
}
export default Profile