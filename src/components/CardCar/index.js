import React from 'react';

import {
    Container,
    Card,
    Details,
    Brand,
    NameCar,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,
    AreaDetails,
    DetailsPeriod,
    AreaPeriod,
    TxtPeriod,
    TxtDateStart,
    TxtDateEnd
} from './styles';

import GasolineSvg from '../../assets/gasoline.svg';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';

export const CardCar = ({ brand, name, price, imageCar, onpress, dateStart, dateEnd, typeComb, period }) => {
    return (
        <Container>

            <Card onPress={onpress}>
                <Details>
                    <Brand>{brand}</Brand>
                    <NameCar>{name}</NameCar>

                    <About>
                        <Rent>
                            <Period>AO DIA</Period>
                            <Price>R$ {price}</Price>
                        </Rent>

                        <Type>
                            <GasolineSvg />
                        </Type>
                    </About>
                </Details>

                <CarImage resizeMode='contain' source={{ uri: imageCar }} />
            </Card>

            {

                <AreaDetails>
                    <DetailsPeriod>
                        <TxtPeriod>PERÍODO</TxtPeriod>
                        <AreaPeriod>
                            <TxtDateStart>18/06/2022</TxtDateStart>
                            <MaterialCommunityIcons style={{ marginLeft: RFValue(7), marginRight: RFValue(7) }} name="arrow-right" size={RFValue(18)} color={theme.colors.Gray} />
                            <TxtDateEnd>20/06/2022</TxtDateEnd>
                        </AreaPeriod>
                    </DetailsPeriod>
                </AreaDetails>

            }


        </Container>
    );
}