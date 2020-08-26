import styled from 'styled-components';

export const MenuWrapper = styled.nav.attrs(props => ({
    className: props.className.value,
}))`
    width: 100%;
    height: 130px;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;

    background-color: var(--grayDark);
    border-bottom: 2px solid var(--primary);

    display: flex;
    flex-direction: row;
    position: fixed;

    transition: 0.4s;

    &.bottom{
        height: 100px;
    }

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
    
    &:hover{
        color: var(--primary);
    }

    &:hover:after{
        width: 100%;
        transition: width .3s;
    }

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: var(--primary);
        transition: width .3s;
    }
    
    @media (max-width: 800px){
        display: flex;
    }
`;
