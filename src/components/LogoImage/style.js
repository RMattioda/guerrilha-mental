import styled from 'styled-components';

export const LogoImage = styled.img`
    width: 100px;
    display: flex;
    max-height: 90px;
    max-width: 250px;
`;

export const LogoImageWrapper = styled.div`
    height: auto;
    width: 100px;
    display: flex;
    overflow: hidden;
    padding-left: 100px;

    @media (max-width: 800px){
        padding-left: 0px;
    }
`;
