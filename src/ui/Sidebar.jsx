import React from 'react';
import styled from 'styled-components';
import MainNav from './MainNav';
import Logo from './Logo';

const StyledSidebbar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem  2.4rem;
    border-right: 1px solid var(--color-grey-100);

    /* grid item start from the first row and span all the way to the last row. */
    grid-row: 1/ -1;
    gap: 3.2rem;
`

function Sidebar() {
  return (
    <StyledSidebbar>
      <Logo />
        <MainNav/>
    </StyledSidebbar>
  )
}

export default Sidebar
