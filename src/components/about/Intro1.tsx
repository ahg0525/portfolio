import styled, { keyframes } from 'styled-components'
import { color } from '../../common/colors'

const Intro1 = () => {
  return (
    <Container>
      <BackTextContainer>
        <BackText>BENVINGUT A LA MEVA PRESENTACIÓ</BackText>
      </BackTextContainer>
      <Title>WELCOME 2 MY INTRODUCTION<br/>BENVINGUT !</Title>
      <Desc>Here's myself, my workflows, <br/>my career, and the technologies <br/>I like to use to Create</Desc>
    </Container>
  )
}

export default Intro1

const Container = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const floatLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const BackTextContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const BackText = styled.div`
  font-size: 40vw;
  line-height: 40vw;
  white-space: nowrap;
  position: absolute;
  top: -37%;
  transform: translateY(-50%);
  animation: ${floatLeft} 300s linear infinite;
  color: rgba(15, 15, 15, 0.15);
  font-family: 'smile';
  z-index: 0;
`

const Title = styled.div`
  font-family: 'BordaBold';
  font-size: 4vw;
  line-height: 4vw;
  color: white;
`

const Desc = styled.div`
  font-family: 'Borda';
  font-size: 1.5vw;
  line-height: 1.5vw;
  margin-top: 2.5vw;
  color: ${color.grey};
`