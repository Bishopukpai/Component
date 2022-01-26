import React, {Component} from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome to our page, please subscribe'
        }
    }
    changestate() {
        this.setState ({
            message: 'Thank you for suscribing'
        })
    }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick = {() => this.changestate()}>Subscribe</button>
        </div>
        )
    }
}
export default Message