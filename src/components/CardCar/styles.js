import styled from "styled-components/native";

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../theme';

export const Container = styled.View`
    width: 100%;
    height: ${hp('23')};
    margin-bottom: ${RFValue(16)}px;
`;

export const Card = styled.TouchableOpacity`
    width: ${wp('91%')};
    height: ${hp('17%')};
    background-color: ${theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(24)}px;
    margin-top: ${RFValue(16)}px;
`;

export const Details = styled.View`
    width: ${wp('30%')};
    margin-top: ${hp('2.5%')};
`;

export const Brand = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    color: ${theme.colors.grayLight};
    font-size: ${RFValue(12)}px;
`;

export const NameCar = styled.Text`
    margin-top: ${RFValue(4)}px;
    font-family: ${theme.fonts.ArchivoMedium};
    color: ${theme.colors.Black};
    font-size: ${RFValue(16)}px;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${RFValue(16)}px;
    margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
    margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    color: ${theme.colors.grayLight};
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${theme.fonts.ArchivoMedium};
    color: ${theme.colors.Red};
    font-size: ${RFValue(17)}px;
    margin-top: ${RFValue(4)}px;
`;

export const Type = styled.Text`
    position: absolute;
    left: ${RFValue(70)}px;
    top: ${RFValue(18)}px;
`;

export const CarImage = styled.Image`
    width: ${RFValue(170)}px;
    height: ${RFValue(120)}px;
    margin-left: ${RFValue(7)}px;
`;

export const AreaDetails = styled.View`
    width: 95.5%;
    height: ${hp('5')};
    background-color: ${theme.colors.shape};
    flex-direction: row;
    margin-top: ${hp('0.3')};
    padding-right: ${wp('7')};
`;

export const DetailsPeriod = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${wp('7')};
`;

export const AreaPeriod = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TxtPeriod = styled.Text`
    font-family: ${theme.fonts.ArchivoSemiBold};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.grayLight};
`;

export const TxtDateStart = styled.Text`
    font-family: ${theme.fonts.InterRegular};
    color: ${theme.colors.grayDark};
    font-size: ${RFValue(13)}px;
`;

export const TxtDateEnd = styled.Text`
    font-family: ${theme.fonts.InterRegular};
    color: ${theme.colors.grayDark};
    font-size: ${RFValue(13)}px;
`;