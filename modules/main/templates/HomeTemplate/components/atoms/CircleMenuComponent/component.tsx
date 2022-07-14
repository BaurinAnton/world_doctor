import Image from "next/image";
import cs from "classnames";

import { CIRCLE_MENU } from "./constants";
import style from "./style.module.scss";
import { TEMPLATE_CONTENT } from "../../../constants";

type TProps = {
  className?: string | { [key: string]: string };
};

export const CircleMenuComponent: React.FC<TProps> = ({ className }) => {
  return (
    <div className={cs(style.circleMenu, className)}>
      <div className={style.imageContainer}>
        <Image
          src={TEMPLATE_CONTENT.symptonsSection.diagram.mainImg.image.src}
          alt={CIRCLE_MENU.image.alt}
          width={CIRCLE_MENU.image.width}
          height={CIRCLE_MENU.image.height}
          className={style.image}
        />
      </div>
      <span className={style.text}>{CIRCLE_MENU.text}</span>
    </div>
  );
};
