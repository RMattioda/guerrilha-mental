import styled from 'styled-components';

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    background: var(--grayDark);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MenuItem = styled.div`

`;
