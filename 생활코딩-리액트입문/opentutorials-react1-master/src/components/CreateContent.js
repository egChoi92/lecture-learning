import React, { Component } from 'react';

class CreateContent extends Component {
    render(){
        return(
        <article>
            <h2>CREATE</h2>
            <form onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(e.target.title.value, e.target.desc.value)
            }.bind(this)}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="desc" placeholder="description"></textarea></p>
                <p><button type="submit">SUBMIT</button></p>
            </form>
        </article>
        );
    }
}

export default CreateContent;
