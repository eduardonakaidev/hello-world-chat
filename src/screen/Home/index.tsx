import React from 'react';
import { Container } from './styles';
import { HeaderAppHome } from '../../components/HeaderApp';
import { ContactContainer } from '../../components/Contact-Container';

export function Home(){
    return(
        <Container>
            <HeaderAppHome/>
            <ContactContainer AvatarUrl=''ContactName="Eduardo" Status='online'/>
            <ContactContainer  AvatarUrl=''ContactName="Gabriel" Status='17:30'/>
            <ContactContainer  AvatarUrl=''ContactName="João" Status='16:20'/>
        </Container>
    )
}