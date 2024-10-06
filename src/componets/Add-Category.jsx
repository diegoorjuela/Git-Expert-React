import React, { useState } from 'react';
 
 export const AddCategory = ({onAddCategory}) => {
    const [valueInput, setValueInput] = useState('')
    const [ValuePlaceholder, setValuePlaceholder] = useState('Busca tu categoria preferida')
    
    const onInputChange = ({target})=>{
        setValueInput(target.value)
    }
    const onInputLostFocus = ({target})=>{
        if(!target.value){
            console.log('entro aca');
            setValuePlaceholder('Busca tu categoria preferida');
        }
    }

    const onSubmitForm = (event)=>{
        event.preventDefault();
        if (valueInput.trim().length <= 1) return
        onAddCategory(valueInput.trim());
        setValueInput('')
    }
    
   return (
    <form onSubmit={onSubmitForm}>
        <input 
            type='text'
            placeholder={ValuePlaceholder}
            value={valueInput}
            onChange={onInputChange}
            onBlur={(event)=>onInputLostFocus(event)}
        />
    </form>
   )
 }
 