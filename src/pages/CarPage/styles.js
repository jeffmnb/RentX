import styled from "styled-components/native";

import theme from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.shape};
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 100%;
    height: ${hp('86.5%')};
    background-color: ${theme.colors.shape};
    position: absolute;
    top: 0;
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
    font-size: ${RFValue(13)}px;
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
    font-size: ${RFValue(13)}px;
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

export const Description = styled.ScrollView`
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