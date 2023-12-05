import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
    top: 0;
    width: 100%;
    height: 72px;
    background-color: ${theme.COLORS.BLUE_GREEN_200};
    flex-direction: row;

`;
export const Name = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;
export const Status = styled.Text`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const ImageIcon = styled.Image`
   margin-right: 16px;

`;
export const ContainerRight = styled.View`
      width: 50%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    top: -14px;
    
`;

export const ContainerLeft = styled.View`
    width: 50%;
    height: 100%;
    flex-direction: row;
    align-items: center;
`;
export const ContainerNameAndStatus = styled.View`
    justify-content: center;
    margin-left:16px ;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
`;
export const AvatarUser = styled.Image`
height:34px;
    margin-left: 16px;
    width: 34px;
   
`;
export const Toachable = styled.TouchableOpacity``;

export const ContainerHeaderScreen = styled.View`
    height: 80px;
    width: 100%;
    background-color: ${theme.COLORS.BLUE_GREEN_300};
    justify-content: space-evenly;
    align-items: center;
    
    flex-direction: row;
`;
export const ContainerHeaderRight = styled.View`
    width: 50%;
    height: 100%;
    margin-right: 56px;
    align-items: flex-end;
    justify-content: center;
`;
export const ContainerHeaderLeft = styled.View`
    width: 50%;
    height: 100%;
    justify-content: center;
    margin-left: 56px;
`;
export const TitleScreen = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
 
`;
export const ImagePluzze = styled.Image``;