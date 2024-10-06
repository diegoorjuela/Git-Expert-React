import React, {useState}  from 'react'
import { AddCategory,SegmentCategory } from './componets';  // resumimos todos los importe en 1 trayendolos de el index de la carpeta components


export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['one punch man','Dragon Ball']);
    //const [currentCategory, setCurrentCategory] = useState('')

    const addCategory  = (event)=>{
        setCategories([...categories,'Boku no Hero'])
    }

    const onAddCategory = (value) =>{
        if(categories.includes(value))return
        setCategories([...categories,value])
        //setCurrentCategory(value);
    } //existen dos modos suministramos la funcion directamente en el onAddCategory o suministramos un arrow function que asu vez llama a la funcion  onAddCategory
    /*MODO 1 <AddCategory onAddCategory={ (event) =>{ return onAddCategory(event)} } />   SUMINISTRAMOS UN ARROW FUNCTION QUE A SU VEZ EJECUTA EL METODO Y LUEGO MANDA LOS DATOS A LA FUNCION*/
    /*MODO 2 <AddCategory onAddCategory={ onAddCategory } /> SUMINISTRAMOS DIRECTAMENTE LA FUNCION Y SE EJECUTA AL MOMENTO DEL EVENTO ONSUBMIT DEL FORMULARIO*/

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onAddCategory={ (event) =>{ return onAddCategory(event)} } />
            {/*listado*/}
            <button onClick={addCategory}>Agregar</button>
            {categories.map((category)=>{
                return(<div key={category}>
                    <SegmentCategory category={category}/>
                </div>)
            })}
        </>
    )
}
