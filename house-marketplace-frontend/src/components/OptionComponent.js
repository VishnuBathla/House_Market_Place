const OptionComponent = (props)=>{
    return (
        <>
        <button style={{color:`${props.selectedOption===0?'white':'black'}`,background:`${props.selectedOption===0?'teal':'white'}`,margin:'0 2% 0 0',borderRadius:'15px',border:'none', padding:'2%'}} onClick={()=>props.changeSelection(0)}>{props.values[0]}</button>
        <button style={{color:`${props.selectedOption===1?'white':'black'}`,background:`${props.selectedOption===1?'teal':'white'}`,margin:'0 2% 0 0',borderRadius:'15px',border:'none', padding:'2%'}} onClick={()=>props.changeSelection(1)}>{props.values[1]}</button>
        </>
    )
}
export default OptionComponent