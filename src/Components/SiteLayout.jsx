import React from 'react';
import {Layout, Menu} from 'antd';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

import Splash from './Content/Splash/Splash'
import About from './Content/About/AboutMe'
import Portfolio from './Content/Projects/MyProjects'
import Contact from './Content/Contact/ContactMe'
import Links from './Content/Footer/Links'

const {Header, Content, Footer} = Layout


const SiteLayout = () => {
    return (
        <div>
            <Layout className="layout" style={{
                backgroundColor: '#fffcfa'
            }}>
                <Router>
                    <Header style={{ 
                        position: 'sticky',
                        zIndex: '1',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0)' 
                    }} 
                    >
                        <Menu mode="horizontal" style={{
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginLeft: '16.5vw',
                            width: '60vw'
                        }}
                        >
                            <Menu.Item key="1" style={{paddingLeft: '10px'}}><Link to="/"><HomeOutlined /></Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/portfolio">Portfolio</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/contact">Contact</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{
                        height: '115vh',
                        width: '100vw'
                    }}>
                        <Switch>
                            <Route exact path="/" render={() => (<Splash />)} />
                            <Route exact path="/about" render={() => (<About />)} />
                            <Route exact path="/portfolio" render={() => (<Portfolio />)} />
                            <Route exact path="/contact" render={() => (<Contact />)} />
                        </Switch>
                    </Content>
                </Router>
                <Footer style={{
                    height: '14vh',
                    width: '100vw',
                    backgroundColor: '#373c36',
                    textAlign: 'center'
                }}>
                    <Links />
                </Footer>
            </Layout>
        </div>
    )
}

export default SiteLayout
