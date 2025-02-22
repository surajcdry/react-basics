import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <div className="d-grid gap-2 col-2 mx-auto m-2">
        <button className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
