const SpinBar = (
    {
        minValue,
        maxValue,
        value,
        onChange
        
    }
)=>{
    return (
        <input type='number' value={value} min={minValue} max={maxValue} style={{border:'none',borderRadius:'15px',textAlign:'center',outline:'none',padding:'1%'}} onChange={(e)=>{onChange(e.target.value)}}/>
    )
}
export default SpinBar