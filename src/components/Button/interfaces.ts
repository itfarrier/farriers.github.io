import Button from '.';

interface IProps {
  text: string;
  children: React.ReactChildren;
  className: React.HTMLAttributes<HTMLButtonElement>;
  onClick(): void;
}

export { IProps };
