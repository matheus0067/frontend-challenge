import * as S from './styles';
import { useRouter } from "next/navigation"
import { Divider } from "../divider/divider"
import { formatPrice } from 'utils/formatPrice';

interface ProductCardProps {
  title: string,
  price: number,
  image: string,
  id: string
};

export function ProductCard(props : ProductCardProps){
  const router = useRouter();
  const price = formatPrice(props.price)

  const handleNavigate = () => {
      router.push("/product?id=" + props.id);
  }
  return (
    <S.ProductCardContainer onClick={handleNavigate}>
      <S.Img src={props.image} />
      <S.Div>
        <S.Title>{props.title}</S.Title>
        <Divider />
        <S.Price>{price}</S.Price>
      </S.Div>
    </S.ProductCardContainer>
  );
};