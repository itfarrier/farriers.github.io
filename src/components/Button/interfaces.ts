interface IProps {
  text: string;
  children: React.ReactChildren | React.ReactElement;
  className: React.HTMLAttributes<HTMLButtonElement>;
  onClick(): void;
}

export { IProps };
