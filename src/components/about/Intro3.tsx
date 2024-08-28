import styled from 'styled-components';
import { color } from '../../common/colors';
import { openUrl } from '../../common/util';

const Intro3 = () => {
  return (
    <Container>
      <Title>main projects: </Title>
      <BoxWrapper>
        <Box onClick={()=>{openUrl('https://www.kfachallenge.org/')}}>
          <div className='top'>
            <span className='order'>01</span>
            <span className='title'>KFA Challenge</span>
          </div>
          <div className='bot'>Blockchain-based youth authentication system</div>
        </Box>
        <Box onClick={()=>{openUrl('https://wedid.projectwith.org/')}}>
          <div className='top'>
            <span className='order'>02</span>
            <span className='title'>WEDID</span>
          </div>
          <div className='bot'>Sports data management service</div>
        </Box>
      </BoxWrapper>
    </Container>
  )
}

export default Intro3

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: 'Borda';
  font-size: 4vw;
  text-align: center;
  color: white;

`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  gap: 5vw;
`

const Box = styled.div`
  width: 50vw;
  height: 5vw;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  color: white;
  border-radius: 0.5vw;
  border: 1px solid ${color.macGrey};
  padding: 3vw;
  overflow: hidden;
  font-family: 'Borda';
  font-size: 1.1vw;
  line-height: 1.3vw;
  background-color: rgba(15,15,15,0.4);
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .order {
    margin-right: 1vw;
    color: ${color.darkGrey};
    font-size: 1.5vw;
  }
  .title {
    font-size: 2.5vw;
    font-family: 'BordaBold';
  }
  .bot {
    margin-top: 1vw;
    margin-left: 2.5vw;
    font-size: 1.2vw;
    color: ${color.grey};
  }
`