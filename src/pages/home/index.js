import React, {Component} from 'react'
import {Carousel, Col, Row} from "antd";
const contentStyle = {
    height: '900px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

class Home extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <Carousel autoplay pauseOnHover={false} autoplaySpeed={2000}>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home