import React from 'react';

import {
    Container,
    Title,
    SubTitle,
    ButtonOk,
    TxtButton
} from './styles';

import Union from '../../assets/union.svg';
import theme from '../../theme';
import { StatusBar, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import Done from '../../assets/done.svg';
import { RFValue } from 'react-native-responsive-fontsize';

import {useNavigation} from  '@react-navigation/native';

export const ConfirmCar = () => {

    const Navigation = useNavigation();

    return (
        <Container>

            <StatusBar barStyle='light-content' />

            <View style={{ width: '100%', position: 'absolute', top: heightPercentageToDP('12%') }}>
                <Union width={'100%'} />
            </View>

            <View style={{ marginTop: heightPercentageToDP('35%') }}>
                <Done width={RFValue(90)} height={RFValue(90)} />
            </View>

            <Title>Carro alugado!</Title>

            <SubTitle> Agora você só precisa ir {'\n'} até a concessionária da RENTX {'\n'} pegar o seu automóvel.</SubTitle>

            <ButtonOk onPress={() => Navigation.navigate('Home')}>
                <TxtButton>OK</TxtButton>
            </ButtonOk>
        </Container>
    );
}