import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  TxtLength,
  ListCars,
  BtnMyCars
} from './styles';

import Logo from '../../assets/logo.svg';
import CarSvg from '../../assets/BtnCar.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardCar } from '../../components/CardCar';

import { useNavigation } from '@react-navigation/native';

import { Api } from '../../services/api';

export const Home = () => {

  useEffect(() => {

    getAllCars();

  }, []);

  const [cars, setCars] = useState('');

  const getAllCars = async () => {

    const data = await Api.get('/cars');

    setCars(data.data);
  };

  const Navigation = useNavigation();

  const handleCarSelected = (itemCar) => {
    Navigation.navigate('CarPage', { itemCar });
  }

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} />
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TxtLength>Total de {cars.length} carros</TxtLength>
      </Header>

      <ListCars
        data={cars}
        renderItem={({ item }) => (
          <CardCar period={false} brand={item.brand} name={item.name} imageCar={item.thumbnail} price={item.rent.price} onpress={() => handleCarSelected(item)} />
        )}
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      />

      <BtnMyCars onPress={() => Navigation.navigate('MySchedulins')}>
        <CarSvg width={RFValue(29)} height={RFValue(29)} />
      </BtnMyCars>

    </Container>
  );
}