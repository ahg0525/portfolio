import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from '../../common/colors';
import { Link } from 'react-router-dom';

interface ButtonGreenProps {
  children: ReactNode;
}

const HomeComponent = () => {
  const tickerList = ['REACT', 'TS', 'NEXT', 'ECS', 'DOCKER', 'VITE', 'VERCEL']
  const fontList = ['comeWithUs','lethalSlime','doubleFeature','Corrupted','comeWithUs','Glitch','doubleFeature']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tickerList.length)
    }, 150)
    return () => clearInterval(timer)
  }, [tickerList.length])
  
  const MainButton = useCallback(({ children }: ButtonGreenProps) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <StyledButton 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      >
        <span>{children}</span>
      </StyledButton>
    );
  }, []);

  return (
    <Container>
      <TitleBox>
        <span>I Create with</span>
        <TextTicker font={fontList[currentIndex]}>{tickerList[currentIndex]}</TextTicker>
      </TitleBox>
      <Desc>"Hi I'm Jungwon, a Frontend Developer"</Desc>
      <Link to={'/about'}>
        <MainButton>
          <span>SEE MORE</span>
        </MainButton>
      </Link>
    </Container>
  )
}

export default HomeComponent

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${color.grey};
  flex-direction: column;
  gap: 1vw;
  font-family: 'Borda';
`

const TitleBox = styled.div`
  width: 100%;
  font-size: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: 'BordaBold';
  }
`

const TextTicker = styled.div<{ font:string }>`
  width: 16vw;
  height: 3vw;
  margin-left: 1vw;
  border: 0.3vw solid white;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.green};
  font-family: ${props => props.font};
`

const Desc = styled.div`
  font-size: 2vw;
`

const shakeAnimation = keyframes`
  0%, 4.5%, 95.5%, 100% { transform: translateX(0); }
  1%, 3.5% { transform: translateX(2px); }
  2%, 3% { transform: translateX(-2px); }
  50%, 54.5%, 59%, 63.5% { transform: translateX(0); }
  51%, 53.5% { transform: translateX(2px); }
  52%, 53% { transform: translateX(-2px); }
`;

const StyledButton = styled.button<{ isHovered: boolean }>`
  width: 10vw;
  height: 2.7vw;
  margin-top: 2.7vw;
  margin-bottom: -2.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1vw;
  cursor: pointer;
  color: ${color.green};
  border: 0.2vw solid ${color.green};
  background-color: ${color.black};
  position: relative;
  overflow: hidden;
  transition: color 0.5s ease;
  z-index: 1;
  border-radius: 5vw;
  font-family: 'Glitch';

  &::before {
    content: '';
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 0;
    height: 0;
    background-color: ${color.green};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 2s ease, height 2s ease;
    z-index: -1;
  }

  &:hover {
    color: black;
    border: 0.2vw solid ${color.green};
    &::before {
      width: 20vw;
      height: 20vw;
    }
  }

  span {
    position: relative;
    z-index: 2;
    display: inline-block;
  }

  &:hover span {
    animation: ${shakeAnimation} 4.2s linear infinite;
  }
`;

