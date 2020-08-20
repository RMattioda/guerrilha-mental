import styled from 'styled-components';

export const LogoImage = styled.img`
    width: 130px;    
    max-height: 120px;
    max-width: 250px;
    height: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
`;

export const LogoImageWrapper = styled.div`
    height: 100%;
    width: 140px;
    display: flex;
    overflow: hidden;
    padding-left: 100px;

    align-items: center;
    justify-content: center;

    @media (max-width: 800px){
        padding-left: 0px;
    }
`;
