import s from "./page.module.scss";
import { Welcome } from "@/components/widgets/welcome/Welcome";
import { ServersStatus } from "@/components/widgets/serversStatus/ServersStatus";

/** Компонент главной страницы */
export default function Home() {
  return (
    <div className={s.wrapper}>
      <Welcome />
      <ServersStatus />
    </div>
  );
}
