import React from 'react';
import { Row, Col } from 'antd';
import SkillsIcons from '../Skills/MySkills';
import Headshot from '../../../Assets/Headshot.png';
import Resume from '../../../Assets/Emory_Brunner_Resume.pdf'

const AboutMe = () => {
    return (
        <div style={{marginTop: '8vh'}}>
            <Row>
                <Col span={3}>
                </Col>
                <Col span={10}>
                    <p>Hi, I'm Emory, and I am a Web Developer and Designer.</p>

                    <p>I hold a degree in International Relations from Indiana University Bloomington, and I have a passion for language and cultural exchange. So, you may ask yourself...what led her from a career in political science and liberal arts to one of the fastest-growing STEM fields out there?</p>

                    <p>Following my graduation from university, I worked in the culinary world for a few years. Enter: COVID-19. The industry began to change rapidly and I - like many others - began to realize that this could be the perfect opportunity for a change of pace. Eleven Fifty Academy came onto my radar through mutual connections to the program, and I decided jump in headfirst into their Web Development Bootcamp.</p>

                    <p>Four months later, I feel confident enough to say that I am not only ready, but excited to take the next step towards becoming a professional developer. I am eager to expand my knowledge of web development and design, and I can't wait to see what the future holds. </p>

                    <p><a target="blank" href={Resume}>View my Resume here!</a></p>
                </Col>
                <Col span={2}></Col>
                <Col span={9}>
                    <img
                        src={Headshot} style={{
                            height: '300px',
                            marginTop: '5.5vh',
                            borderRadius: '5px'
                        }}
                        alt="Emory Brunner"
                    />
                </Col>
            </Row>
            <Row>
                <SkillsIcons />
            </Row>
        </div>
    )
}

export default AboutMe
