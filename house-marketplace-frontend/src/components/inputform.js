import React from "react";
import  PropTypes  from "prop-types";


const TextInput = (
    {
        name,
        placeholder,
        type,
        onChange,
        value,
        isEditable,
        style,
        maxlength,
        minlength
    }
)=>{
    const changeHandler = (e)=>{
        onChange(e.target.value)
    }
    return (
        <>
        <input type={type} name={name}  maxLength={maxlength} minLength={minlength} placeholder={placeholder} style={{ ...style,color:"black",outline:'0',border:'none',width:"90%",borderRadius:"15px"}} onChange={changeHandler} value={value} disabled={!isEditable} />

        </>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    isEditable: PropTypes.bool,
    style: PropTypes.object,
    maxlength: PropTypes.number,
    minlength: PropTypes.number,

}
TextInput.defaultProps = {
    type: 'text',
    isEditable: true,
    style: {}
}
export default TextInput