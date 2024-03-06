"use client";

import { BackBtn } from "components/backButton/backButton";
import { DefaultPageLayout } from "components/defaultPage/defaultPageLayout";
import { ShopBagIcon } from "icons/shoppingBag";
import { useProduct } from "hooks/useProducts";
import type { Products } from "types/products";
import { formatPrice } from "utils/formatPrice";
import * as S from './styles';

interface ProductProps {}

export default function Products({ searchParams }: { searchParams: { id: string }}) {
    const { data } = useProduct(searchParams.id);
    
    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items');
        if(cartItems) {
            let cartItemsArray = JSON.parse(cartItems);

            let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === searchParams.id);

            if(existingProductIndex !== -1){
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
            }

            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        } else {
            const newCart = [{ ...data, quantity: 1, id: searchParams.id }]
            localStorage.setItem('cart-items', JSON.stringify(newCart));
        }
    }

    return (
        <DefaultPageLayout>
            <S.Container>
                <BackBtn navigate="/" />
                <S.Section>
                
                    <S.Div>
                        <S.ProductInfo>
                        <S.Img src={data?.image_url} />
                            <S.Span>{data?.category}</S.Span>
                            <S.H2>{data?.name}</S.H2>
                            <S.SpanPrice>{formatPrice(data?.price_in_cents ?? 0)}</S.SpanPrice>
                            <S.P>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</S.P>
                            <S.DivDescription>
                                <h3>Descrição</h3>
                                <p>{data?.description}</p>
                            </S.DivDescription>
                        </S.ProductInfo>
                        <S.Button onClick={handleAddToCart}>
                            <ShopBagIcon />
                            Adicionar ao carrinho
                        </S.Button>
                        
                    </S.Div>
                </S.Section>
            </S.Container>
        </DefaultPageLayout>
    );
}