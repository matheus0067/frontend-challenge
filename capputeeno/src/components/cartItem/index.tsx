import { ProductInCart } from "types/products";
import { formatPrice } from "utils/formatPrice";
import { ChangeEvent } from "react";
import * as S from './styles';
import { DeleteIcon } from "icons/deleteIcon";

interface CartItemProps {
    product: ProductInCart
    handleUpdateQuantity(id: string, quantity: number): void
    handleDelete(id: string): void
}

export function CartItem({ product, handleUpdateQuantity, handleDelete}: CartItemProps){
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }

return(
    <S.Item>
        <S.Button onClick={() => handleDelete(product.id)} aria-label="Deletar">
            <DeleteIcon />
        </S.Button>
        <S.Img src={product.image_url} />
        <S.Div>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div>
                <S.SelectQuantity value={product.quantity} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </S.SelectQuantity>
                <span>{formatPrice(product.price_in_cents)}</span>
            </div>
        </S.Div>
    </S.Item>
)
}