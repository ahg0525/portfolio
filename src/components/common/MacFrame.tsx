import styled from 'styled-components'
import { color } from '../../common/colors'
import { Link } from 'react-router-dom'

const MacFrame = () => {
  return (
    <Container>
      <Gap/>
      <Frame>
        <TabBar>
          <Link to={'/'}><Dot className='red' /></Link>
          <Dot className='yellow' />
          <Dot className='green' />
          <Nav>
            {/* <Link to={'/'}>
              <NavItem>
                <img src={images.icon.home} alt=''/>
              </NavItem>
            </Link>
            <Link to={'/about'}>
              <NavItem>
                <img src={images.icon.user} alt=''/>
              </NavItem>
            </Link>
            <Link to={'/derry'}>
              <NavItem>
                <img src={images.icon.boat} alt=''/>
              </NavItem>
            </Link> */}
            <span>La meva introducció</span>
          </Nav>
          {/* <LogoBox>
            <img src={images.cat} alt=''/>
          </LogoBox> */}
        </TabBar>

        <BackGroundCircleLeft/>
        <BackGroundCircleRight/>

        <FooterBar>
          <BottomText>Visca el Barça 1899</BottomText>
          {/* <ContactBox>
            
          </ContactBox> */}
        </FooterBar>
      </Frame>
      <Gap/>
    </Container>
  )
}

export default MacFrame


const Container = styled.div`
  width: calc(100% - 1vw);
  height: calc(100% - 1vw);
  position: fixed;
  `

const Gap = styled.div`
  width: 100%;
  height: 0.5vw;
  background-color: ${color.black};
`

const Frame = styled.div`
  width: calc(100%);
  height: calc(100%);
  border: 1px solid ${color.macGrey};
  border-radius: 0.5vw;
  display: flex;
  flex-direction: column;
`

const TabBar = styled.div`
  background-color: ${color.black};
  border-radius: 0.5vw 0.5vw 0 0;
  width: calc(100% - 1vw);
  height: 2.5vw;
  border-bottom: 1px solid ${color.macGrey};
  display: flex;
  align-items: center;
  gap: 0.5vw;
  padding-left: 1vw;
`

const Dot = styled.div`
  width: 0.7vw;
  height: 0.7vw;
  border-radius: 50%;
  cursor: pointer;

  &.red {
    background-color: ${color.macRed};
  }
  &.yellow {
    background-color: ${color.macYellow};
  }
  &.green {
    background-color: ${color.macGreen};
  }
`

const Nav = styled.div`
  display: flex;
  gap: 2vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  span {
    color: ${color.grey};
    font-size: 0.8vw;
  }
`

// const NavItem = styled.div`
//   width: 0.8vw;
//   height: 0.8vw;
//   display: flex;
//   cursor: pointer;
//   img {
//     width: 100%;
//     height: 100%;
//   }
//   :hover {
//     filter: invert(65%) sepia(26%) saturate(5681%) hue-rotate(125deg) brightness(96%) contrast(80%);
//   }
// `

// const LogoBox = styled.div`
//   width: 1vw;
//   height: 1vw;
//   margin-left: auto;
//   margin-right: 1vw;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `

const BackGroundCirlce = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background-color: ${color.green};
  position: absolute;
  filter: blur(150px);
`

const BackGroundCircleLeft = styled(BackGroundCirlce)`
  top: 50vh;
  left: 10vw;
`

const BackGroundCircleRight = styled(BackGroundCirlce)`
  top: 15vh;
  right: 5vw;
`

const FooterBar = styled.div`
  background-color: ${color.black};
  border-radius: 0 0 0.5vw 0.5vw;
  width: calc(100% - 1vw);
  height: 2.5vw;
  border-top: 1px solid ${color.macGrey};
  display: flex;
  align-items: center;
  gap: 0.5vw;
  padding-left: 1vw;
  margin-top: auto;
`

const BottomText = styled.div`
  color: ${color.grey};
  margin-left: auto;
  margin-right: auto;
  font-size: 0.8vw;
`

// const ContactBox = styled.div`
//   color: white;
// `