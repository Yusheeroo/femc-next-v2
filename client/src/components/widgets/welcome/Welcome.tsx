import s from './Welcome.module.scss';
import { Container } from '@/components/shared/container/Container';
import Image from 'next/image';
import { welcomeMock } from './mock';
import { CustomLink } from '@/components/shared/customLink/CustomLink';


/** Компонент хедера */
export const Welcome = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.content}>
            <div className={s.block}>
                <div className={s.text}>
                    <div className={s.title}>{welcomeMock.title}</div>
                    <div className={s.subtitle}>{welcomeMock.subtitle}</div>
                </div>
                <div className={s.buttonsWrapper}>
                    <CustomLink href={'/play'}>Подключиться</CustomLink>
                    <CustomLink href={'/about'} isSecondary={true}>О комплексе</CustomLink>
                </div>
                <Image src={welcomeMock.image} width={1017} height={330} className={s.backgroundLogo} alt='Задний фон приветственного блока'></Image>
            </div>
        </div>
      </Container>
    </div>
  );
};
