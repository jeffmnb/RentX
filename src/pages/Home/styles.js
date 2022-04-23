import styled from 'styled-components/native';
import theme from '../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex:1;
    background-color: ${theme.colors.Background};
    align-items: center;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${theme.colors.Black};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-top: ${RFValue(32)}px;
    padding-left: ${RFValue(22)}px;
    padding-right: ${RFValue(22)}px;
`;

export const TxtLength = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${theme.fonts.InterRegular};
color: ${theme.colors.Gray};
`;

export const ListCars = styled.FlatList`

`;

export const BtnMyCars = styled.TouchableOpacity`
    width: ${RFValue(53)};
    height: ${RFValue(53)};
    border-radius: ${RFValue(30)};
    background-color: ${theme.colors.Red};
    position: absolute;
    left:${wp('78%')};
    bottom: ${hp('6%')};
    justify-content: center;
    align-items: center;
`;