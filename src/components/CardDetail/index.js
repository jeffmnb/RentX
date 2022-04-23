import React from 'react';

import {
    Container,
    Title
} from './styles';

import Speed from '../../assets/speed.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import Acceleration from '../../assets/acceleration.svg';
import People from '../../assets/people.svg';
import Exchange from '../../assets/exchange.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const CardDetail = ({ type, title }) => {
    return (
        <Container>
            {type == 'force' && <Force width={RFValue(35)} height={RFValue(34)} />}
            {type == 'gasoline' && <Gasoline width={RFValue(32)} height={RFValue(32)} />}
            {type == 'acceleration' && <Acceleration width={RFValue(32)} height={RFValue(32)} />}
            {type == 'people' && <People width={RFValue(32)} height={RFValue(32)} />}
            {type == 'exchange' && <Exchange width={RFValue(32)} height={RFValue(32)} />}
            {type == 'speed' && <Speed width={RFValue(32)} height={RFValue(32)} />}

            <Title>{title}</Title>
        </Container>
    );
}