import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components';
import { color } from '../../common/colors';

const Intro2 = () => {
  const ABOUT_STRING = `하나의 유령이 유럽을 배회하고 있다. 공산주의라는 유령이. 옛 유럽의 모든 세력들이, 교황과 차르, 메테르니히와 기조, 프랑스의 급진파와 독일의 비밀경찰이, 이 유령을 사냥하려고 신성 동맹을 맺었다. 잃을것은 사슬뿐이오 얻을것은 전세계다 만국의 노동자여 각성하라`

  const [positions, setPositions] = useState([
    { x: 1100, y: 70 },
    { x: 400, y: 170 },
    { x: 700, y: 20 }
  ]);
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    setIsDragging(index);
    setDragStart({
      x: e.clientX - positions[index].x,
      y: e.clientY - positions[index].y
    });
  };

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (isDragging !== null && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      
      let newX = clientX - dragStart.x;
      let newY = clientY - dragStart.y;

      // 여기서 각 박스의 크기에 따라 최대 위치를 조정해야 합니다
      const maxX = containerRect.width - 150; // 가장 큰 박스의 너비
      const maxY = containerRect.height - 150; // 가장 큰 박스의 높이

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setPositions(prevPositions => prevPositions.map((pos, index) => 
        index === isDragging ? { x: newX, y: newY } : pos
      ));
    }
  }, [isDragging, dragStart]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging !== null) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(() => updatePosition(e.clientX, e.clientY));
    }
  }, [isDragging, updatePosition]);

  const handleMouseUp = () => {
    setIsDragging(null);
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <Container ref={containerRef}>
      <DraggableBox1
        style={{ transform: `translate(${positions[0].x}px, ${positions[0].y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 0)}
      >
        {ABOUT_STRING}
      </DraggableBox1>
      <DraggableBox2
        style={{ transform: `translate(${positions[1].x}px, ${positions[1].y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 1)}
      >
        {ABOUT_STRING}
      </DraggableBox2>
      <DraggableBox3
        style={{ transform: `translate(${positions[2].x}px, ${positions[2].y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 2)}
      >
        <span className='grey'>1. </span>하나의 유령이 유럽을 배회하고 있다. 공산주의라는 유령이. <br/><span className='grey'>2. </span>옛 유럽의 모든 세력들이, 교황과 차르, 메테르니히와 기조, 프랑스의 급진파와 독일의 비밀경찰이, 이 유령을 사냥하려고 신성 동맹을 맺었다. <br/><span className='grey'>3. </span>잃을것은 <span className='red'>사슬</span>뿐이오 얻을것은 <span className='yellow'>전세계</span>다 만국의 노동자여 각성하라
      </DraggableBox3>
    </Container>
  )
}

export default Intro2

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const DraggableBoxBase = styled.div`
  position: absolute;
  cursor: grab;
  transition: transform 0.1s ease-out;
  color: white;
  border-radius: 0.5vw;
  border: 1px solid ${color.macGrey};
  padding: 1vw;
  overflow: hidden;
  font-family: 'DungGeunMo';
  font-size: 1.1vw;
  line-height: 1.3vw;

  background-color: rgba(15,15,15,0.6);
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 

  .red {
    color: ${color.macRed};
  }
  .yellow {
    color: ${color.macYellow};
  }
  .grey {
    color: ${color.grey};
  }
`;

const DraggableBox1 = styled(DraggableBoxBase)`
  width: 20vw;
  height: 25vw; 
`;

const DraggableBox2 = styled(DraggableBoxBase)`
  width: 15vw;
  height: 15vw;
`;

const DraggableBox3 = styled(DraggableBoxBase)`
  width: 20vw;
  height: 20vw; 
`;