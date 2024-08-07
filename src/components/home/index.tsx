import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

interface ButtonGreenProps {
  children: ReactNode;
  onClick: () => void;
}

const HomeComponent = () => {
  const tickerList = ['React', 'TypeScript', 'Next', 'ECS', 'Docker', 'Vite', 'Vercel']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tickerList.length)
    }, 150)

    return () => clearInterval(timer)
  }, [tickerList.length])

  const MainButton = useCallback(({ children, onClick }: ButtonGreenProps) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };
    
    return (
      <StyledButton onClick={onClick} onMouseEnter={handleMouseEnter}>
        {children}
      </StyledButton>
    );
  }, []);

  return (
    <Container>
      <TitleBox>
        <span>Hi, I'm Kanyewest I Create with</span>
        <TextTicker>{tickerList[currentIndex]}</TextTicker>
      </TitleBox>
      {/* <Desc>"Hi, I'm the greatest Kanyewest"</Desc> */}
      <MainButton onClick={()=>('')}>
        <span>SEE MORE</span>
      </MainButton>
    </Container>
  )
}

export default HomeComponent

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(15, 15, 15);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
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
  
`

const TextTicker = styled.div`
  width: 16vw;
  height: 3vw;
  margin-left: 1vw;
  border: 0.3vw solid white;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1abc9c;
`

const Desc = styled.div`
  font-size: 2vw;
`

const StyledButton = styled.button`
  margin-top: 3vw;
  margin-bottom: -3vw;
  width: 10vw;
  height: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  cursor: pointer;
  color: #1abc9c;
  white-space: nowrap;
  background-color: rgb(15, 15, 15);
  border: 0.15vw solid #1abc9c;
  position: relative;
  overflow: hidden;
  transition: color 0.5s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 0;
    height: 0;
    background-color: #1abc9c;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 2s ease, height 2s ease;
    z-index: -1;
  }

  &:hover {
    color: black;
    &::before {
      width: 20vw;
      height: 20vw;
    }
  }

  span {
    position: relative;
    z-index: 2;
  }
`;