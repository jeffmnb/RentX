import React, { useState } from 'react';

import {
    Container,
    Header,
    Title,
    AreaData,
    From,
    TxtFrom,
    TxtDateFrom,
    To,
    TxtTo,
    TxtDateTo,
    AreaCalendar
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { Alert, BackHandler, Platform, StatusBar, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import Arrow from '../../assets/arrow.svg';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Calendar } from '../../components/Calendar';
import { Button } from '../../components/Button';


import { format, isBefore, parseISO } from 'date-fns';
import addDays from 'date-fns/addDays';

export const Scheduling = () => {

    const Navigation = useNavigation();

    const Routes = useRoute();

    const { itemCar } = Routes.params;

    const [dateIni, setDateIni] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [DATEINI, setDATEINI] = useState('');
    const [DATEFIN, setDATEFIN] = useState('');

    const [iniActive, setIniActive] = useState(true);
    const [fimActive, setFimActive] = useState(false);
    const [doneData, setDoneData] = useState(false);

    const dataScheduling = {
        itemCar,
        dateIni,
        dateFin,
        DATEINI,
        DATEFIN
    };

    const handleChangeDate = (date) => {

        if (iniActive == true) {

            if (Platform.OS == 'ios') {

                const dateInitial = date.dateString;

                const dateIniFormatted = new Date(dateInitial).setDate(new Date(dateInitial).getDate() + 1);

                setDateIni(format(dateIniFormatted, 'dd/MM/yyyy'));
                setDATEINI(date.dateString);

            } else {
                setDateIni(format(date.dateString, 'dd/MM/yyyy'));
                setDATEINI(date.dateString);
            };

            setFimActive(true);
            setIniActive(false);

        } else if (fimActive == true && iniActive == false) {

            if (Platform.OS == 'ios') {

                const dateFinal = date.dateString;

                const dateFinFormatted = new Date(dateFinal).setDate(new Date(dateFinal).getDate() + 1);

                setDateFin(format(dateFinFormatted, 'dd/MM/yyyy'));
                setDATEFIN(date.dateString);

            } else {
                setDateFin(date.dateString, 'dd/MM/yyyy');
                setDATEFIN(date.dateString);
            }

            setDoneData(true);
        }
    };

    const handleConfirm = () => {
        if (doneData == true) {

            const dateValid = isBefore(new Date(DATEFIN), new Date(DATEINI));

            if (dateValid) {
                return Alert.alert('Opa', 'A data final não pode ser antes da inicial.');
            };

            if(DATEFIN == DATEINI) {
                return Alert.alert('Opa','A empresa disponibiliza apenas a partir de duas diárias.');
            }

            Navigation.navigate('SchedulingDetails', { dataScheduling });
        } else {
            return Alert.alert('Ohh :(', 'Favor selecionar as datas do aluguel.')
        }
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' />
            <Header>
                <View style={{ width: '100%' }}>
                    <MaterialIcons name="keyboard-arrow-left" size={RFValue(30)} color={theme.colors.shape} onPress={() => Navigation.goBack()} style={{ marginTop: heightPercentageToDP('7%'), marginLeft: widthPercentageToDP('5%') }} />
                </View>

                <Title>{iniActive ? 'Heyy, escolha a data inicial do aluguel' : 'Agora escolha uma data final :)'}</Title>

                <AreaData>
                    <From>
                        <TxtFrom>DE</TxtFrom>
                        <TxtDateFrom>{dateIni}</TxtDateFrom>
                    </From>

                    <Arrow />

                    <To>
                        <TxtTo>ATÉ</TxtTo>
                        <TxtDateTo>{dateFin}</TxtDateTo>
                    </To>
                </AreaData>

            </Header>

            <AreaCalendar>
                <Calendar onDayPress={handleChangeDate} />
            </AreaCalendar>

            <View style={{ position: 'absolute', top: heightPercentageToDP('88%') }}>
                <Button type={'red'} onpress={handleConfirm} title={'Confirmar'} />
            </View>



        </Container>
    );
}