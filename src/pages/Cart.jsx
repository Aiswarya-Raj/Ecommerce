import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import styled from "styled-components"
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {mobile} from "../responsive";
const Container=styled.div``
const Wrapper=styled.div`
padding:20px;
${mobile({padding:"10px"})}
`
const Title=styled.div`
font-weight:300;
text-align:center;
font-size:30px;
`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type==="filled"&&"none"};
background-color:${props=>props.type==="filled"?"black":"tramsparent"};
color:${props=>props.type==="filled"&&"white"};
`
const TopTexts=styled.div`
${mobile({display:"none"})}
`
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom=styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`
const Info=styled.div`
flex:3;
`
const Product=styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`
const ProductDetail=styled.div`
flex:2;
display:flex;

`
const Image=styled.img`
width:200px;
`
const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-between;

`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductWeight=styled.span``
const Purity=styled.span``
const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const ProductAmount=styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}
`
const ProductPrice=styled.div`
font-size:20px;
font-weight:200;
${mobile({marginBottom:"20px"})}
`
const Hr=styled.hr`
background-color:white;
border:none
height:1px;
`
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
padding:20px;
border-radius:10px;
font-weight:1000;
font-size:10px;
height:50vh;
`
const SummaryTitle=styled.h1`
 font-weight:200;
`
const SummaryItem=styled.h1`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:200;
font-size:${props=>props.type === "total" && "20px"}
`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;

`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                    <ProductDetail>
                        <Image src="https://i.pinimg.com/originals/06/b3/9e/06b39e214aa284fbc79b98f0fcf0f557.jpg"/>
                        <Details>
                        <ProductName><b>Product:</b>Exquisite Gold Necklace Set</ProductName>
                        <ProductId><b>ID:513NMPC0000</b></ProductId>
                        <ProductWeight><b>Gross Weight:20.922 g</b></ProductWeight>
                        <Purity><b>Gold Purity:22 karat</b></Purity>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs.350000</ProductPrice>
                    </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                    <ProductDetail>
                        <Image src="https://i.ebayimg.com/images/g/r-wAAOSwQZRkGcmF/s-l1600.jpg"/>
                        <Details>
                        <ProductName><b>Product:</b>Round Cut Simulated Diamond Mermaid Ring</ProductName>
                        <ProductId><b>ID:400PNMC2310</b></ProductId>
                        <ProductWeight><b>Gross Weight:1.504 g</b></ProductWeight>
                        <Purity><b>Diamond weight:0.5 c</b></Purity>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs.213000</ProductPrice>
                    </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>Rs.563000</SummaryItemPrice>     
                    </SummaryItem>
                    <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>Rs.1000</SummaryItemPrice>     
                    </SummaryItem>
                    <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>Free Shipping</SummaryItemPrice>     
                    </SummaryItem>
                    <SummaryItem type="total">
                     <SummaryItemText >Total</SummaryItemText>
                     <SummaryItemPrice>Rs.563000</SummaryItemPrice>     
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
