import { useSelector } from "react-redux"
import Lister from "./lister"
import { useNavigate } from "react-router-dom"

const Sale = ()=>{
    const {house_on_rent} = useSelector((state)=>state.houses)
    const navigate = useNavigate()

    return (
        <div style={{textAlign:'left',marginBottom:'5%'}}>
            {/* {console.log(house_on_rent)} */}
        {house_on_rent.map((house,idx)=>{
                return (<div key={idx} style={{width:'100%'}} >
                <Lister house={house} enabled={false} onClick={()=>{navigate(`/house/${house.id}`)}} />
                </div>)
            })
        }
        </div>
    )
}
export default Sale