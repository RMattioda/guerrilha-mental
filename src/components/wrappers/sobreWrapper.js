import styled from 'styled-components'

const SobreWrapper = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;

    @media (max-width: 800px){
      flex-direction: column;
    }
`;

export {
    SobreWrapper,
}