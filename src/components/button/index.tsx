import "./style.scss";
type TProps = {
  children?: JSX.Element | string;
};
export const Button = ({ children }: TProps) => {
  return <button className="button">{children}</button>;
};
