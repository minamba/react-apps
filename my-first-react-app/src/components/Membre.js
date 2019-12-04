import React, { Fragment } from 'react'

const Membre = ({nom,age, children,hideName,handleChange}) => {
    // const name = props.nom
    return(      
        <Fragment>
            <input value={nom} onChange={handleChange} type ="text"/>     
            <h2 style={{
                backgroundColor: age<10? 'green' : 'purple', 
                color: 'white'}}>
                {nom.toUpperCase()} : {age}
           </h2>
            <button onClick ={hideName}>X</button>
            {children? <p>{children}</p> :  <Fragment/>}
           
        </Fragment>
    )
}
export default Membre