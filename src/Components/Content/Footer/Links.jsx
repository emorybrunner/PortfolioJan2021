import React from 'react'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import {Anchor} from 'antd';

const {Link} = Anchor

const Links = () => {
    return (
        <div>

                <a style={{
                        color: '#f3f2f5', 
                        fontSize: '2em', 
                        marginRight: '6px'
                    }} 
                    target= 'blank'
                    href="https://github.com/emorybrunner" 
                >
                    <GithubFilled /> 
                </a>
                <a 
                    style={{
                        color: '#f3f2f5', 
                        fontSize: '2em', 
                        marginLeft: '6px'
                    }} 
                    target= 'blank'
                    href="https://www.linkedin.com/in/emory-brunner/" 
                >
                    <LinkedinFilled />
                </a>
            
        </div>
    )
}

export default Links
