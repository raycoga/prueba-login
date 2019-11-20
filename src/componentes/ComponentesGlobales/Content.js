import React, { Component } from "react"

class Navbar extends Component {
    
    render() {
    const {body}=this.props
    console.log(body)
        return (
            <div > {body}</div>
        )
    }
}
export default Navbar