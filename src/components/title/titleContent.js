import styled from 'styled-components';

const TitleContent = styled.h1`
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.6rem;
    margin: 10px;

    transition: .6s;

    @media (max-width: 800px){
        margin: 0px;
        margin-bottom: 10px;
        font-size: 1.6rem;
    }

    &:hover,
    &:focus{
        color: var(--black);
    }
`;

export default TitleContent;