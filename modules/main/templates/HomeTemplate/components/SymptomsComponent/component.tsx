import cs from "classnames";
import Image from "next/image";

import {
  BadgeWrapperComponent,
  HintComponent,
  CicrleMenuComponent
} from "@modules/shared";
import { SYMPTON, BADGE_ICON_IMG } from "./constants";

import style from "./style.module.scss";

export const SymptomsComponent = () => (
  <div className={style.column}>
    <CicrleMenuComponent />
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
          <div className={style.imageSympton}>
            <Image
              src={imageSympton.src}
              alt={imageSympton.alt}
              width={imageSympton.width}
              height={imageSympton.height}
            />
          </div>
        </BadgeWrapperComponent>
      </HintComponent>
    ))}
  </div>
);
