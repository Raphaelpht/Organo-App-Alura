import styled from "styled-components";

export const DataContainer = styled.div`
    display: ${({$display}) => $display || 'flex'};
    justify-content: ${({$justifyContent}) => $justifyContent || 'right'};
    align-items: ${({$alignIten}) => $alignIten || 'top'};
    margin: ${({$margin}) => $margin || '0px'};
`

export const TableListContainer = styled.div`
    min-width: ${({$minWidth}) => $minWidth || '350px'};
    max-width: ${({$maxWidth}) => $maxWidth || '350px'};
    min-height: ${({$minHeight}) => $minHeight || '60px'};
    padding: ${({$padding}) => $padding || '20px 34px'};
    height: ${({$height}) => $height || 'fit-content'};
    border-radius: ${({$borderRadius}) => $borderRadius || '20px'};
    background-color: ${({$backgroundColor}) => $backgroundColor || '#F2F2F2'};
    box-shadow: ${({$boxShadow}) => $boxShadow || '8px 8px 8px rgba(0, 0, 0, 0.4)'};
`

export const FormContainer = styled.form`
    min-width: ${({$minWidth}) => $minWidth || '350px'};
    max-width: ${({$maxWidth}) => $maxWidth || '350px'};
    min-height: ${({$minHeight}) => $minHeight || '60px'};
    padding: ${({$padding}) => $padding || '20px 34px'};
    height: ${({$height}) => $height || 'fit-content'};
    border-radius: ${({$borderRadius}) => $borderRadius || '20px'};
    background-color: ${({$backgroundColor}) => $backgroundColor || '#F2F2F2'};
    box-shadow: ${({$boxShadow}) => $boxShadow || '8px 8px 8px rgba(0, 0, 0, 0.4)'};
`

export const Label = styled.label`
    display: ${({$display}) => $display || 'block'};
    margin-bottom: ${({$marginBottom}) => $marginBottom || '8px'};
    font-size: ${({$fontSize}) => $fontSize || '24px'};
`

export const ImageList = styled.img`
    height: ${({$height}) => $height || '25px'};
    cursor: ${({$cursor}) => $cursor || 'pointer'};
`