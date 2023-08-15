import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Profile from './profile'
const PrivateRoute = () =>{
    const {is_signed_in} = useSelector((state)=>state.credential)

    return is_signed_in?<Profile/>:<Navigate to="/sign-in"/>
}
export default PrivateRoute