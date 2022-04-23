import React from 'react';

import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Content,
    Details,
    InfoCar,
    Brand,
    Name,
    PriceCar,
    TxtDay,
    Price,
    Cards,
    Description,
    Txt
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { ScrollView, StatusBar, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CardDetail } from '../../components/CardDetail';

import { useNavigation, useRoute } from '@react-navigation/native';

export const CarPage = () => {

    const Navigation = useNavigation();

    const Route = useRoute();

    const { itemCar } = Route.params;

    return (
        <Container>

            <StatusBar barStyle='dark-content' />

            <ScrollView style={{ width: '100%' }}>

                <Content>
                    <View style={{ width: '100%' }}>
                        <MaterialIcons name="keyboard-arrow-left" size={RFValue(30)} color={theme.colors.Gray} onPress={() => Navigation.goBack()} style={{ marginTop: heightPercentageToDP('7%'), marginLeft: widthPercentageToDP('5%') }} />
                    </View>

                    <ImageSlider image={itemCar.photos} />

                    <Details>
                        <InfoCar>
                            <Brand>{itemCar.brand}</Brand>
                            <Name>{itemCar.name}</Name>
                        </InfoCar>

                        <PriceCar>
                            <TxtDay>{itemCar.rent.period}</TxtDay>
                            <Price>R$ {itemCar.rent.price}</Price>
                        </PriceCar>
                    </Details>

                    <Cards>
                        <CardDetail type={'speed'} title={itemCar.accessories[0].name} />
                        <CardDetail type={'acceleration'} title={itemCar.accessories[1].name} />
                        <CardDetail type={'force'} title={itemCar.accessories[2].name} />
                    </Cards>

                    <Cards>
                        <CardDetail type={'gasoline'} title={itemCar.accessories[3].name} />
                        <CardDetail type={'exchange'} title={itemCar.accessories[4].name} />
                        <CardDetail type={'people'} title={itemCar.accessories[5].name} />
                    </Cards>

                    <Description>
                        <Txt>{itemCar.about}</Txt>
                    </Description>

                </Content>


                <View style={{ width: '100%', position: 'absolute', top: heightPercentageToDP('89%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Button onpress={() => Navigation.navigate('Scheduling', {itemCar})} title={'Escolher período de aluguel'} />
                </View>

            </ScrollView>

        </Container>


    );
}