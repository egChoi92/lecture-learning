import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc  
        }
        this.valueChange = this.valueChange.bind(this)
    }
    valueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
        <article>
            <h2>UPDATE</h2>
            <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc
                )
            }.bind(this)}>
                <input type="hidden" name="id" value={this.state.id}></input>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title" 
                        value={this.state.title} 
                        onChange={this.valueChange}></input>
                </p>
                <p>
                    <textarea 
                        name="desc" 
                        placeholder="description" 
                        value={this.state.desc}
                        onChange={this.valueChange}></textarea>
                </p>
                <p><input type="submit" value="SUBMIT"></input></p>
            </form>
        </article>
        );
    }
}

export default UpdateContent;
