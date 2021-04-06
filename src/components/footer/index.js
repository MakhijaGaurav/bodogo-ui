import React from 'react'
import {Button, Col, Input, Row} from "antd";
import {Link} from "react-router-dom";
class FooterContent extends React.Component{
    render(){
        return(
            <Row gutter={12}>
                <Col span={6}>
                    <div>
                        <h3>Newsletter</h3>
                        <p>Subscribe to get notified about product launches, special offers and company news.</p>
                        <Input/>
                        <Button>Subscribe</Button>
                    </div>
                </Col>
                <Col span={6}>
                    <h3>Information</h3>
                    <div><Link>About Us</Link></div>
                    <div><Link>Privacy Policy</Link></div>
                    <div><Link>Terms of Use</Link></div>

                </Col>
                <Col span={6}>
                    <h3>About Bodogo</h3>
                    <p>We make Chairs for people who love Movies and TV Shows. Our mission is to deliver an immersive binge watching experience with our products.  #BingeWithBodogo</p>
                </Col>
                <Col span={6}>
                    <h3>Support</h3>
                    <div>
                        <Link>FAQ's</Link>
                    </div>
                    <div>
                        <Link>All Products</Link>
                    </div>
                    <div>
                        <Link>Warranty</Link>
                    </div>
                    <div>
                        <Link>Cancellation Policy</Link>
                    </div>
                    <div>
                        <Link>Customer Care</Link>
                    </div>
                    <div>
                        <Link>Offline Store</Link>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default FooterContent