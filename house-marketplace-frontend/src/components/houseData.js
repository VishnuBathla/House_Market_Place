import { Fragment, useState, useEffect } from "react"
import ImageSlider from "./imageSlider"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate,useParams } from "react-router-dom"
import { HouseActions } from "../store/houses"
const HouseData = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const {user_logged_in} = useSelector(state=>state.credential)
    const {selected_House} = useSelector(state=>state.houses)
    const [SellorRent,setSoR]= useState(1)
    const [ParkingSpot,setPS]= useState(1)
    const [Furnished,setFurnished]= useState(1)
    const [Offer,setOffer]= useState(1)
    const [name,setName] = useState("")
    const [bedrooms,setBedrooms] = useState(1)
    const [bathrooms,setBathrooms] = useState(1)
    const [address,setAddress] = useState("")
    const [regPrice,setRegPrice] = useState(50)
    const [disPrice,setDisPrice] = useState(50)
    const [images,setImages] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        if(id){

            dispatch(HouseActions.findbyIndex(id))
        }
    },[id,dispatch])
    useEffect(()=>{
        setName(selected_House.name)
        setSoR(selected_House["sell/rent"]==="Sale"?0:1)
        setBedrooms(selected_House.bedrooms)
        setBathrooms(selected_House.bathrooms)
        setPS(selected_House["parking spot"]?0:1)
        setFurnished(selected_House.furnished?0:1)
        setAddress(selected_House.address)
        setOffer(selected_House.offer?0:1)
        setRegPrice(selected_House["regular price"])
        setDisPrice(selected_House["discounted price"])
        setImages([...selected_House.image])
        setDisPrice(selected_House.disPrice!==-1?disPrice:0)
    },[selected_House,disPrice])
    
    return (
        <Fragment>
            {/* <div style={{zIndex:2,padding:"1%",position:'fixed',right:"4%",top:"3%",background:'white',borderRadius:"50%",cursor:'pointer'}}>
            <ShareIcon />
            </div> */}
            <ImageSlider images={images}/>
            <div style={{marginLeft:'8%',textAlign:'left'}}>
            <p style={{fontSize:'1.5rem',fontWeight:'bold',marginTop:'2%',marginBottom:0}}>{name} - ${Offer===0?disPrice:regPrice}</p>
            <p style={{fontSize:'1rem',fontWeight:'bold'}}>{address}</p>
            <p style={{fontSize:'1rem',fontWeight:'bold',background:'teal',color:'white',display:'inline-flex',padding:'1%',borderRadius:'15px',margin:'0 3% 0 0'}}>For {SellorRent===0?"Sell":"Rent"}</p>
            {Offer===0 && <p style={{fontSize:'1rem',fontWeight:'bold',background:'black',color:'white',display:'inline-flex',padding:'1%',borderRadius:'15px',margin:'0 3% 0 0'}}>${regPrice-disPrice} discount</p>}
                <p style={{margin:'0'}}>{bedrooms} bedrooms</p>
            <p style={{margin:'0'}}>{bathrooms} bathrooms</p>
            {ParkingSpot===0 && <p style={{margin:'0'}}>Parking Spot</p>}
            {Furnished===0 && <p style={{margin:'0'}}>Furnished</p>}
            {user_logged_in.email!==selected_House.email && <div style={{display:'block',textAlign:"center",margin:'3% auto 8%'}}>
            <span style={{background:'teal',padding:'2%',fontWeight:'bold', borderRadius:'15px',cursor:'pointer'}} onClick={()=>navigate(`/contact/${selected_House.id}`)}>Contact Landlord</span>
            </div>}
            </div>
        </Fragment>
    )
}
export default HouseData