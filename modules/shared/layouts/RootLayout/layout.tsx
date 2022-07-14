import style from "./style.module.scss";

type TProps = {
  children: React.ReactElement;
};
export const RootLayout: React.FC<TProps> = ({ children }) => {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>{children}</div>
    </main>
  );
};
