import React from 'react';
import styled, { css } from 'styled-components';

const SectionWrapper = styled.section`
    border: 2px solid black;
    margin: 10px;
    width: 30%;
    overflow: hidden;
    display: inline-block;
    padding: 10px;
    box-sizing: border-box;
    
    min-height: 200px;
    height:fit-content;

    ${({ princial }) => princial && css`
        width: 70%;
    `};

    @media (max-width: 800px){
        width: 100%;
        margin: 0px;
        margin-bottom: 10px;
    }

`;

const Section = ({ children, principal }) => {

    const princial = Boolean(principal);

    return (
        <SectionWrapper
            princial={princial}
        >
            { children }
        </SectionWrapper>
    )
}

export default Section;