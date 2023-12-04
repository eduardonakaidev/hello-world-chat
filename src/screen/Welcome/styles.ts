import styled from "styled-components/native";
import theme from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.BLUE_GREEN_200};
    flex-direction: column;
    align-items: center;
    padding: ${theme.FONT_SIZE.XXL}px;

`;
export const ContainerTitle = styled.View`
    height: 40%;
    width: 100%;  
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;
export const ContainerButtons = styled.View`
    height: 60%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
   
`;
export const ContainerSocialLogin = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
`;
export const TitleDescription = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
    
`;
export const TextTitleButton = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
    padding-bottom: 8px;
    padding-top: 12px;
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