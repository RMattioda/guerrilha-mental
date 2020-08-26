import styled from 'styled-components';

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 130px;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;

    background: var(--grayDark);
    border-bottom: 2px solid var(--primary);

    display: flex;
    flex-direction: row;

    @media (max-width: 800px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MenuItemWrapper = styled.div`

    background-color: var(--darkGrey);
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 100px;

   
    @media (max-width: 800px){
        display: none;
    }
`;

export const MenuItem = styled.button`

    cursor:pointer;  
    padding: 15px;   

    color: var(--white);
    background-color: var(--darkGrey);
    border: none;

    font-size: 2.0rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;

    text-decoration: none;
    outline:none;

    &:hover,
    &:focus{
        color: var(--primary);
        transform: scale(1, 1);
    }

    &:hover:after{
        transform: scale(1, 1);
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 0.175rem;
        left: 0;
        width: 100%;
        background: var(--primary);

        transform: scale(0, 1);
        transform-origin: 0% 100%;
        transition: transform 0.3s ease; 
    }
    
    @media (max-width: 800px){
        display: flex;
    }
`;
