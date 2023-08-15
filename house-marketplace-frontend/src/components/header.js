import { useLocation,useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { CredentialActions } from "../store/credential"
const Header = ()=>{
    const LogoutHandler =()=>{
        dispatch(CredentialActions.logout())
        navigator('/')
    }
    const location = useLocation()
    const navigator = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
        {location.pathname==='/category/rent' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Places for Rent</header>}
        {location.pathname==='/category/sale' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Places for Sale</header>}
        {location.pathname==='/create-listing' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Create a Listing</header>}
        {location.pathname==='/' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Explore</header>}
        {location.pathname==='/offers' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Offers</header>}
        {location.pathname==='/sign-in' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Welcome Back!!!</header>}
        {location.pathname==='/sign-up' && <header style={{paddingLeft:'5%',fontSize:'2rem',fontWeight:'bolder'}}>Welcome Back!!!</header>}
        {location.pathname==='/profile' && 
        <div>
            <header style={{display:'flex',paddingLeft:'5%',justifyContent:'space-between'}}>
                <span style={{fontWeight:'bolder',fontSize:'2rem'}}>My Profile</span>
                <button style={{textOverflow:false,width:'15%',fontWeight:'bolder',margin:'auto 5%',borderRadius:'15px',backgroundColor:'teal'}} onClick={LogoutHandler}>LogOut</button>
            </header>
        </div>}
        {location.pathname.includes('/contact') && <header style={{paddingLeft:'3%',fontSize:'2rem',fontWeight:'bolder',margin:0}}>Contact Landlord</header>}


        </>
    )
}
export default Header