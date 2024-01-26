import styled from "styled-components";
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointer;
`;
const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#F0F0F0;
position:relative;

&:hover ${Info}{
opacity:1;
}
`;
const Circle=styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`;
const Image=styled.img`
height:85%;
width:90%;
z-index:2;
`;
const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
  background-color:#484848;
  transform:scale(1.1);
}
`;
const Title=styled.h1`
font-weight:300;
color:white;
`;
const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
         <ShoppingCartOutlined/>
        </Icon>
        <Icon>
         <Search/>
        </Icon>
        <Icon>
         <FavoriteBorder/>
        </Icon>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};

export default Product;