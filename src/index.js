import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from 'reportWebVitals';
import Navbar from "components/navbar";
import {BrowserRouter} from 'react-router-dom'
import Routes from "router";
import {Layout} from "antd";
import FooterContent from "./components/footer";
const {Header,Footer,Content} = Layout


ReactDOM.render(
    <BrowserRouter>
        <Layout>
                <Navbar/>
            <Content>
                <Routes/>
            </Content>
            <Footer>
                <FooterContent/>
            </Footer>
        </Layout>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
