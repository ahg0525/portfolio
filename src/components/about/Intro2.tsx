import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components';
import { color } from '../../common/colors';

const Intro2 = () => {
  const ABOUT_STRING_1 = `하나의 유령이 유럽을 배회하고 있다. 공산주의라는 유령이. 옛 유럽의 모든 세력들이, 교황과 차르, 메테르니히와 기조, 프랑스의 급진파와 독일의 비밀경찰이, 이 유령을 사냥하려고 신성 동맹을 맺었다. 잃을것은 사슬뿐이오 얻을것은 전세계다 만국의 노동자여 각성하라`

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

      const maxX = containerRect.width - 150;
      const maxY = containerRect.height - 150;

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
        {ABOUT_STRING_1}
      </DraggableBox1>
      <DraggableBox2
        style={{ transform: `translate(${positions[1].x}px, ${positions[1].y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 1)}
      >
        {ABOUT_STRING_1}
      </DraggableBox2>
      <DraggableBox3
        style={{ transform: `translate(${positions[2].x}px, ${positions[2].y}px)` }}
        onMouseDown={(e) => handleMouseDown(e, 2)}
      >
        <span className='grey'>1. </span>안녕하세요. 웹개발자 <span className='yellow'>박정원</span>입니다. <br/><br/>
        <span className='grey'>2. </span>전 새로운 기술을 쓰는걸 좋아합니다. <br/>
        클라우드에 대한 관심으로 클라우드 회사를 첫 직장으로 재직하게 됐고 자유롭게 서비스를 구상할 수 있어 스포츠회사에 재직하게 됐습니다. <br/>지금까지는 디자인을 잘 구현하고 잘 작동하는데 집중했다면, 더 <span className='yellow'>높은성능</span>과 <span className='yellow'>효율적인 코드</span>, 사용자에게 <span className='yellow'>편안한 환경</span>을 만드는데 집중하고자 합니다.<br/> <br/>
        <span className='grey'>3. </span>디자인에도 관심이 많습니다. <br/>사용자에게 편한 환경은 좋은 디자인이 만들기 때문입니다. <br/>
        디자이너와 끊임없이 소통하고 더 나은 서비스를 만들기 위해 <span className='red'>밥먹으면서도 상의합니다.</span> <br/><br/>
        <span className='grey'>4. </span>저와의 소통은 24시간 열려있습니다. <br/>
        메일을 통해 이 사이트가 얼마나 멋있는지 <span className='red'>끊임없이 칭찬해주세요.</span>
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
  width: 23vw;
  height: max-content;
`;