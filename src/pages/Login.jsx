import styled from "styled-components"
import {mobile} from "../responsive";
const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url("https://i.pinimg.com/474x/da/65/8e/da658e50d4251ee50dc1403b506c6304.jpg") center;
display:flex;
align-items:center;
justify-content:center;
`
;
const Wrapper=styled.div`
padding:20px;
width:25%;
${mobile({width:"75%"})}
`;
const Title=styled.h1`
font-size:24px;
font-weight:300;

`;
const Form=styled.form`
display:flex;
flex-direction:column;


`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`;
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:#444;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const Link=styled.a`
margin:5px 0px;
font-size;12px;
text-decoration:underline;
cursor:pointer;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACCCOUNT</Link>
        </Form>
    </Wrapper>

    </Container>
  )
}

export default Login
