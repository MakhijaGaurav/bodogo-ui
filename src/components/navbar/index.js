import React, {Component} from 'react'
import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <div>
                <h3>This is Navbar</h3>
                <Link to={'/'}><h2>Home</h2></Link>
                <Link to={'/about'}><h2>About</h2></Link>
                <Link to={'/account'}><h2>Account</h2></Link>
                <Link to={'/cart'}><h2>Cart</h2></Link>
                <Link to={'/contact'}><h2>Contact</h2></Link>
                <Link to={'/faq'}><h2>FAQ</h2></Link>
                <Link to={'/warranty'}><h2>Warranty</h2></Link>

            </div>
        )
    }
}
export default Navbar