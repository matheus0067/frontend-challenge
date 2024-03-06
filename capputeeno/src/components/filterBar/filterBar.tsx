"use client"

import { styled } from "styled-components"
import { FilterByType } from "components/filters/filterByType"
import { FilterByPriority } from "components/filterbypriority"

interface FilterBarProps {}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBart(props: FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}