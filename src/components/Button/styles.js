import styled from "styled-components/native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from "../../theme";

export const Container = styled.TouchableOpacity`
    width: ${wp('90%')};
    height: ${hp('7%')};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.InterRegular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
`;