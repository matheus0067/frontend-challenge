import * as S from './styles';
import { useFilter } from "hooks/useFilter"
import { PriorityTypes } from "../../types/priorityTypes"
import { useState } from "react"
import { ArrowIcon } from 'icons/arrow-icon';

export function FilterByPriority () {
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    return (
        <S.FilterContainer>
        <S.Button onClick={handleOpen}>
            Organizar por
            <ArrowIcon />
        </S.Button>
        {isOpen && 
        <S.PriorityFilter>
        <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
        </S.PriorityFilter>
        }
    </S.FilterContainer>
    )
}