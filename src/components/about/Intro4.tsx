import styled from 'styled-components';
import { color } from '../../common/colors';
import { openUrl } from '../../common/util';

const Intro4 = () => {
  return (
    <Container>
      <div>
        Let's Create Together Soon
      </div>
      <div className='line'/>
      <Button onClick={()=>{openUrl('https://pond-twill-4a1.notion.site/Hi-I-m-Jungwon-b696a386412c48109787e8517981901f')}}>veure més</Button>
    </Container>
  )
}

export default Intro4

const Container = styled.div`
  margin-top: 5vw;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'BordaBold';
  font-size: 1.1vw;
  .line {
    height: 3vw;
    border-right: 1px solid white;
    margin-left: 2vw;
    margin-right: 1vw;
  }
  @media (max-width: 800px) {
    height: 45vw;
    margin-top: 0;
  }
`

const Button = styled.button`
  width: 10vw;
  height: 2.7vw;
  margin-right: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  cursor: pointer;
  color: white;
  border: none;
  background-color: rgba(0,0,0,0);
  position: relative;
  overflow: hidden;
  transition: color 0.5s ease;
  /* font-family: 'Glitch'; */
  font-family: 'Borda';
  letter-spacing: 1vw;
  line-height: 1.7vw;
  &:hover {
    color: ${color.green};
  }
`;
