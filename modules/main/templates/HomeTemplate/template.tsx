import Image from "next/image";

import { CardListComponent, BadgeWrapperComponent } from "@modules/shared";

import { TEMPLATE_CONTENT } from "./constants";
import { SymptomsComponent } from "./components";

import style from "./style.module.scss";

export const HomeTemplate = () => (
  <article className={style.homeTemplate}>
    <section className={style.titleContainer}>
      <h1>{TEMPLATE_CONTENT.mainSection.title}</h1>
    </section>

    <section className={style.cardsContainer}>
      <h2>{TEMPLATE_CONTENT.cardsSection.title}</h2>

      <div className={style.row}>
        {TEMPLATE_CONTENT.cardsSection.cards.map(
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
    </section>

    <section className={style.symptonsContainer}>
      <div className={style.row}>
        <span>{TEMPLATE_CONTENT.circleSection.title}</span>
        <span>{TEMPLATE_CONTENT.circleSection.subTitle}</span>
      </div>
      <div className={style.row}>
        <SymptomsComponent />
      </div>
    </section>
  </article>
);
