import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const PostOption = ()=>{
    return (
        <>
        <Link to='/create-listing' style={{textDecoration:'none',color:'black'}}>
        <div style={{display:'flex',background:'white',width:"35%",marginLeft:'5%',borderRadius:"15px",marginTop:'2%',justifyContent:'space-between',padding:'2%'}}>
        
            <HomeIcon style={{margin:'0 auto'}}/>
            <p style={{margin:'0 auto'}}>Sell or rent your home</p>
            <ArrowForwardIosIcon style={{margin:' 0 auto'}}/>

        </div>
        </Link>
        </>
    )
}
export default PostOption