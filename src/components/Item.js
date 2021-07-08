import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  constructor(){
    super();
    this.state={update:false}
  }
  checkItem = (e) => {
    //your code here
    this.props.store.checkItem(e.target.value)
  }
  editItem = (name,location) => {
    //your code here
    this.props.store.editItem(name,location)
    this.setState({update:true})
  }
  deleteItem = (name) => {
    //your code here
    this.props.store.deleteItem(name)
    this.setState({update:false})
  }
  handleLocation = () =>{
    let item = this.props.item
    var location = prompt("Please enter your location", "");
    this.editItem(item.name,location)
  }

  delete= () =>{
    let item = this.props.item
    this.deleteItem(item.name);
  }
  render() {
    let item = this.props.item
    return (
        <div className = {item.completed ? "crossed": null}>
        <input type="checkbox"
            onClick = {this.checkItem}
            value={item.name}/> 
            {item.name} {item.location}
        <button onClick={this.handleLocation}>editButton</button>
        <button onClick={this.delete}>Delete</button>
        </div>)
}
}

export default observer(Item)