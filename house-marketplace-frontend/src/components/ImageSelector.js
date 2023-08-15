import { toast } from "react-toastify"

const ImageSelector = ({
    values,onChange
})=>{
    const onClickHandler = (e)=>{
        
        // console.log(e)
        const idx=e.target.id
        // console.log(idx)
        // console.log(values)
        const img = window.prompt("Edit Image Link",values[idx])
        // console.log(img)
        if(img){
            values[idx]=img
            onChange([...values])
        }
        else{
            values.splice(idx,1)
            onChange([...values])
        }
        // console.log(values)
    }
    const ImageSubmission = ()=>{
        if(values.length===6){
            toast.error('You Have selected 6 images')
            return
        }
        const img = window.prompt("Enter Image Url")
        
        if(img){
            onChange([...values,img])
            return 
        }
        toast.error('Enter Something inside Prompt')

    }
    const maxLength = 25
    return (
        <>
        {/* {console.log(values)} */}
        <div style={{display:'flex',background:'white',borderRadius:'15px'}}>
            <button style={{background:'teal',borderRadius:'15px',margin:'2% 3%',padding:'1%'}} onClick={ImageSubmission}>Select Image</button>
            <div style={{width:'100%'}}>
            {
                values.map((val,id)=>{
                    
                    let displayText = val.length > maxLength ? val.substring(0, maxLength) + "..." : val
                    return (                  
                    <label key={id} id={id} style={{width:'45%',alignSelf:'flex-start',borderRadius:'15px',textAlign:'center',margin:'0.5% 1%',cursor:'pointer',background:'grey',whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} onClick={onClickHandler}>
                    {displayText}

                        </label>
                        )
                }
                )
            }
            </div>
        </div>
        </>
    )
}
export default ImageSelector