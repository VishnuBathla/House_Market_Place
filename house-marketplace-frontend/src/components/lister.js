import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Lister =({house,deleteHandler,enabled,onClick})=>{
    const navigate = useNavigate()
    return(
        
        <div style={{margin:'1%',display:'flex'}}>
            <img src={`${house.image[0]}`} alt="cover" style={{width:'19%',height:"25vh",borderRadius:"15px",cursor:'pointer'}} onClick={onClick} ></img>
            <div style={{marginLeft:"2%",width:"60%",cursor:'pointer'}} onClick={onClick}>
                <p style={{fontSize:'1rem',fontWeight:'normal'}}>{house.address}</p>
                <p style={{fontWeight:'bolder'}}>{house.name}</p>
                <p style={{color:'teal',fontWeight:'bold'}}>{house["sell/rent"]==='Sell'?"$":""}{house.offer?house["discounted price"]:house["regular price"]} {house["sell/rent"]==='Sell'?"":"$/month"}</p>
                <p>
                    <span style={{margin:'0 5% 0 0'}}>
                        <BedIcon style={{marginRight:'3%'}}/>
                        <span>{house.bedrooms} Bedrooms</span>
                    </span>
                    <span style={{margin:'0 5% 0 0'}}>
                        <BathtubIcon style={{marginRight:'3%'}}/>
                        <span>{house.bathrooms} Bathrooms</span>
                    </span>
                </p>
            </div>
            {/* {console.log(enabled)} */}
            {enabled && <ul style={{display:'inline-table',listStyle:'none'}}>
                <li style={{marginBottom:'40%',cursor:'pointer'} } onClick={()=>{
                    // console.log(house.id)
                    navigate(`/edit-listing/${house.id}`)}}><CreateIcon/></li>
                <li style={{cursor:'pointer'}} onClick={deleteHandler}><DeleteIcon/></li>
            </ul>}
        </div>
    )
}
export default Lister