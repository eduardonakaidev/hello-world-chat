import React from 'react';
import { ButtonContainerSocial, Container, ContainerButtons, ContainerSocialLogin, ContainerTitle, ImageButton, TextTitleButton, TextTitleSocialButton, Title, TitleDescription } from './styles';
import { ButtonLogin } from '../../components/ButtonLogin';
import { ButtonSignUp } from '../../components/ButtonSignUp';
import SocialButtonGoogle from '../../assets/google-button.png';
import SocialButtonFacebook from '../../assets/facebook-button.png';
import SocialButtonApple from '../../assets/apple-button.png';
import {useNavigation} from '@react-navigation/native';
export function Welcome() {
    const navigation = useNavigation();
    function HandleSignUp(){
        navigation.navigate('signup');

    }
    function HandleLogIn(){
        navigation.navigate('login');
    }
    return (
        <Container>
            <ContainerTitle>


                <Title>
                    Hello World
                </Title>

                <TitleDescription>
                    Converse com seus amigos a qualquer momento!
                </TitleDescription>
                
            </ContainerTitle>

            <ContainerButtons>

                <TextTitleButton>
                    já tem uma conta? Conecte-se
                </TextTitleButton>

                <ButtonLogin title='Log in' onPress={HandleLogIn}/>

                <TextTitleButton>
                    Não tem uma conta? Registre-se
                </TextTitleButton >

                <ButtonSignUp title='Registrar-se' onPress={HandleSignUp}/>

                <TextTitleSocialButton>
                    conecte-se através
                </TextTitleSocialButton>

                <ContainerSocialLogin>

                    <ButtonContainerSocial>
                        <ImageButton source={SocialButtonGoogle} />
                    </ButtonContainerSocial>

                    <ButtonContainerSocial>
                        <ImageButton source={SocialButtonFacebook} />
                    </ButtonContainerSocial>

                    <ButtonContainerSocial>
                        <ImageButton source={SocialButtonApple} />
                    </ButtonContainerSocial>

                </ContainerSocialLogin>

            </ContainerButtons>

        </Container>
    )
}