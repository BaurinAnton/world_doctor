import Image from "next/image";

import { CardListComponent, BadgeWrapperComponent } from "@modules/shared";

import { MAIN_PAGE, CARD_LIST } from "./constants";
import { SymptomsComponent } from "./components";

import style from "./style.module.scss";

export const HomeTemplate = () => (
  <section className={style.homeTemplate}>
    <div className={style.container}>
      <h1>{MAIN_PAGE.title}</h1>
      <h2>{MAIN_PAGE.subtitle}</h2>

      <div className={style.row}>
        {CARD_LIST.map(
          ({ title, texts, image: { src, alt, width, height } }, id) => (
            <CardListComponent
              key={`${title}_${id}`}
              title={title}
              texts={texts}
              image={
                <Image src={src} alt={alt} width={width} height={height} />
              }
            />
          )
        )}
      </div>
    </div>

    <div className={style.container}>
      <div className={style.row}>
        <span>{MAIN_PAGE.titleCircle}</span>
        <span>{MAIN_PAGE.subTitleCircle}</span>
      </div>
      <div className={style.row}>
        <SymptomsComponent />
      </div>
    </div>
  </section>
);
