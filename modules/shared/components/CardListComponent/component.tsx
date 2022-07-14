import cs from "classnames";
import style from "./style.module.scss";

type TProps = {
  title: string;
  image: React.ReactElement;
  texts: string[];
  className?: string | { [key: string]: string };
};

export const CardListComponent: React.FC<TProps> = ({
  title,
  texts,
  image,
  className,
}) => (
  <div className={cs(style.column, className || "")}>
    <h3>{title}</h3>
    {image}
    {texts.map((text, id) => (
      <p key={`${text}_${id}`}>{text}</p>
    ))}
  </div>
);
