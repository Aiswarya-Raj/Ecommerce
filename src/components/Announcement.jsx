import styled from 'styled-components'
const Container=styled.div`
height:30px;
background-color:#444;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:500px;
font-size:14px;
`
const Announcement = () => {
  return (
    <Container>
        Current gold rate-50k per carat!
    </Container>
  )
}

export default Announcement