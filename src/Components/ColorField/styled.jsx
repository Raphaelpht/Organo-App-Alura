import styled from "styled-components";

export const ColorFieldContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 15px 0;
`
export const ColorFieldInput = styled.input`
    border: none;
    height: 50px;
    font-size: 24px;
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 50%;
    border-radius: 10px;
    padding: 24px;
    margin: 0;
    background-color: #d1cdcd;
`

export const InputColorField = styled.input`
    border: none;
    height: 50px;
    font-size: 24px;
    box-sizing: border-box;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    width: 50%;
    padding: 0;
    margin-right: 10px;
    height: 50px;

    &::-webkit-color-swatch {
        border-radius: 8px;
        border: none;
    }

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }
`