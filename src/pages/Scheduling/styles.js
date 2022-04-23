import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.Background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${hp('40%')};
    background-color: ${theme.colors.Black};
    align-items:center;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.ArchivoSemiBold};
    font-size: ${RFValue(28)}px;
    color: ${theme.colors.shape};
    margin-top: ${RFValue(28)}px;
    line-height: ${RFValue(35)}px;
    text-align: center;
    line-height: ${RFValue(45)}px;
`;

export const AreaData = styled.View`
    width: 100%;
    height: ${RFValue(45)}px;
    margin-top: ${hp('3%')}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${RFValue(25)}px;
`;

export const From = styled.View`
`;

export const TxtFrom = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.Gray};
`;

export const TxtDateFrom = styled.Text`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.Gray};
    width: ${RFValue(90)}px;
    margin-top: ${RFValue(10)}px;
    color: ${theme.colors.Gray};
    font-size: ${RFValue(14)}px;
`;

export const To = styled.View`
margin-left: ${RFValue(30)}px;
margin-right: ${RFValue(10)}px;
`;

export const TxtTo = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.Gray};
`;

export const TxtDateTo = styled.Text`
    border-bottom-width: 1px;
    width: ${RFValue(90)}px;
    margin-top: ${RFValue(10)}px;
    border-bottom-color: ${theme.colors.Gray};
    color: ${theme.colors.Gray};
    font-size: ${RFValue(14)}px;
`;

export const AreaCalendar = styled.View`
    width: 100%;
`;