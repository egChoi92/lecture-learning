import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        console.log(newProps, this.props.data)
        if (newProps.data === this.props.data) {
            return false;
        }
        return true;
    }
    render(){
        console.log("render")
        var lists = [];
        var data = this.props.data;

        for (let i = 0; i < data.length; i++) {
            lists.push(
                <li key={data[i].id}>
                    <a 
                        href={"/contents/"+data[i].id}
                        data-id={data[i].id} 
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id); 
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>
            )            
        }
        return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        );
    }
}

  
export default TOC;