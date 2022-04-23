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
    height: ${hp('37%')};
    background-color: ${theme.colors.Black};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.ArchivoSemiBold};
    font-size: ${RFValue(28)}px;
    color: ${theme.colors.shape};
    margin-top: ${RFValue(28)}px;
    line-height: ${RFValue(45)}px;
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.ArchivoMedium};
    color: ${theme.colors.shape};
    margin-top: ${hp('4%')};
`;

export const AreaText = styled.View`
    width: 100%;
    margin-left: ${wp('7')};
`;

export const AreaLength = styled.View`
    width: 100%;
    height: ${hp('4')};
    margin-top: ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    padding-left: ${wp('6')};
    padding-right: ${wp('6')};
`;

export const TxtSchedulings = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.InterRegular};
    color: ${theme.colors.Gray};
`;

export const TxtLenght = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.ArchivoMedium};
    color: ${theme.colors.grayDark};
`;

export const ListCars = styled.FlatList`

`;