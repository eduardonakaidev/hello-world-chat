import { Container ,AvatarContact,NameContact,StatusContact,ContainerNameAndStatus} from "./styles";
import IconContact from '../../assets/Avatar-Contact-icon.png';

interface PropsContact {
    AvatarUrl :string;
    ContactName :string;
    Status : string;
}
export function ContactContainer({AvatarUrl,ContactName,Status}:PropsContact){
    return(
        
        <Container>
            <AvatarContact  source={IconContact} />
            <ContainerNameAndStatus>
                <NameContact>{ContactName}</NameContact>
                <StatusContact>{Status}</StatusContact>
            </ContainerNameAndStatus>
        </Container>
        
    )
}