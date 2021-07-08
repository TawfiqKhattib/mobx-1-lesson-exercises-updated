/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList  {
    constructor() {
        this.list = []
        this.length=0
        // your code here
        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action
        })
    }
    checkItem = (name) => {
        // your code here
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (name) => {
        // your code here
        let newItem = new Item(name);
        this.list.push(newItem);
    }
    editItem = (name,location) => {
        // your code here
        let itemIndx = this.list.findIndex(i => i.name === name)
        this.list[itemIndx].location=location
    }
    deleteItem = (name) => {
        // your code here
        let itemIndx = this.list.findIndex(i => i.name === name)
        this.list.splice(itemIndx,1);
    }
}

