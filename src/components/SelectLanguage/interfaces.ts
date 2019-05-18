import { IContextInitialState } from '../Context/interfaces';
import { ILangObject } from '../Layout/interfaces';

interface IProps {
  context: IContextInitialState;
  langsMenu: ILangObject[];
}

export { IProps };
