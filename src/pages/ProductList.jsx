import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { Footer } from "../components/Footer";
import {mobile} from "../responsive";
const Container=styled.div``
const Title=styled.h1`
margin:20px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;

`
const Filter=styled.div`
margin:20px;
${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}
`
const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})}
`
const Option=styled.option``
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:5px;
${mobile({marginRight:"0px"})}
`
export const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Products</Title>
        <FilterContainer>
         <Filter><FilterText>Filter Products:</FilterText>
         <Select>
            <Option disabled select>
                Jewls
            </Option>
            <Option>Earings</Option>
            <Option>Rings</Option>
            <Option>Pendants</Option>
            <Option>Celeste</Option>
            <Option>Bangles</Option>
            <Option>Bracelets</Option>
            <Option>Chains</Option>
         </Select>
         </Filter>
         <Filter><FilterText>Sort Products:</FilterText>
         <Select>
            <Option>Best Sellers</Option>
            <Option>New Arrivals</Option>
            <Option>Popularity</Option>
            <Option>Best Matches</Option>
            <Option>Price:Low to High</Option>
            <Option>Price:High to Low</Option>
         </Select>
         </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
