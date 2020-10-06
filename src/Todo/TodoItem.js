import React from 'react'
import propTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1 rem',
        border: '1px solid #2bf',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button:{
        
    }
}
 function TodoItem({todo,index}){
     return(
     <li style={styles.li}>
        <span>
            <input type="checkbox" style={styles.input} /> 
        <strong>{index+1}</strong>
        {todo.title}
        </span>

        <button>&times;</button>
    </li>    
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    index: propTypes.number
}

export default TodoItem