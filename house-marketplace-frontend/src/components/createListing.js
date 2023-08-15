import { Fragment, useState,useRef, useEffect } from "react"
import OptionComponent from "./OptionComponent"
import TextInput from "./inputform"
import SpinBar from "./spinbar"
import ImageSelector from "./ImageSelector"
import { toast } from "react-toastify"
import { useSelector,useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { addHouse,editHouse,HouseActions } from "../store/houses"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const CreateListing = ()=>{
    const dispatch = useDispatch()
    const {user_logged_in} = useSelector(state=>state.credential)
    const {selected_House} = useSelector(state=>state.houses)
    const nameRef = useRef(null)
    const secondRef = useRef(null)
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
    const location = useLocation()
    useEffect(()=>{
        if(user_logged_in.id===-1){
            toast.error('Sign In First')
            navigate('/sign-in')
            return 
        }
        if(location.pathname.includes('/edit-listing/')){
            const idString = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
            const id = (idString);
            dispatch(HouseActions.findbyIndex(id))
            setName(selected_House.name)
            setSoR(selected_House["sell/rent"]==="Sell"?0:1)
            setBedrooms(selected_House.bedrooms)
            setBathrooms(selected_House.bathrooms)
            setPS(selected_House["parking spot"]?0:1)
            setFurnished(selected_House.furnished?0:1)
            setAddress(selected_House.address)
            setOffer(selected_House.offer?0:1)
            setRegPrice(selected_House["regular price"])
            setDisPrice(selected_House["discounted price"])
            setImages([...selected_House.image])
            // console.log(selected_House.image)
        }

        
        setDisPrice(disPrice!=="-1"?disPrice:"50")
    },[selected_House,user_logged_in,disPrice,location.pathname,navigate,dispatch])
    const FormSubmitHandler = ()=>{
        if(name.length<10){
            toast.error(`Name require minimum 10 character (You wrote ${name.length})`)
            nameRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }

        if(bedrooms<1){
            toast.error("Minimum bedrooms limit is 1")
            nameRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }
        if(bedrooms>50){
            toast.error("Maximum bedrooms limit is 50")
            nameRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }

        if(bathrooms<1){
            toast.error("Minimum bathroom limit is 1")
            nameRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }
        if(bathrooms>50){
            toast.error("Maximum bathrooms limit is 50")
            nameRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }
        if(address.length<10){
            toast.error(`Address require minimum 10 character (You wrote ${address.length})`)
            secondRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }
        if(regPrice<50){
            toast.error("Minimum Regular Price limit is 50")
            secondRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }
        if(regPrice>750000000){
            toast.error("Maximum Price limit is 750000000")
            secondRef.current.scrollIntoView({ behavior: "smooth" })
            return 
        }
        if(Offer===0){

            if(disPrice>=regPrice){
                toast.error("Discount Price must be lesser than Regular Price ")
                secondRef.current.scrollIntoView({ behavior: "smooth" })
                return 
            }
            if(disPrice<50){
                toast.error("Minimum Discount Price limit is 50")
                secondRef.current.scrollIntoView({ behavior: "smooth" })
                return 
            }
            if(disPrice>750000000){
                toast.error("Maximum Price limit is 750000000")
                secondRef.current.scrollIntoView({ behavior: "smooth" })
                return 
            }
        }
        if(images.length===0){
            toast.error("Please Select Atleast one image")
                return 
        }
        const house = {
            "email": user_logged_in['email'],
            "sell/rent": SellorRent===0?"Sell":"Rent",
            "name": name,
            "bedrooms": bedrooms,
            "bathrooms": bathrooms,
            "parking spot": ParkingSpot===0?true:false,
            "furnished": Furnished===0?true:false,
            "address": address,
            "offer": Offer===0?true:false,
            "regular price": `${regPrice}`,
            "discounted price": Offer===0?disPrice:"-1",
            "image": images
          }
        // console.log(house)
        if(location.pathname.includes('/edit-listing/')){
            const idString = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
            const id = (idString);
            house.id=id
            dispatch(editHouse(house))
                }
        else{
        dispatch(addHouse(house))}
        navigate('/profile')
          
    }
    return (
        <Fragment>
            
            <div ref={nameRef} style={{margin:'0 5% 8%',textAlign:'left',fontSize:'1.2rem'}}>
            <div ref={nameRef} style={{cursor:'pointer',display:'inline'}} onClick={()=>{navigate(-1)}}>
                <ArrowBackIosIcon/> Back
            </div>
            <div style={{marginTop:'1%'}}>
                <p style={{margin:'0 0 1% ',fontWeight:'bold'}}>Sell/Rent</p>
            <OptionComponent values={['Sell','Rent']} selectedOption={SellorRent} changeSelection={setSoR}/>
            </div>
            <div  style={{width:"40%" ,marginTop:'1%'}}>
            <p style={{margin:'0 0 1% ',fontWeight:'bold'}}>Name</p>
            <TextInput type='text' name='Name' placeholder='' onChange={setName} value={name} style={{padding:"3%",marginBottom:'2%'}} maxlength={32} minlength={10}/>
            </div>
            <div style={{marginTop:'1%'}}>
            <div style={{display:'flex',width:'35%',justifyContent:'space-between',marginBottom:'1%'}}>
            <span style={{fontWeight:'bold'}}>Bedrooms</span>
            <span style={{fontWeight:'bold'}}>Bathrooms</span>
            </div>
            <div style={{display:'flex',width:'35%',justifyContent:'space-between',marginBottom:'1%'}}>            
            <SpinBar minValue={1} maxValue={50} value={bedrooms} onChange={setBedrooms}/>
            <SpinBar minValue={1} maxValue={50} value={bathrooms} onChange={setBathrooms}/>

            </div>
            </div>
            <div style={{marginTop:'1%'}}>
                <p style={{margin:'0 0 1% ',fontWeight:'bold'}}>Parking Spot</p>
            <OptionComponent values={['Yes','No']} selectedOption={ParkingSpot} changeSelection={setPS}/>
            </div>
            <div style={{marginTop:'1%'}}>
                <p style={{margin:'0 0 1% ',fontWeight:'bold'}}>Furnished</p>
            <OptionComponent values={['Yes','No']} selectedOption={Furnished} changeSelection={setFurnished}/>
            </div>
            <div ref={secondRef} style={{marginTop:'1%'}}>
            <p style={{margin:'0 0 1% ',fontWeight:'bold'}}>Address</p>
            <textarea value={address} onChange={(e)=>{setAddress(e.target.value)}} rows={2} style={{width:"40%",border:'none',outline:'none',fontSize:'1rem',borderRadius:"15px",padding:"2%"}}/>
            </div>
            <div style={{marginTop:'1%'}}>
                <p style={{margin:'0 0 1% ',fontWeight:'bold'}}>Offer</p>
            <OptionComponent values={['Yes','No']} selectedOption={Offer} changeSelection={setOffer}/>
            </div>
            <div style={{marginTop:'1%'}}>
            <p style={{fontWeight:'bold'}}>Regular Price</p>
            <SpinBar minValue={50} maxValue={750000000} value={regPrice} onChange={setRegPrice}/>
            {SellorRent===1 && <label style={{marginLeft:'5%'}}>$/month</label>}
            </div>
            {Offer===0 && <div style={{marginTop:'1%'}}>
            <p style={{fontWeight:'bold'}}>Discounted Price</p>
            <SpinBar minValue={50} maxValue={750000000} value={disPrice} onChange={setDisPrice}/>
            </div>}
            <div style={{marginTop:'1%'}}>
            <p style={{fontWeight:'bold',marginBottom:'0'}}>Images</p>
            <p style={{fontSize:'1rem',marginBottom:"1%"}}>The first image will be the cover (max 6).</p>
                <ImageSelector values={images} onChange={setImages}/>
            </div>
            <div style={{display:'block',textAlign:"center",margin:'8%'}}>
            <span style={{background:'teal',padding:'2%',fontWeight:'bold', borderRadius:'15px',cursor:'pointer'}} onClick={FormSubmitHandler}>{location.pathname.includes('/edit-listing/')?'Update':'Create'} Listing</span>
            </div>
            </div>
        </Fragment>
    )
}
export default CreateListing