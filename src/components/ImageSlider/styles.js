import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../theme';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    width: 100%;
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: ${RFValue(24)}px;
    margin-bottom: ${RFValue(30)}px;
`;

export const ImageIndex = styled.View`
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    margin-left: ${RFValue(8)}px;
    border-radius: ${RFValue(3)}px;
    background-color: ${({ active }) => active ? theme.colors.Black : theme.colors.grayLight};
`;

export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: ${RFValue(132)}px;
    justify-content: center;
    align-items: center;
`;

export const CarImage = styled.Image`
    width: ${RFValue(280)}px;
    height: ${RFValue(132)}px;
    margin-bottom: ${RFValue(15)}px;
`;