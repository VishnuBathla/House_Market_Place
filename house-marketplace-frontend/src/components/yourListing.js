import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteHouse, getCurrentUserData } from "../store/houses"
import Lister from "./lister"
import { useNavigate } from "react-router-dom"

const YourListing =()=>{
    const {current_User_Houses}=useSelector(state=>state.houses)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getCurrentUserData())
    },[dispatch])
    const deleteHandler=(house)=>{
        dispatch(deleteHouse(house))
    }
    return(
        <>
    <div style={{fontSize:'1.3rem',paddingLeft:'5%',margin:'2% 0 4%',textAlign:'left'}}>
        <span style={{fontWeight:'bold'}}>Your Listings</span>
            
        {
            current_User_Houses.map((house,idx)=>
                (<div key={idx} style={{width:'100%'}} >
                <Lister house={house} deleteHandler={()=>deleteHandler(house)} enabled={true} onClick={()=>{navigate(`/house/${house.id}`)}}/>
                </div>
                )
                )
        }
        </div>
        </>
    )
}
export default YourListing