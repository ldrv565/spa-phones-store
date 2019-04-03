import * as React from 'react';

import Content from '../../components/Content/Content';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import Image from '../../components/Image/Image';

import img from '../../../assets/img.jpg';


const About = () => (
    <React.Fragment>
        <Image src={img} alt="img" />
        <Content>
            <Title>
                {'About me.'}
            </Title>
            <Text modifier="note">
                {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
            </Text>
            <Title modifier="subtitle">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </Title>
            <Text>
                {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
            </Text>
            <Title modifier="subtitle">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </Title>
            <Text>
                {'Nulla lacinia, sapien nec mollis pharetra, neque diam sodales ipsum, suscipit commodo magna quam id felis. Morbi pulvinar venenatis elementum. Etiam est ex, accumsan eu pellentesque nec, maximus id sem. Nulla facilisi. Donec malesuada aliquet diam, in porta ex condimentum nec.'}
            </Text>
        </Content>
    </React.Fragment>
);

export default About;
