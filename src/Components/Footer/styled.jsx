import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    color: #FFF;
    background: #6278F7;
    padding: 40px 0px;
    justify-content: space-around;
    align-items: center;
`

export const SectionContainer = styled.footer`
`

export const FooterList= styled.ul`
    li {
        display: inline-block;
        margin-right: 32px;
    }

    &li:last-child {
        margin-right: 0;
    }
`

export const FooterTitle = styled.p`
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
`