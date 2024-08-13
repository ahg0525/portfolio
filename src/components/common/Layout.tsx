import React from 'react'
import styled from 'styled-components'
import useWindowSizeCalc from '../../hooks/useWindowSizeCalc'
import { MobileCalcProps } from '../../common/types'
import { color } from '../../common/colors'
import MacFrame from './MacFrame'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isMobile } = useWindowSizeCalc(800);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<MobileCalcProps>, { isMobile });
    }
    return child;
  });
  
  return (
    <OuterContainer>
      <InnerContainer>
        <MacFrame/>
        {childrenWithProps}
      </InnerContainer>
    </OuterContainer>
  )
}

export default Layout

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.black};
`

const InnerContainer = styled.div`
  width: calc(100% - 4vw);
  min-width: 342px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    /* width: calc(100% - 12vw); */
  }
`