import { Dimension } from '../Factory-Design-Pattern/Dimension-Type';
import Table from './Table';

export default class SmallTable extends Table{
  constructor(dimension?: Dimension){
    super(dimension);
  };
};
