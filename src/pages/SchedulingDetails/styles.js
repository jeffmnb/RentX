import styled from "styled-components/native";

import theme from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.shape};
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 100%;
    height: ${hp('86.5%')};
    background-color: ${theme.colors.shape};
    align-items: center;
`;

export const Details = styled.View`
    width: 100%;
    height: ${hp('7%')};
    margin-top: ${hp('1%')};
    margin-bottom: ${RFValue(16)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${wp('5%')};
    padding-right: ${wp('5%')};
`;

export const InfoCar = styled.View``;

export const Brand = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.grayLight};
`;

export const Name = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(22)}px;
    color: ${theme.colors.grayDark};
    margin-top: ${hp('0.5%')};
`;

export const PriceCar = styled.View`
   
`;

export const TxtDay = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.grayLight};
`;

export const Price = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.Red};
    margin-top: ${hp('0.5%')};
`;

export const Cards = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Description = styled.View`
    width: 100%;
    padding-left: ${RFValue(15)}px;
    padding-right: ${RFValue(15)}px;
    margin-top: ${RFValue(15)}px;
`;

export const Txt = styled.Text`
    font-family: ${theme.fonts.InterRegular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.Gray};
    text-align: justify;
    line-height: ${RFValue(25)};
`;

export const AreaData = styled.View`
    width: 100%;
    height: ${RFValue(45)}px;
    margin-top: ${hp('3%')}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: ${RFValue(35)}px;
    padding-right: ${RFValue(35)}px;
`;

export const From = styled.View`
`;

export const TxtFrom = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.Gray};
`;

export const TxtDateFrom = styled.Text`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.Gray};
    width: ${RFValue(90)}px;
    margin-top: ${RFValue(10)}px;
    color: ${theme.colors.Gray};
    font-family: ${theme.fonts.InterMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.Black};
`;

export const To = styled.View``;

export const TxtTo = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.Gray};
`;

export const TxtDateTo = styled.Text`
    border-bottom-width: 1px;
    width: ${RFValue(90)}px;
    margin-top: ${RFValue(10)}px;
    border-bottom-color: ${theme.colors.Gray};
    font-family: ${theme.fonts.InterMedium};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.Black};
`;

export const AreaScheduling = styled.View`
    width: 90%;
    flex-direction: row;
    bottom: ${hp('17%')};
    border-bottom-width: 1;
    border-bottom-color: ${theme.colors.grayLight};
    padding-bottom: ${RFValue(15)}px;
    margin-left: 5%;
`;

export const Calendar = styled.View`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    background-color: ${theme.colors.Red};
    justify-content: center;
    align-items: center;
    margin-right: ${RFValue(30)}px;
`;

export const AreaTotal = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${wp('5%')};
    padding-right: ${wp('5%')};
    position: absolute;
    top: ${hp('82%')};
`;

export const TotalDetail = styled.View``;

export const TxtTotal = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(13)};
    color: ${theme.colors.grayLight};
    margin-bottom: ${RFValue(8)}px;
`;

export const Installments = styled.Text`
    font-family: ${theme.fonts.InterMedium};
    font-size: ${RFValue(15)};
    color: ${theme.colors.Black};
`;

export const Total = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    font-size: ${RFValue(20)};
    color: ${theme.colors.Green};
`;