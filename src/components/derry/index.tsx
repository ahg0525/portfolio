import styled from 'styled-components'

const DerryComponent = () => {
  return (
    <Container>
      <Intro>
        Here's Derry. Waiting to float ..
      </Intro>
    </Container>
  )
}

export default DerryComponent

const Container = styled.div`
  height: 100vh;
`

const Intro = styled.div`
  margin-top: 200px;
  color: white;
`