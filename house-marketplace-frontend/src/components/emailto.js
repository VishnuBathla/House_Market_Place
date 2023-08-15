import { Fragment, useState, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { HouseActions } from "../store/houses"
const HouseData = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const {selected_House} = useSelector(state=>state.houses)
    const [body,setBody] =useState("")
    useEffect(()=>{
        if(id){
            dispatch(HouseActions.findbyIndex(id))
        }
    },[id,dispatch])

    return (
        <Fragment><div style={{textAlign:'left',margin:'0 3%'}}>
            <p style={{fontSize:'1.5rem',fontWeight:'bolder'}}>Contact {selected_House.name}</p>
            <p style={{fontSize:'1rem',fontWeight:'bold'}}>Message</p>
            <textarea onChange={(e)=>setBody(e.target.value)} value={body} name="Message" placeholder="Message" style={{width:'90%',height:'60vh',borderRadius:'15px',padding:'1%'}}/>
            </div>
            <div style={{display:'block',textAlign:"center",margin:'3% auto 8%'}}>
            <span style={{background:'teal',padding:'2%',fontWeight:'bold', borderRadius:'15px',cursor:'pointer'}} onClick={()=>{
                // console.log(selected_House.email)
                window.location.href=(`mailto:${selected_House.email}?Subject=${selected_House.name}&body=${body}`)}}>Send Message</span>
            </div>
            </Fragment>
    )
}
export default HouseData