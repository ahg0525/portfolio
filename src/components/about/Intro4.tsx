import styled from 'styled-components';

const Intro4 = () => {
  return (
    <Container>
      <Title>Let's Create Together<br/> Soon . . .</Title>
    </Container>
  )
}

export default Intro4

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: 'BordaBold';
  font-size: 3vw;
  color: white;
  text-align: center;
`