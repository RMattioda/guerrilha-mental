import styled from 'styled-components'

const Paragraph = styled.p`
    display: flex;
    overflow-wrap: anywhere;
    font-size: 1.3rem;
    text-indent: 50px;

    @media (max-width: 800px){
        margin: 0px;
        font-size: 1.0rem;
    }

`;

export default Paragraph;