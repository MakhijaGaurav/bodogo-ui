import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Menu} from "antd";

class Navbar extends Component{
    render(){
        return(
            <Menu mode={"horizontal"} theme={"light"} style={{'width':'100%'}}>
                <Menu.Item>
                    <Link to={'/'}>Bodogo</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/account'}>Account</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/cart'}>Cart</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
export default Navbar