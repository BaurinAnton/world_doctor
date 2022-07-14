import cs from "classnames";
import { useState } from "react";

import style from "./style.module.scss";

type TProps = {
  hintText: string;
  children: React.ReactElement;
  positionTop?: number;
  positionLeft?: number;
  positionBottom?: number;
  positionRight?: number;
  className?: string | { [key: string]: string };
};

export const HintComponent: React.FC<TProps> = ({
  hintText,
  children,
  positionTop,
  positionLeft,
  positionBottom,
  positionRight,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpenHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div
      className={cs(style.hintComponent, className)}
      onClick={changeIsOpenHandler}
    >
      <div className={style.children}>{children}</div>
      <p
        style={{
          ...(positionTop ? { top: `${positionTop}px` } : {}),
          ...(positionLeft ? { left: `${positionLeft}px` } : {}),
          ...(positionBottom ? { bottom: `${positionBottom}px` } : {}),
          ...(positionRight ? { right: `${positionRight}px` } : {}),
        }}
        className={cs({ [style.isOpen]: isOpen })}
      >
        {hintText}
      </p>
    </div>
  );
};
