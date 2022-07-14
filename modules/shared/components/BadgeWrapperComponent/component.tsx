import cs from "classnames";

import style from "./style.module.scss";

type TProps = {
  badge: React.ReactElement;
  children: React.ReactElement;
  className?: string | { [key: string]: string };
};

export const BadgeWrapperComponent: React.FC<TProps> = ({
  badge,
  children,
  className,
}) => (
  <div className={cs(style.badgeWrapperComponent, className)}>
    <div className={style.children}>{children}</div>
    <div className={style.badge}>{badge}</div>
  </div>
);
