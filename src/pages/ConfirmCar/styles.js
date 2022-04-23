import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.Black};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.ArchivoSemiBold};
    font-size: ${RFValue(30)};
    color: ${theme.colors.shape};
    margin-top: ${RFValue(30)}px;
`;

export const SubTitle = styled.Text`
    font-family: ${theme.fonts.InterRegular};
    font-size: ${RFValue(15)};
    color: ${theme.colors.Gray};
    margin-top: ${RFValue(16)}px;
    text-align: center;
    line-height: ${RFValue(25)}px;
`;

export const ButtonOk = styled.TouchableOpacity`
    width: ${RFValue(80)}px;
    height: ${RFValue(56)}px;
    background-color: ${theme.colors.button};
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(80)}px;
`;

export const TxtButton = styled.Text`
    font-family: ${theme.fonts.InterMedium};
    font-size: ${RFValue(15)};
    color: ${theme.colors.shape};
`;