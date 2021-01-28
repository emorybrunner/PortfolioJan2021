import React from 'react';
import {Collapse, Row, Col} from 'antd';

import StoryBook from '../../../Assets/StoryBook.png'
import NASA from '../../../Assets/apitwo.jpg'
import Adobe from '../../../Assets/staticLayout.jpg'
import Lola from '../../../Assets/cssCreature.jpg'

const {Panel} = Collapse;

const MyProjects = () => {
    function callback(key) {
        console.log(key);
    }

    return (
        <div>
            <h2 style={{
                marginTop: '8vh',
                marginLeft: '16vw'
            }}>View My Projects:</h2>
            <h6>{/* */}</h6>
            <Collapse 
                defaultActiveKey={['1']} 
                onChange={callback} 
                accordion 
                style={{
                    marginLeft: '15vw',
                    width: '70vw', 
                    marginTop: '2vh'
                }}
            >
                <Panel showArrow={false} header="StoryBook" key="1">
                <Row>
                        <Col span={6}><img
                            src={StoryBook} 
                            style={{
                                height: "50vh",
                                width: '24vw'
                            }}
                            alt="StoryBook Example"
                        /> </Col>
                        <Col span={4}> </Col>
                        <Col span={14}>
                            <p style={{fontSize: '1.5em', marginTop: '5vh', marginLeft: '2vw'}}>A forum for writers and readers that allows users to post, read, edit, and delete stories and prompts. The app uses JavaScript via React along with PostgreSQL to allow users to store and access their posts and information. Ant Design was used to style the site, and it was deployed with Heroku. In the future, I would like to continue styling the site and add functionalities to comment on and rate posts.</p>
                            <a target='blank' href='https://eb-storybook-client.herokuapp.com/' style={{fontSize: '1.5em', marginLeft: '2vw'}}>View StoryBook</a>
                        </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header="NASA Photo of the Day" key="2">
                    <Row>
                        <Col span={6}><img
                            src={NASA} 
                            style={{
                                height: "50vh",
                                width: '24vw'
                            }}
                            alt="NASA API Project"
                        /></Col>
                        <Col span={4}> </Col>
                        <Col span={14}><p style={{fontSize: '1.5em', marginTop: '5vh', marginLeft: '2vw'}}>An app that allows you to search the NASA Astronomy Photo of the Day Archive by date, dating back to June 1995. This project used JavaScript, HTML5, and CSS3 to create an aesthetically pleasing page that pulls information from the NASA Photo Archive API. The site was deployed using Firebase and styled with Bootstrap.</p>
                        <a target='blank' href='https://eb-api-nasa.web.app/' style={{fontSize: '1.5em', marginLeft: '2vw'}}>View the NASA Photo of the Day</a>
                        </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header="Adobe Static Layout Page" key="3">
                <Row>
                        <Col span={6}><img
                            src={Adobe} 
                            style={{
                                height: "50vh",
                                width: '24vw'
                            }}
                            alt="Adobe Page"
                        /> </Col>
                        <Col span={4}> </Col>
                        <Col span={14}>
                            <p style={{fontSize: '1.5em', marginTop: '5vh', marginLeft: '2vw'}}>The aim of this project is to make a static layout recreation of a page on the Adobe website. It was created using only HTML5 and CSS3, with the goal of developing a deep understanding of the fundamentals of building a website.</p>
                            <a target='blank' href='https://emorybrunner.github.io/StaticLayoutProject/' style={{fontSize: '1.5em', marginLeft: '2vw'}}>View the Adobe Static Layout</a>
                        </Col>
                    </Row>
                </Panel>
                <Panel showArrow={false} header="CSS Pet" key="4">
                <Row>
                        <Col span={6}><img
                            src={Lola} 
                            style={{
                                height: "50vh",
                                width: '24vw'
                            }}
                            alt="CSS Lola"
                        /> </Col>
                        <Col span={4}> </Col>
                        <Col span={14}>
                            <p style={{fontSize: '1.5em', marginTop: '5vh', marginLeft: '2vw'}}>This image was created exclusively with CSS3 and a basic HTML document, with the goal of understanding how different divs interact when styled. To make a creative and aesthetically pleasing image, I decided to "paint" a portrait of my dog, Lola.</p>
                            <a target='blank' href='https://codepen.io/emorybrunner/pen/MWeWVKg' style={{fontSize: '1.5em', marginLeft: '2vw'}}>View the CSS Pet</a>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    )
}

export default MyProjects
