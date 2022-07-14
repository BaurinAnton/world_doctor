import cs from "classnames";
import Image from "next/image";

import { BadgeWrapperComponent, HintComponent } from "@modules/shared";

import style from "./style.module.scss";
import { CircleMenuComponent } from "../../atoms";
import { TEMPLATE_CONTENT } from "../../../constants";

export const SymptomsComponent = () => (
  <div className={style.column}>
    <CircleMenuComponent className={style.circleMenuComponent} />
    {TEMPLATE_CONTENT.symptonsSection.diagram.subImg.map(
      ({ text, imageSympton }, id) => (
        <HintComponent
          hintText={text}
          className={style.sympton}
          key={`${text}_${id}`}
        >
          <BadgeWrapperComponent
            badge={
              <Image
                src={TEMPLATE_CONTENT.symptonsSection.diagram.badgeImg.src}
                alt={TEMPLATE_CONTENT.symptonsSection.diagram.badgeImg.alt}
                width={TEMPLATE_CONTENT.symptonsSection.diagram.badgeImg.width}
                height={
                  TEMPLATE_CONTENT.symptonsSection.diagram.badgeImg.height
                }
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
      )
    )}
  </div>
);
