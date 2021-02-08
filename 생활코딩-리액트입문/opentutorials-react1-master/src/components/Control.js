import React, { Component } from 'react';

class Control extends Component {
    render(){
        return (
        <div>
            <button type="button" onClick={function() {
                this.props.onChangePage("create")
            }.bind(this)}>CREATE</button>&nbsp;
            <button type="button" onClick={function(){
                this.props.onChangePage("update")
            }.bind(this)}>UPDATE</button>&nbsp;
            <button type="button" onClick={function(){
                this.props.onChangePage("delete")
            }.bind(this)}>DELETE</button>
        </div>
        );
    }
}

export default Control;