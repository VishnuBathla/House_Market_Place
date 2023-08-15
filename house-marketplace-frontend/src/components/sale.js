import { useSelector } from "react-redux"
import Lister from "./lister"
import { useNavigate } from "react-router-dom"

const Sale = ()=>{
    const navigate = useNavigate()
    const {house_on_sale} = useSelector((state)=>state.houses)
    return (
        <div style={{textAlign:'left',marginBottom:'5%'}}>
        {house_on_sale.map((house,idx)=>{
                return (<div key={idx} style={{width:'100%'}} >
                <Lister house={house} enabled={false} onClick={()=>{navigate(`/house/${house.id}`)}}/>
                </div>)
            })
        }
        </div>
    )
}
export default Sale