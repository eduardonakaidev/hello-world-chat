import React from 'react';
import { Container, ButtonContainerSocial, CotainerBottom, TextBottom, ContainerSocialLogin, ImageButton, TextTitleSocialButton, Title, TitleDescription } from './styles';
import { Input } from '../../components/Inputs';
import {useNavigation} from '@react-navigation/native';
import { ButtonLogin } from '../../components/ButtonLogin';
import SocialButtonGoogle from '../../assets/google-button.png';
import SocialButtonFacebook from '../../assets/facebook-button.png';
import SocialButtonApple from '../../assets/apple-button.png';


export function LogIn() {
    const navigation = useNavigation();
    function handleSignUpScreen(){
        navigation.navigate('signup');
    }
    return (
        <>
            <Container>
                <Title>
                    Bem vindo de volta!
                </Title>
                <TitleDescription>
                    Insira suas credenciais para continuar.
                </TitleDescription>
                <Input placeholder='Endereço de email' keyboardType='email-address' />
                <Input placeholder='Senha' secureTextEntry />
                <TitleDescription>
                    Esqueceu sua senha?
                </TitleDescription>
                <ButtonLogin title='Log in' />
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



            </Container>
            <CotainerBottom>
                <ButtonContainerSocial onPress={handleSignUpScreen}>
                    <TextBottom>
                        Não tem uma conta? Registre-se
                    </TextBottom>
                </ButtonContainerSocial>
            </CotainerBottom>
        </>
    )
}