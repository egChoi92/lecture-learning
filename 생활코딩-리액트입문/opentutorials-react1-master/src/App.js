import React, {Component} from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.maxId = 3;
    this.state={
      mode: "welcome",
      subject: {title:"WEB", sub:"World Wide Web!"},
      welcome: {title:"Welcome", desc:"hellow React!"},
      selectedId: 0,
      contents: [
        {id:1, title:"HTML", desc:"HTML is for Information"},
        {id:2, title:"CSS", desc:"CSS is for Design"},
        {id:3, title:"Javascript", desc:"Javascript is for Interactive"}
      ]
    }
  };
  getReadContent(){
    for (let i = 0; i < this.state.contents.length; i++) {
      var data = this.state.contents[i];
      if (this.state.selectedId != 0 && data.id == this.state.selectedId) {
        return data;
      }
    }
  }
  getContent(){
    var _title, _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} sub={_desc}></ReadContent>
    } else if(this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} sub={_content.desc}></ReadContent>
    } else if(this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.maxId = this.maxId + 1;
        var newContents = this.state.contents.concat({
          id:this.maxId, title:_title, desc:_desc
        })
        this.setState({
          contents: newContents
        })
      }.bind(this)}></CreateContent>
    } else if(this.state.mode == "update") {
      var _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc) {
        var updateContents = Array.from(this.state.contents)
        for (var i =0;i < updateContents.length; i++) {
          if (updateContents[i].id === _id) {
            updateContents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }          
        }
        this.setState({
          mode:"read",
          contents:updateContents
        })
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(){
            this.setState({
              mode: "welcome",
              selectedId: 0
            })
          }.bind(this)}
        ></Subject>
        <TOC 
          data={this.state.contents}
          onChangePage={function(id){
            this.setState({
              mode: "read",
              selectedId: Number(id)
            })
          }.bind(this)}
        ></TOC>
        <Control onChangePage={function(_mode){
          if (this.state.mode === "welcome") {
            if (_mode === "create") {
              this.setState({
                mode: _mode
              })              
            } else {
              alert("Can't run")
            }
          } else {
            if (_mode === "delete") {
                var deleteContent = Array.from(this.state.contents);
                for (var i = 0; i < deleteContent.length; i++) {
                  
                  if(deleteContent[i].id == this.state.selectedId){
                    if (window.confirm("Are you going to delelte "+deleteContent[i].title)) {
                      deleteContent.splice(i,1)
                      alert("Deleted!")
                      this.setState({
                        mode:"welcome",
                        selectedId: 0,
                        contents:deleteContent
                      })
                      break;
                    }
                  }
                }
            }else {
              this.setState({
                mode: _mode
              })
            }
          }
          
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
