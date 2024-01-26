import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Footer } from "../components/Footer";
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {mobile} from "../responsive";
const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer=styled.div`
flex:1;
`;
const Image=styled.img`
width:95%;
height:85vh;
${mobile({height:"40vh"})}
`;
const InfoContainer=styled.div`
flex:1;
${mobile({padding:"10px"})}
`;
const Title=styled.h1`
font-weight:200;
`;
const Desc=styled.p`
margin:20px 0px;
`;
const Price=styled.span`
font-weight:100;
font-size:30px;
`;
const MetalType=styled.div`
display:flex;
align-items:center;
margin:10px 0px;
`;
const StoneWeight=styled.div``;
const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}
`;
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
margin:10px 0px;
`;
const Amount=styled.span`
width:30px;
heignt:30px;
border-radius:10px;
border:2px solid light gray;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button=styled.button`
padding:15px;
border:1px solid light gray;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
  background-color:#444
};
`
export const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.boodles.com/cdn/shop/products/1155441PDDY_0736_600x.jpg?v=1676906274"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Diamond Necklace</Title>
                <Desc>Redefined elegance takes center stage with this sublime mango pattern necklace crafted in 22 karat Diamond.</Desc>
                <Price>$89000</Price>
                <MetalType>Metal Type:Platinum</MetalType>
                <StoneWeight>Diamond weight:0.3 c</StoneWeight>
                <AddContainer>
                  <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                  </AmountContainer>
                  <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
