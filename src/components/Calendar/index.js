import React, { useEffect, useState } from 'react';

import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';

import { Feather } from '@expo/vector-icons';
import theme from '../../theme';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br'

export const Calendar = ({ onDayPress }) => {

    const newDate = new Date();

    return (
        <CustomCalendar
            renderArrow={(direction) =>
                <Feather
                    size={24}
                    color={theme.colors.Gray}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                />}

            headerStyle={{
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.grayLight,
                paddingBottom: 10,
                marginBottom: 10,
            }}

            theme={{
                textDayFontFamily: theme.fonts.InterRegular,
                textDayFontSize: 15,
                textDayHeaderFontFamily: theme.fonts.ArchivoSemiBold,
                textDayHeaderFontSize: 13,
                arrowStyle: {
                    marginHorizontal: -14
                },
                textMonthFontFamily: theme.fonts.ArchivoSemiBold,
                textMonthFontSize: 18,
                textMonthFontWeight: 'bold'
            }}

            firstDay={1}
            minDate={String(newDate)}
            onDayPress={onDayPress}
        />
    );
};