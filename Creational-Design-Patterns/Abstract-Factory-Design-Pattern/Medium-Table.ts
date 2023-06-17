import { Dimension } from '../Factory-Design-Pattern/Dimension-Type';
import Table from './Table';

export default class MediumTable extends Table{
  constructor(dimension?: Dimension){
    super(dimension);
  };
};