import { IContextInitialState } from '../Context/interfaces';

interface IProps {
  context: IContextInitialState;
  onClick(): void;
}

export { IProps };
