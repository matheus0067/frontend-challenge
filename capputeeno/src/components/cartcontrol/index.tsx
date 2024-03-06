import * as S from './styles';
import { useLocalStorage } from "hooks/useLocalStorage";
import { CartIcon } from "../../icons/cart-icon";
import { useRouter } from 'next/navigation';

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }
    return (
       <S.Container onClick={handleNavigateToCart}>
            <CartIcon />
            {value.length > 0 && <S.CartCount>{value.length}</S.CartCount>}
        </S.Container>
    )
}