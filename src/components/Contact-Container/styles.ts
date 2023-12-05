import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled.TouchableOpacity`
    height: 96px;
    width: 100%;
    background-color: ${theme.COLORS.WHITE};
    flex-direction: row;
    align-items: center;
    border: 1px  ${theme.COLORS.GRAY_100};
   
`;
export const AvatarContact = styled.Image`
    width:64px;
    height: 64px;
    margin-left: 16px;
    margin-right: 16px;
   
`;
export const ContainerNameAndStatus = styled.View`
    height: 100%;
    justify-content: center;
    flex-direction: column;
`;


export const NameContact = styled.Text`
        color: ${theme.COLORS.BLACK};
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.BOLD};

`;
export const StatusContact = styled.Text`
    color: ${theme.COLORS.GRAY_800};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
`;