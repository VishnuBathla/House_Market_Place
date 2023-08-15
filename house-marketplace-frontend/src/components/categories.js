import forSale from '../assets/forSale.jpg'
import forRent from '../assets/forRent.jpg'
import {Link} from 'react-router-dom' 
const Categories=()=>{
    return(
        <div style={{boxSizing:'border-box',width:"90%",margin:"5%",textAlign:'left'}}>
            <h3>Categories</h3>
            <div style={{display:'flex',margin:"2% auto 0"}}>
            <Link to='/category/rent' style={{width:"45%",margin:"0 8% 0 0 ",textDecoration:'none',color:'black'}}>
            
                <img src={forRent} style={{width:'100%',height:"40vh",display:"block",borderRadius:"7%"}} alt=''/>
                For Rent
            
            </Link>
            <Link to='/category/sale' style={{width:"45%",textDecoration:'none',color:'black'}} >
            
            <img src={forSale} style={{width:'100%',height:"40vh",display:'block',borderRadius:"7%"}} alt=''/>
                <span>For Sale</span>
            
            </Link>
            </div>
            </div>

    )
}
export default Categories