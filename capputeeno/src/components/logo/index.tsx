import * as S from './styles';
import { Saira_Stencil_One } from 'next/font/google';

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
  });

  export type LogoProps = {
    children: React.ReactNode

  }

  const Logo = ({ children }: LogoProps) => (
    <S.Logo className={sairaStencil.className}>{children}</S.Logo>
)

export default Logo
  