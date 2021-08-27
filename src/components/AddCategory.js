import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')

    const HandleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
    
    const HandleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories((cats)=>[inputValue,...cats] )
            setInputValue('')
        }

       
    }

    AddCategory.prototype={
        setCategories:PropTypes.func.isRequired
    }


    return (
        <form onSubmit={HandleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={HandleInputChange}
            />
        </form>
    )
}
