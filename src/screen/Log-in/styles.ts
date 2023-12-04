import styled from "styled-components/native";
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from "../../theme";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.BLUE_GREEN_200};
    flex-direction: column;
    
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 64px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const TitleDescription = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 16px;
    
`;

export const ContainerInput = styled.TextInput`
    width: 344px;
    height: 58px;
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border-radius: 8px;
`;

export const TextTitleSocialButton = styled.Text`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
    padding-top: 12px;
    padding-bottom: 20px;
`;

export const ButtonContainerSocial = styled.TouchableOpacity`
    
`;
export const ImageButton = styled.Image`

`;
export const ContainerSocialLogin = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    justify-content: center;
`;
export const CotainerBottom = styled.View`
    background-color: #E8F3F2;
    text-align: center;
    bottom: 0;
    min-height: 56px;
    max-height: 56px;
    align-items: center;
    justify-content: center;
   
`;
export const TextBottom = styled.Text`
     color: ${theme.COLORS.GRAY_800};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;
