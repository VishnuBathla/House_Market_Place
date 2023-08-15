import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { fetchCredentials } from "../store/credential"
import { useDispatch } from "react-redux"
const Footer =()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCredentials())
    })
    return (
        <footer style={{position:'fixed',bottom:0,width:"100%",opacity:'100%', background:"black",color:"white",marginTop:"2%",fontSize:'1.7rem',fontWeight:'bolder'}}>
            <ul style={{display:'flex',listStyle:'none',justifyContent:'space-between',padding:0}}>
                <li style={{padding:"0 10%",textAlign:'center',cursor:'pointer',background:`${window.location.pathname!=="/"?"black":"white"}`,color:`${window.location.pathname==="/"?"black":"white"}`}} onClick={()=>{navigate('/')
            }}>Explore</li>
                <li style={{textAlign:'center',cursor:'pointer',padding:"0 10%",background:`${window.location.pathname!=="/offers"?"black":"white"}` ,color:`${window.location.pathname==="/offers"?"black":"white"}`}} onClick={()=>{navigate('/offers')}}>Offers</li>
                <li style={{textAlign:'center',cursor:'pointer',padding:"0 10%",background:`${window.location.pathname!=="/profile"?"black":"white"}` ,color:`${window.location.pathname==="/profile"?"black":"white"}`}} onClick={()=>{navigate('/profile')}}>Profile</li>
            </ul>
        </footer>
    )
}

export default Footer