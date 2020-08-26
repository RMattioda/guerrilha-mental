import styled from 'styled-components';

export const LogoImage = styled.img.attrs(props => ({
    className: props.className.value,
}))`
    width: 130px;    
    max-height: 120px;
    max-width: 250px;
    height: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;

    transition: 0.4s;

    &.bottom{
        width: 90px;
    }
    
`;

export const LogoImageWrapper = styled.div`
    height: 100%;
    width: 140px;
    display: flex;
    padding-left: 100px;
    margin-right: 15px;

    align-items: center;
    justify-content: center;

    @media (max-width: 800px){
        padding-left: 0px;
    }
`;
