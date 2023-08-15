
import TextInput from "./inputform"

const NameSlip = (props)=>{
    const {
        setName,
        setEmail
    } = props.setter
    const {name,email,isEditable} = props.values

    
    return (
        <>
        <div style={{background:'white',width:"35%",marginLeft:'5%',borderRadius:"15px",marginTop:'2%'}}>
        <span style={{borderRadius:'15px'}}>
            <TextInput name='Name' placeholder='Name' onChange={setName} value={name} isEditable={isEditable} style={{paddingLeft:'2%',background:`${!isEditable?'white':'grey'}`,margin:'1% 0'}}/>
        </span>
        <span style={{borderRadius:'15px'}}>
        <TextInput name='Email' placeholder='Email' onChange={setEmail} value={email} isEditable={isEditable} style={{paddingLeft:'2%',background:`${!isEditable?'white':'grey'}`,margin:'1% 0'}}/>
        </span>
        </div>
        </>
    )
}
export default NameSlip