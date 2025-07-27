import s from "./page.module.scss";
import { Container } from "@/components/shared/container/Container";

export default function Home() {
  return (
    <Container>
      <div className={s.title}>HOMEPAGE</div>
    </Container>
  );
}
