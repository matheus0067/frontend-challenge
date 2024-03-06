import React, { useEffect } from 'react';
import { useFilter } from 'hooks/useFilter';
import { FilterType } from 'types/filterTypes';
import * as S from './styles';

export interface FilterItemProps  {
  selected: boolean;
  
}

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  useEffect(() => {
    // Força a atualização quando o tipo muda
  }, [type]);

  return (
      <S.FilterList>
        <S.FilterItem
          selected={type === FilterType.ALL}
          onClick={() => handleChangeType(FilterType.ALL)}
        >
          Todos os Produtos
        </S.FilterItem>

        <S.FilterItem
          selected={type === FilterType.SHIRT}
          onClick={() => handleChangeType(FilterType.SHIRT)}
        >
          Camisetas
        </S.FilterItem>

        <S.FilterItem
          selected={type === FilterType.MUG}
          onClick={() => handleChangeType(FilterType.MUG)}
        >
          Canecas
        </S.FilterItem>
      </S.FilterList>
  );
}