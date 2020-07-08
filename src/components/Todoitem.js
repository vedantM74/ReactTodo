import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle =()=>{
        return{
            background: '#e0e0e0',
            padding:'10px',
            borderBottom:'1px black dotted',
            textDecoration: this.props.todo.completed?'line-through':'none'
        }
}
    render() {
        const{id,title} =this.props.todo;
        return (
            <div style= {this.getStyle()}>
                <p> 
        <input type="checkbox" onChange={this.props.markComplete
        .bind(this,id)} />{' '}
                    {title} 
                    <button onClick={this.props.delTodo.bind(this,id)}
                     style={btnStyle}>X</button>
                    </p>
            </div>
        )
    }
}

Todoitem.propTypes={
    todo:PropTypes.object.isRequired
}

const btnStyle={
    background: '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}

export default Todoitem
