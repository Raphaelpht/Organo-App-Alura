import { useState } from 'react';
import Button from '../Button';
import Selector from '../Selector';
import TextField from '../TextField';
import ColorField from '../ColorField';
import * as S from '../styled'

const Form = ({title, titleButton, formName, expandButton = false, fields, action, style}) => {

    const [isExpanded, setIsExpanded] = useState(expandButton);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <S.DataContainer style={style} $margin={"80px 20px"}>
            <S.FormContainer onSubmit={(event) => action(event, formName)}>
                <S.DataContainer $alignIten={"center"} $justifyContent={"space-between"}>
                    <h3>{title}</h3>
                    {isExpanded ? 
                        <S.ImageList src='/images/expand.png' alt='Expandir' onClick={toggleExpand} />
                        : 
                        <S.ImageList src='/images/recall.png' alt='Recolher' onClick={toggleExpand} />
                    }
                </S.DataContainer>

                {!isExpanded && 
                    <>
                        {fields.map(field => 
                            field.type === "text" ?
                                <TextField
                                    key={field.label}
                                    label={field.label}
                                    value={field.varName}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    changeValue={value => field.function(value)}
                                /> 
                            : field.type === "select" ? 
                                <Selector
                                    key={field.label}
                                    label={field.label}
                                    items={field.list}
                                    value={field.varName}
                                    required={field.required}
                                    changeValue={value => field.function(value)}
                                />
                            : field.type === "color" ? 
                                <ColorField
                                    key={field.label}
                                    label={field.label}
                                    value={field.varName}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    changeValue={value => field.function(value)}
                                /> 
                            : ''
                        )}
                        <Button>{titleButton}</Button>
                    </>
                }
            </S.FormContainer>
        </S.DataContainer>
    )
}

export default Form;