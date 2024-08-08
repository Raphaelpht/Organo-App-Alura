import { useState } from 'react';
import './style.css';

const TableList = ({title, listing, expandButton = false, action, style}) => {

    const [isExpanded, setIsExpanded] = useState(expandButton);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='form-data' style={style}>
            <div className='table-list'>
                <div className='header-container'>
                    <h3>{title}</h3>
                    {isExpanded ? 
                        <img src='/images/expand.png' alt='Expandir' onClick={toggleExpand} />
                        : 
                        <img src='/images/recall.png' alt='Recolher' onClick={toggleExpand} />
                    }
                </div>

                {!isExpanded ?
                    listing.length > 0 ? listing.map(field =>
                        <div key={field.name}>
                            <div className="header-container">
                                <h4>{field.name}</h4>
                                <input type='hidden' value={field.name} />
                                <img src='/images/trash.png' alt='Delete' onClick={(event) => action(field.name)} />
                            </div>
                            <hr/>
                        </div>
                    ) : <p>Nenhum registro para exibir</p>
                    : ''
                }
            </div>
        </section>
    )
}

export default TableList;