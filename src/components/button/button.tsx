import { Active } from "./button-styled";

type TProps = {
  children?: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  form?: string;
};
export const Button = ({ onClick, children, form }: TProps) => {
  return (
    <Active onClick={onClick} form={form}>
      {children}
    </Active>
  );
};
