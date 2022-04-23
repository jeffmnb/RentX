import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';

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
    AreaScheduling,
    Calendar,
    AreaData,
    From,
    TxtFrom,
    TxtDateFrom,
    To,
    TxtTo,
    TxtDateTo,
    AreaTotal,
    TotalDetail,
    TxtTotal,
    Installments,
    Total
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { Alert, ScrollView, StatusBar, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CardDetail } from '../../components/CardDetail';

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import formatDistance from 'date-fns/formatDistance';
import { Api } from '../../services/api';

export const SchedulingDetails = () => {

    useLayoutEffect(() => {
        getTotalValue();
    })

    const [diferenceDays, setDiferenceDays] = useState('');
    const [totalValue, setTotalValue] = useState('');

    const Navigation = useNavigation();

    const Routes = useRoute();

    const { dataScheduling } = Routes.params;

    const getTotalValue = () => {

        const difDays = formatDistance(new Date(dataScheduling.DATEFIN), new Date(dataScheduling.DATEINI));

        setDiferenceDays(Number(difDays.slice(0, 2)) + 1);

        const totalScheduling = dataScheduling.itemCar.rent.price * diferenceDays;

        setTotalValue(totalScheduling);
    };

    const handleConfirmOrder = async () => {

        const schedulingByCars = await Api.get(`/schedules_bycars/${dataScheduling.itemCar.id}`);

        const unavaible_dates = [
            ...schedulingByCars.data.unavaible_dates,
            dataScheduling.dateIni,
            dataScheduling.dateFin
        ];

        Api.put(`/schedules_bycars/${dataScheduling.itemCar.id}`, {
            id: dataScheduling.itemCar.id,
            unavaible_dates
        }).then(
            () => Navigation.navigate('ConfirmCar')
        ).catch(() => Alert('Opaa', 'Não foi possível realizar seu agendamento. Tente novamente.'));


        await Api.post('schedules_byuser', {
            user_id: 1,
            car: dataScheduling.itemCar,
        });

    };

    return (
        <Container>

            <StatusBar barStyle='light-content' />

            <ScrollView style={{ width: '100%' }}>

                <Content>
                    <View style={{ width: '100%' }}>
                        <MaterialIcons name="keyboard-arrow-left" size={RFValue(30)} color={theme.colors.Gray} onPress={() => Navigation.goBack()} style={{ marginTop: heightPercentageToDP('7%'), marginLeft: widthPercentageToDP('5%') }} />
                    </View>

                    <ImageSlider image={dataScheduling.itemCar.photos} />

                    <Details>
                        <InfoCar>
                            <Brand>{dataScheduling.itemCar.brand}</Brand>
                            <Name>{dataScheduling.itemCar.name}</Name>
                        </InfoCar>

                        <PriceCar>
                            <TxtDay>AO DIA</TxtDay>
                            <Price>R$ {dataScheduling.itemCar.rent.price}</Price>
                        </PriceCar>
                    </Details>

                    <Cards>
                        <CardDetail type={'speed'} title={dataScheduling.itemCar.accessories[0].name} />
                        <CardDetail type={'acceleration'} title={dataScheduling.itemCar.accessories[1].name} />
                        <CardDetail type={'force'} title={dataScheduling.itemCar.accessories[2].name} />
                    </Cards>

                    <Cards>
                        <CardDetail type={'gasoline'} title={dataScheduling.itemCar.accessories[3].name} />
                        <CardDetail type={'exchange'} title={dataScheduling.itemCar.accessories[4].name} />
                        <CardDetail type={'people'} title={dataScheduling.itemCar.accessories[5].name} />
                    </Cards>

                </Content>

                <AreaScheduling>
                    <AreaData>

                        <Calendar>
                            <Feather name='calendar' size={28} color={theme.colors.shape} />
                        </Calendar>

                        <From>
                            <TxtFrom>DE</TxtFrom>
                            <TxtDateFrom>{dataScheduling.dateIni}</TxtDateFrom>
                        </From>

                        <Feather name='chevron-right' style={{ marginLeft: RFValue(15), marginRight: RFValue(25) }} size={22} color={theme.colors.Gray} />

                        <To>
                            <TxtTo>ATÉ</TxtTo>
                            <TxtDateTo>{dataScheduling.dateFin}</TxtDateTo>
                        </To>
                    </AreaData>
                </AreaScheduling>

                <AreaTotal>
                    <TotalDetail>
                        <TxtTotal>TOTAL</TxtTotal>
                        <Installments>R$ {dataScheduling.itemCar.rent.price} x {diferenceDays} diárias</Installments>
                    </TotalDetail>

                    <Total>R$ {totalValue}</Total>
                </AreaTotal>

                <View style={{ width: '100%', position: 'absolute', top: heightPercentageToDP('90%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Button type={'green'} onpress={handleConfirmOrder} title={'Alugar agora'} />
                </View>

            </ScrollView>

        </Container>


    );
}