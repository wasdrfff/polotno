import "./style.scss";
type TProps = {
  children?: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
export const Button = ({ onClick, children }: TProps) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};
