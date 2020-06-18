import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

const AboutPage = (props) => {
    return (
        <div>
            <Hero title={props.title}/>

            <Content>
                <p>oindcoindcs</p>
                <p>ouwdnbcfiuwenfuiwe</p>
                <p>ewdhvweuyvwey</p>
            </Content>

        </div>
    )
}

export default AboutPage;
