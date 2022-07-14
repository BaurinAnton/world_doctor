import { BadgeWrapperComponent } from "@modules/shared";
import { HintComponent } from "@modules/shared/components";
import Image from "next/image";

import { SYMPTON, CENTER_CIRCLE, BADGE_ICON_IMG } from "./constants";

import style from "./style.module.scss";

export const SymptomsComponent = () => (
  <div className={style.column}>
    // TODO: Сделать через формулу рисовать круговую диаграмму И если сможешь,
    то вынести после это в отдельный шаред компонент
    {SYMPTON.map(({ text, imageSympton }, id) => (
      <HintComponent
        hintText={text}
        className={style.sympton}
        key={`${text}_${id}`}
      >
        <BadgeWrapperComponent
          badge={
            <Image
              src={BADGE_ICON_IMG.image.src}
              alt={BADGE_ICON_IMG.image.alt}
              width={BADGE_ICON_IMG.image.width}
              height={BADGE_ICON_IMG.image.height}
            />
          }
        >
          <Image
            src={imageSympton.src}
            alt={imageSympton.alt}
            width={imageSympton.width}
            height={imageSympton.height}
          />
        </BadgeWrapperComponent>
      </HintComponent>
    ))}
    <div className={style.centerCircle}>
      <Image
        src={CENTER_CIRCLE.image.src}
        alt={CENTER_CIRCLE.image.alt}
        width={CENTER_CIRCLE.image.width}
        height={CENTER_CIRCLE.image.height}
        className={style.image}
      />
      <span className={style.text}>{CENTER_CIRCLE.text}</span>
    </div>
  </div>
);
