import React from 'react'
import {Carousel, Col, Row} from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

class App extends React.Component{
    render() {
        return(
            <div>
                <Row>
                    <Col span={24}>
                <Carousel autoplay={true}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
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

export default App