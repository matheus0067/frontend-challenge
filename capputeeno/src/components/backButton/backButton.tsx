import { BackIcon } from "icons/back-icon";
import { useRouter } from "next/navigation";
import * as S from './styles';

interface BtnProps {
    navigate: string;
}

export function BackBtn({ navigate }: BtnProps){
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return (
        <S.Button onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </S.Button>
    )
}