import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import theme from '../../theme';

export const Container = styled.View`
    width: ${RFValue(100)}px;
    height: ${RFValue(92)}px;
    background-color: ${theme.colors.ultraGray};
    justify-content: center;
    align-items: center;
    margin: ${RFValue(5)}px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.InterMedium};
    font-size: ${RFValue(13)};
    color: ${theme.colors.Gray};
    margin-top: ${RFValue(10)}px;
`;