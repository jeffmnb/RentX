import React, { useEffect, useState } from 'react';

import {
    Container,
    Header,
    Title,
    SubTitle,
    AreaText,
    AreaLength,
    TxtSchedulings,
    TxtLenght,
    ListCars
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { Alert, BackHandler, Platform, StatusBar, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import Arrow from '../../assets/arrow.svg';

import { CardCar } from '../../components/CardCar';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Api } from '../../services/api';

export const MySchedulins = () => {

    useEffect(() => {
        getMyCars();
    }, []);

    const Navigation = useNavigation();

    const [myCars, setMyCars] = useState('');

    const getMyCars = async () => {

        const data = await Api.get('/schedules_byuser');
        setMyCars(data.data);
        console.log(myCars);
    };

    return (
        <Container>
            <StatusBar barStyle='light-content' />
            <Header>
                <View style={{ width: '100%' }}>
                    <MaterialIcons name="keyboard-arrow-left" size={RFValue(30)} color={theme.colors.shape} onPress={() => Navigation.goBack()} style={{ marginTop: heightPercentageToDP('7%'), marginLeft: widthPercentageToDP('5%') }} />
                </View>

                <AreaText>
                    <Title>Seus agendamentos, estão aqui</Title>

                    <SubTitle>Conforto, segurança e praticidade.</SubTitle>
                </AreaText>

            </Header>

            <AreaLength>
                <TxtSchedulings>Agendamentos feitos</TxtSchedulings>

                <TxtLenght>{myCars.length}</TxtLenght>
            </AreaLength>

            <ListCars
                data={myCars}
                renderItem={({ item }) => (
                    <CardCar brand={item.car.brand} name={item.car.name} imageCar={item.car.thumbnail} price={item.car.rent.price} onpress={() => handleCarSelected(item)} />
                )}
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            />


        </Container>
    );
}