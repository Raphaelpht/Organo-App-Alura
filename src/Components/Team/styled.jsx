import styled from "styled-components";

export const TeamContainer = styled.section`
    text-align: center;
    padding: 32px;
    background-blend-mode: multiply;
    position: relative;
`

export const Title = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`

export const Participants = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`

export const InputColor = styled.input`
    top: 20px;
    padding: 0;
    right: 50px;
    width: 60px;
    height: 60px;
    border-width: 2px;
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    &::-webkit-color-swatch {
        border-radius: 50%;
        border: none;
    }

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }
`