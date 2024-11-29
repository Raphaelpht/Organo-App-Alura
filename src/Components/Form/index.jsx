import { useState } from 'react';
import Button from '../Button';
import Selector from '../Selector';
import TextField from '../TextField';
import ColorField from '../ColorField';
import './style.css';

const Form = ({title, titleButton, formName, expandButton = false, fields, action, style}) => {

    const [isExpanded, setIsExpanded] = useState(expandButton);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='form-data' style={style}>
            <form onSubmit={(event) => action(event, formName)}>
                <div className='header-container'>
                    <h3>{title}</h3>
                    {isExpanded ? 
                        <img src='/images/expand.png' alt='Expandir' onClick={toggleExpand} />
                        : 
                        <img src='/images/recall.png' alt='Recolher' onClick={toggleExpand} />
                    }
                </div>

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
            </form>
        </section>
    )
}

export default Form;