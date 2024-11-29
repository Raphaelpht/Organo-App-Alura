import { useState } from 'react';
import * as S from '../styled'

const TableList = ({title, listing, expandButton = false, action, style}) => {

    const [isExpanded, setIsExpanded] = useState(expandButton);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <S.DataContainer style={style} $margin={"80px 20px"}>
            <S.TableListContainer>
                <S.DataContainer $alignIten={"center"} $justifyContent={"space-between"}>
                    <h3>{title}</h3>
                    {isExpanded ? 
                        <S.ImageList src='/images/expand.png' alt='Expandir' onClick={toggleExpand} />
                        : 
                        <S.ImageList src='/images/recall.png' alt='Recolher' onClick={toggleExpand} />
                    }
                </S.DataContainer>

                {!isExpanded ?
                    listing.length > 0 ? listing.map(field =>
                        <div key={field.name}>
                            <S.DataContainer $alignIten={"center"} $justifyContent={"space-between"}>
                                <h4>{field.name}</h4>
                                <input type='hidden' value={field.name} />
                                <S.ImageList src='/images/trash.png' alt='Delete' onClick={(event) => action(field.id)} />
                            </S.DataContainer>
                            <hr/>
                        </div>
                    ) : <p>Nenhum registro para exibir</p>
                    : ''
                }
            </S.TableListContainer>
        </S.DataContainer>
    )
}

export default TableList;