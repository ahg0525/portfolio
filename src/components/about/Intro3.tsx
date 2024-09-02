import styled from 'styled-components';
import { color } from '../../common/colors';
import { openUrl } from '../../common/util';
import { images } from '../../common/images';

const Intro3 = () => {
  return (
    <Container>
      <Title>MAIN PROJECTS </Title>
      <BoxWrapper>
        <Box onClick={()=>{openUrl('https://www.kfachallenge.org/')}}>
          <div className='top'>
            <span className='order'>01</span>
            <span className='title'>KFA Challenge</span>
          </div>
          <div className='bot'>Blockchain-based youth authentication system</div>
          <ImgBox className='img-box'>
            <img src={images.kfaWeb} alt=''/>
          </ImgBox>
        </Box>
        <Box onClick={()=>{openUrl('https://wedid.projectwith.org/')}}>
          <div className='top'>
            <span className='order'>02</span>
            <span className='title'>WEDID</span>
          </div>
          <div className='bot'>Sports data management service</div>
          <ImgBox className='img-box'>
            <img src={images.wedidWeb} alt=''/>
          </ImgBox>
        </Box>
      </BoxWrapper>
      <BotDesc onClick={()=>{openUrl('https://pond-twill-4a1.notion.site/Hi-I-m-Jungwon-b696a386412c48109787e8517981901f')}}>ALL PROJECTS</BotDesc>
    </Container>
  )
}

export default Intro3

const Container = styled.div`
  width: 100%;
  height: 60vw;
  position: relative;
  overflow: hidden;
`;

const Title = styled.div`
  font-family: 'BordaBold';
  font-size: 4vw;
  text-align: center;
  color: white;
  margin-top: 5vw;
`

const BotDesc = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;
  margin-left: auto;
  margin-right: auto;
  color: ${color.grey};
  font-family: 'Borda';
  background-color: rgba(0,0,0,0);
  border: 1px solid ${color.macGrey};
  border-radius: 0.5vw;
  width: 15vw;
  height: 3vw;
  cursor: pointer;
  font-size: 1vw;
  &:hover {
    border-color: ${color.green};
    color: ${color.green};
  }
`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  gap: 5vw;
`

const ImgBox = styled.div`
  width: 25vw;
  aspect-ratio: 1920 / 1080;
  position: absolute;
  left: 30vw;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Box = styled.div`
  width: 50vw;
  height: 5vw;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  color: white;
  border-radius: 0.5vw;
  border: 1px solid ${color.macGrey};
  padding: 3vw;
  overflow: visible;
  font-family: 'Borda';
  font-size: 1.1vw;
  line-height: 1.3vw;
  background-color: rgba(15,15,15,0.4);
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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

  &:hover {
    border: 1px solid ${color.green};
  }

  &:hover .img-box {
    opacity: 1;
    transform: scale(1);
  }
`;
