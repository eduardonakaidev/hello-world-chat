import React, { useState } from 'react';
import { Container, ButtonContainerSocial, ContainerSocialLogin, ContainerTerm,ToachableTerm, TextTermsofuse, Imageoptionbutton, CotainerBottom, TextBottom, ImageButton, TextTitleSocialButton, Title, TitleDescription } from './styles';
import { Input } from '../../components/Inputs';
import { ButtonSignUp } from '../../components/ButtonSignUp';
import { useNavigation } from '@react-navigation/native';
import SocialButtonGoogle from '../../assets/google-button.png';
import SocialButtonFacebook from '../../assets/facebook-button.png';
import SocialButtonApple from '../../assets/apple-button.png';
import UnCheckButton from '../../assets/un-checkt-button.png';
import CheckButton from '../../assets/check-button-ok.png';

export function SignUp() {
    const navigation = useNavigation();
    var [termAccect, useTermAccect] = useState(false);

    function TermInput (){
        if(termAccect == false){
            useTermAccect(true);
        }
        else{
          
        }
    }
    function handleLogIn(){
        navigation.navigate('login');
    }
    
    function handleHome() {
        try {
           
        }
        catch {

        }

    }
    return (
        <>
            <Container>
                <Title>
                    Criar uma conta!
                </Title>
                <TitleDescription>
                    Registrar-se para começar
                </TitleDescription>
                <Input placeholder='Nome' />
                <Input placeholder='Endereço de email' />
                <Input placeholder='Senha' />
                <Input placeholder='Confirme uma senha' />
 <ContainerTerm>
                    <ToachableTerm onPress={TermInput}>

                    
                    {termAccect ? <Imageoptionbutton source={CheckButton} /> : <Imageoptionbutton source={UnCheckButton} />}
                    </ToachableTerm>
                    <TextTermsofuse>
                        Ao se cadastrar você concorda com nossos Termos de Uso e Política de Privacidade
                    </TextTermsofuse>
                </ContainerTerm>
                
                <ButtonSignUp title='Começar' onPress={handleHome} />

               

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
                <ButtonContainerSocial onPress={handleLogIn}>
                    <TextBottom>
                        já tem uma conta? Conecte-se
                    </TextBottom>
                </ButtonContainerSocial>
            </CotainerBottom>
        </>
    )
}