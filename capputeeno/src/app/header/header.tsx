"use client"

import Logo from 'components/logo';
import * as S from './styles';
import SearchInputWSearchLoupe from 'components/search';
import { CartControl } from 'components/cartcontrol';
import { useFilter } from 'hooks/useFilter';

interface HeaderProps {}


export function Header(props : HeaderProps) {
    const {setSearch, search} = useFilter();

    return(
       <S.TagHeader>
        <Logo>Capputeeno</Logo>
        <div>
            <SearchInputWSearchLoupe
            value={search}
            handleChange={setSearch}
            placeholder="Procurando por algo específico?"
            />
        </div>
        <CartControl/>
       </S.TagHeader> 
    )
}