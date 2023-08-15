import { useState,useEffect } from "react";
import TextInput from "./inputform"
import {useDispatch, useSelector} from 'react-redux'
import { addCredentials,CredentialActions } from "../store/credential";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import BadgeIcon from '@mui/icons-material/Badge';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignIn= ()=>{
    const [showPassword,setShowPassword] = useState(false)
    const location= useLocation()
    const dispatch =useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName]= useState("")
    const navigate = useNavigate()
    const {is_signed_in} = useSelector((state)=>state.credential)
    useEffect(()=>{
        if(is_signed_in){
            navigate('/')
        }
    },[is_signed_in,navigate])

    
    const Signer=()=>{
        remover()
        if(location.pathname==='/sign-up'){
            navigate('/sign-in')
        }else{
            navigate('/sign-up')
        }
    }
    const remover = ()=>{
        setEmail("")
        setName("")
        setPassword("")
    }
    const OnClickHandler=()=>{
        if(email==="" || !(/\S+@\S+\.\S+/.test(email))){
            toast.error('Enter Valid Email')
            return 
        }
        if(password===""){
            toast.error('Enter Password')
            return 
        }
        if(location.pathname==='/sign-in'){
            dispatch(CredentialActions.validator({email:email,password:password}))
        }else{
            if(name===""){
                toast.error('Enter Name')
                return 
            }
            dispatch(addCredentials({name:name,email:email,password:password}))
        }
        
    }
    return(
        <>
        {location.pathname==='/sign-up' && <div style={{backgroundColor:"white",display:"flex",boxSizing:'border-box',borderRadius:'15px',margin:"2% 10%"}}>
        <BadgeIcon style={{margin:"1% 1%"}}/>
    <TextInput type='text' name='Name' placeholder='Name' onChange={setName} value={name}/>
    </div>}
        <div style={{backgroundColor:"white",display:"flex",boxSizing:'border-box',borderRadius:'15px',margin:"2% 10%"}}>
        <PersonIcon style={{margin:"1% 1%"}}/>
    <TextInput type='email' name='Email' placeholder='Email' onChange={setEmail} value={email}/>
    </div>
    <div style={{backgroundColor:"white",display:"flex",boxSizing:'border-box',borderRadius:'15px',margin:"0 10%"}} >
        <LockIcon style={{margin:"1% 1%"}}/>
    <TextInput type={showPassword?"text":"password"} name='Password' placeholder='Password' onChange={setPassword} value={password}/>
    {!showPassword?<span style={{cursor:'pointer',margin:"1% 1%"}} onClick={()=>setShowPassword(!showPassword)}><RemoveRedEyeIcon /></span>
    :<span style={{cursor:'pointer',margin:"1% 1%"}} onClick={()=>setShowPassword(!showPassword)}><VisibilityOffIcon /></span>
    }
        </div>
        <div style={{display:"flex",boxSizing:'border-box',margin:"2% 10%",width:"20%",justifyContent:'space-between'}}>
  {/* <Link to='/profile' style={{textDecoration:'none', display: 'inline-flex'}}> */}
    <span style={{margin:"auto",fontWeight:'bolder',fontSize:'1.5em',color:"black",cursor:'pointer'}} onClick={OnClickHandler}>Sign {location.pathname?"In":"Up"}</span>
  {/* </Link> */}
  {/* <Link to='/profile' style={{textDecoration:'none', display: 'inline-flex'}}> */}
    <ExpandCircleDownIcon style={{zoom:'200%',color:"#4CAF50",transform: 'rotate(-90deg)',cursor:'pointer'}} onClick={OnClickHandler} />
  {/* </Link> */}
  </div>
  <p style={{color:"#4CAF50",cursor:"pointer"}} onClick={Signer}>Sign {location.pathname==='/sign-up'?"Up":"In"} Instead</p>
        
        </>
    )
}
export default SignIn