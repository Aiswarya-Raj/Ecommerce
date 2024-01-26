import styled from "styled-components";
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';
import MarkunreadOutlined from '@mui/icons-material/MarkunreadOutlined';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LocalPhoneOutlined from '@mui/icons-material/LocalPhoneOutlined';
import {mobile} from "../responsive";
const Container=styled.div`
display:flex;`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
${mobile({flexDirection:"column"})}
`;
const Center=styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;
const Title=styled.h3`
margin-button:30px;

`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`
const ListItem=styled.li`
width:50%;
margin-top:10px;
cursor:pointer;
`
const Right=styled.div`
flex:1;
padding:20px;
`
const ContactItem=styled.div`
cursor:pointer;
display:flex;
align-items:center;
margin-top:5px;
`
const Payment=styled.img`
height:30%;
width:30%;

`
const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display:flex;
`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:5px;
cursor:pointer;
`


export const Footer = () => {
  return (
    <Container>
<Left>
<Logo>AURA</Logo>
<Desc>Your ultimate destination for gold and diamond jewellery. Explore over 7000+ elegant designs and get the best prices on the latest collections.</Desc>
<SocialContainer>
<SocialIcon color="444" >
<Facebook/>
</SocialIcon>
<SocialIcon color="444">
<Instagram/>
</SocialIcon>
<SocialIcon color="444">
<Twitter/>
</SocialIcon>
<SocialIcon color="444">
<Pinterest/>
</SocialIcon>
</SocialContainer>
</Left>
<Center>
<Title>Useful Links</Title>
<List>
  <ListItem>Home</ListItem>
  <ListItem>Cart</ListItem>
  <ListItem>Payment Options</ListItem>
  <ListItem>Track Your Order</ListItem>
  <ListItem>My Account</ListItem>
  <ListItem>Wishist</ListItem>
  <ListItem>Returns</ListItem>
  <ListItem>Find a Store</ListItem>
</List>

</Center>
<Right>
<Title>Contact Us</Title>
<ContactItem>
    <MarkunreadOutlined/>
    Write to Us
</ContactItem>
<ContactItem>
    <LocalPhoneOutlined/>
    1900-255-0321
</ContactItem>
<ContactItem>
    <ChatBubbleOutlineOutlined/>
    Chat with Us
</ContactItem>
<Payment src="https://store.elsner.com/media/elsnertech/backendimage/default/All_Icons2.png"/>
</Right>
    </Container>
  )
}


