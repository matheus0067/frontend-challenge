"use client"
import { BackBtn } from "components/backButton/backButton";
import { CartItem } from "components/cartItem";
import { DefaultPageLayout } from "components/defaultPage/defaultPageLayout";
import { Divider } from "components/divider/divider";
import { useLocalStorage } from "hooks/useLocalStorage";
import { ProductInCart } from "types/products";
import { formatPrice } from "utils/formatPrice";
import * as S from './styles';

export default function CartPage(){
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
       return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = formatPrice(calculateTotal(value))
    const deliveryFee = 4000;
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return (
        <DefaultPageLayout>
            <S.Container>
                <S.CartListContainer>
                    <BackBtn navigate="/" />
                    <h3>Seu carrinho</h3>
                    <p>
                        Total {value.length} produtos: 
                        <span>{cartTotal}</span>
                    </p>
                    <S.CartList>
                        {value.map(item =>
                            <CartItem
                                product={item}
                                key={item.id}
                                handleDelete={handleDeleteItem}
                                handleUpdateQuantity={handleUpdateQuantity}
                            />
                        )}
                    </S.CartList>
                </S.CartListContainer>

                <S.CartResultContainer>
                    <h3>Resumo do Pedido</h3>
                    <S.TotalItem isBold={false}>
                        <p>Subtotal de produtos</p>
                        <p>{cartTotal}</p>
                    </S.TotalItem>
                    <S.TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{formatPrice(deliveryFee)}</p>
                    </S.TotalItem>
                    <Divider />
                    <S.TotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalWithDelivery}</p>
                    </S.TotalItem>
                    <S.ShopBtn>FINALIZAR COMPRA</S.ShopBtn>
                </S.CartResultContainer>
            </S.Container>
        </DefaultPageLayout>
    );
}