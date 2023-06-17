import { Dimension } from '../Factory-Design-Pattern/Dimension-Type';
import TableInterface from './Table-Interface';

export default class Table implements TableInterface{
  dimension: Dimension;
  constructor(dimension?:Dimension){
    if(dimension){
      this.dimension = dimension;
    }else{
      this.dimension = {
        height: 0,
        length: 0,
        width: 0
      };
    }
  }
  getDimension(): Dimension {
    return this.dimension;
  }
}