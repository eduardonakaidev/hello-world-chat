import React from 'react';
import { Container, ContainerLeft, ContainerNameAndStatus, ContainerRight,ContainerHeaderLeft,ContainerHeaderRight, ImageIcon, Name, Status, AvatarUser, Toachable,ContainerHeaderScreen,ImagePluzze,TitleScreen } from "./styles";
import IconUserExample from '../../assets/Avatar.png';
import IconSearch from '../../assets/icon-search.png';
import IconPonts from '../../assets/icon-ponts.png';
import Pluzze from '../../assets/plus-circle.png';
import { useNavigation } from '@react-navigation/native';

export function HeaderAppHome() {

const navigation = useNavigation();
function HandleSearchScreen() {
    navigation.navigate('contactlist');
}

    return (
        <>
        <Container>
            <ContainerLeft>
                <Toachable>
                    <AvatarUser source={IconUserExample} />
                </Toachable>
                <ContainerNameAndStatus>
                    <Name>Eduardo Nakai</Name>
                    <Status>online</Status>
                </ContainerNameAndStatus>
            </ContainerLeft>

            <ContainerRight>
                <Toachable onPress={HandleSearchScreen}>
                    <ImageIcon source={IconSearch} />
                </Toachable>
                <Toachable>
                    <ImageIcon source={IconPonts} />
                </Toachable>
            </ContainerRight>
        </Container>
        <ContainerHeaderScreen>
            <ContainerHeaderLeft>
                  <TitleScreen>Chats abertos</TitleScreen>
            </ContainerHeaderLeft>
          <ContainerHeaderRight>
            <Toachable>
            <ImagePluzze source={Pluzze}/>
            </Toachable>
          </ContainerHeaderRight>
            
        </ContainerHeaderScreen>
        </>
    )
}