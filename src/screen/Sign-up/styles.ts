import styled from "styled-components/native";
import theme from "../../theme";
import {SafeAreaView} from 'react-native-safe-area-context';


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
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    
    
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
export const TextTermsofuse = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    
`;
export const ContainerTerm = styled.View`
    flex-direction: row;
    margin-top: 24px;
    margin-bottom: 24px;
`;
export const ToachableTerm = styled.TouchableOpacity`
    margin-right: 8px;
`;

export const Imageoptionbutton = styled.Image``;