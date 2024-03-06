"use client"
import { useProducts } from "hooks/useProduct"
import { ProductCard } from '../productCard'
import { styled } from "styled-components"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 25rem);
    grid-gap: 3.2rem;
    max-width: 100%;

    margin-top: 3.2rem;
`

export function ProductsList(){
    const { data } = useProducts();
    return(
        <ListContainer>
            {data?.map(product => 
            <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
            />
            )}
    </ListContainer>
    )
}