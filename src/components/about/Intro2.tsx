import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components';
import { color } from '../../common/colors';
import { openUrl } from '../../common/util';
import { images } from '../../common/images';

const Intro2 = () => {
  const [currentImage, setCurrentImage] = useState(images.ozy);
  const [positions, setPositions] = useState([
    { x: 18, y: 5 }, 
    { x: 55, y: 10 },
    { x: 25, y: 25 },
    { x: 57, y: 1 },
    { x: 34, y: 3 }, 
  ]);
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const handleImageClick = () => {
    setCurrentImage(currentImage === images.ozy ? images.ozy2 : images.ozy);
  };

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    const containerRect = containerRef.current!.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left - (positions[index].x / 100) * containerRect.width;
    const offsetY = e.clientY - containerRect.top - (positions[index].y / 100) * containerRect.height;
    
    setIsDragging(index);
    setDragOffset({ x: offsetX, y: offsetY });
  };
  
  const updatePosition = useCallback((clientX: number, clientY: number) => {
    if (isDragging !== null && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      let newX = ((clientX - dragOffset.x - containerRect.left) / containerRect.width) * 100;
      let newY = ((clientY - dragOffset.y - containerRect.top) / containerRect.height) * 100;

      const maxX = 100 - 10;
      const maxY = 100 - 10;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setPositions(prevPositions => prevPositions.map((pos, index) => 
        index === isDragging ? { x: newX, y: newY } : pos
      ));
    }
  }, [isDragging, dragOffset]);

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
        style={{ transform: `translate(${positions[0].x}vw, ${positions[0].y}vw)` }}
        onMouseDown={(e) => handleMouseDown(e, 0)}
      >
        <BoxTop>skills</BoxTop>
        <span className='grey'>1. </span><span className='cyan'>React, TypeScript, Next</span><br/>
        <span className='grey'>2. </span><span className='blue'>AWS(ECR, ECS), Docker, Vercel</span><br/>
        <span className='grey'>3. </span><span className='indigo'>Vite, Webpack</span><br/>
        <span className='grey'>4. </span><span className='purple'>AntD, ChakraUI, Bootstrap, Styled-Components, GSAP</span><br/>
      </DraggableBox1>
      <DraggableBox2
        style={{ transform: `translate(${positions[1].x}vw, ${positions[1].y}vw)` }}
        onMouseDown={(e) => handleMouseDown(e, 1)}
      >
        <BoxTop>ma face</BoxTop>
        <img src={currentImage} alt='' onClick={handleImageClick} />
      </DraggableBox2>
      <DraggableBox3
        style={{ transform: `translate(${positions[2].x}vw, ${positions[2].y}vw)` }}
        onMouseDown={(e) => handleMouseDown(e, 2)}
      >
        <BoxTop>and more</BoxTop>
        <span className='grey'>1. </span><span className='link' onClick={()=>{openUrl('https://pond-twill-4a1.notion.site/Hi-I-m-Jungwon-b696a386412c48109787e8517981901f')}}>notion</span><br/>
        <span className='grey'>2. </span><span className='link' onClick={()=>{openUrl('https://github.com/ahg0525')}}>github</span><br/>
        <span className='grey'>3. </span><span className='link' onClick={()=>{openUrl('mailto:ahg0525@gmail.com')}}>email</span><br/>
      </DraggableBox3>
      <DraggableBox1
        style={{ transform: `translate(${positions[3].x}vw, ${positions[3].y}vw)` }}
        onMouseDown={(e) => handleMouseDown(e, 3)}
      >
        <BoxTop>education & career</BoxTop>
        <span className='grey'>2015. </span><span className='link'>대진대학교 컴퓨터공학</span><br/>
        <span className='grey'>2022. </span><span className='link'>메가존클라우드</span><br/>
        <span className='grey'>2023. </span><span className='link'>위플레이라이트</span><br/>
      </DraggableBox1>
      <DraggableBox4
        style={{ transform: `translate(${positions[4].x}vw, ${positions[4].y}vw)` }}
        onMouseDown={(e) => handleMouseDown(e, 4)}
      >
        <BoxTop>about me</BoxTop>
        <span className='grey'>1. </span>안녕하세요. 웹개발자 <span className='green'>박정원</span>입니다. <br/><br/>
        <span className='grey'>2. </span>전 <span className='yellow'>새로운 기술</span>을 쓰는걸 좋아합니다. <br/>
        <span className='cyan'>클라우드</span>에 대한 관심으로 클라우드 회사를 첫 직장으로 재직하게 됐고 자유롭게 서비스를 구상할 수 있어 스포츠회사에 재직하게 됐습니다. <br/>지금까지는 디자인을 잘 구현하고 잘 작동하는데 집중했다면, 더 <span className='blue'>높은성능</span>과 <span className='indigo'>효율적인 코드</span>, 사용자에게 <span className='purple'>편안한 환경</span>을 만드는데 집중하고자 합니다.<br/> <br/>
        <span className='grey'>3. </span><span className='red'>디자인</span>에도 관심이 많습니다. <br/>사용자에게 편한 환경은 좋은 디자인이 만들기 때문입니다. <br/>
        디자이너와 끊임없이 소통하고 더 나은 서비스를 만들기 위해 <span className=''>밥먹으면서도 상의합니다.</span> <br/><br/>
        <span className='grey'>4. </span><span className='yellow'>mail</span><span className='green'> me</span> if u <span className='red'>like</span> this <span className='blue'>page!</span> <span onClick={()=>{openUrl('mailto:ahg0525@gmail.com')}} className='mail'>✉️</span>
      </DraggableBox4>
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
  height: max-content;
  position: absolute;
  cursor: grab;
  transition: transform 0.1s ease-out;
  color: white;
  border-radius: 0.5vw;
  border: 1px solid ${color.macGrey};
  padding: 1vw;
  padding-top: 0;
  overflow: hidden;
  font-family: 'DungGeunMo';
  font-size: 1.1vw;
  line-height: 1.3vw;
  background-color: rgba(15,15,15,0.4);
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 

  .red {
    color: ${color.macRed};
  }
  .green {
    color: ${color.macGreen};
  }
  .yellow {
    color: ${color.macYellow};
  }
  .grey {
    color: ${color.darkGrey};
  }
  .cyan {
    color: ${color.cyan};
  }
  .blue {
    color: ${color.blue};
  }
  .indigo {
    color: ${color.indigo};
  }
  .purple {
    color: ${color.purple};
  }

`;

const DraggableBox1 = styled(DraggableBoxBase)`
  width: 18vw;
`;

const DraggableBox2 = styled(DraggableBoxBase)`
  width: 15vw;
  height: 21vw;
  padding: 0;
  :first-child {
    margin-left: 0;
    margin-bottom: 0;
  }
  img {
    background-color: ${color.macGreen};
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;

const DraggableBox3 = styled(DraggableBoxBase)`
  width: 12vw;
  .link {
    &:hover {
      color: ${color.blue};
      cursor: pointer;
    }
  }
`;

const DraggableBox4 = styled(DraggableBoxBase)`
  width: 23vw;
  .mail {
    transition: 0.5s ease;
    cursor: pointer;
    &:hover {
      font-size: 1.4vw;
      line-height: 1vw;
    }
  }
`;

const BoxTop = styled.div`
  width: calc(100% + 2vw);
  margin-left: -1vw;
  margin-bottom: 1vw;
  height: 2vw;
  font-size: 1vw;
  border-bottom: 1px solid ${color.macGrey};
  display: flex;
  padding-left: 1vw;
  align-items: center;
`