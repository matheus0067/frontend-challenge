import { InputHTMLAttributes } from 'react';
import { SearchLoupe } from '../../icons/search-loupe';
import * as S from './styles';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string ) => void
}

export function SearchInputWSearchLoupe(props: SearchProps) {
  return (
    <S.InputContainer>
      <S.SearchInput
       onChange={(event) => props.handleChange(event.target.value)} 
      {...props} />
      <SearchLoupe />
    </S.InputContainer>
  );
}

export default SearchInputWSearchLoupe