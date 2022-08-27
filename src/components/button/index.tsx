import "./style.scss";
type TProps = {
  children?: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  form?: string;
};
export const Button = ({ onClick, children, form }: TProps) => {
  return (
    <button onClick={onClick} className="button" form={form}>
      {children}
    </button>
  );
};
