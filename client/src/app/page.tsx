import { Ip } from "@/components/widgets/ip/Ip";
import s from "./page.module.scss";
import { Container } from "@/components/shared/container/Container";

/** Компонент главной страницы */
export default function Home() {
  return (
    <div className={s.wrapper}>
      <div className={s.homepage}>
        <Container>
          <div className={s.content}>
            <Ip />
          </div>
        </Container>
      </div>
    </div>
  );
}
