import { ChairInterface } from './ChairInterface';
import { Dimension } from './Dimension-Type';

export class Chair implements ChairInterface{
  dimension: Dimension;

  constructor(dimension?: Dimension){
    if(dimension){
      this.dimension = dimension;
    }else{
      this.dimension = {
        height: 0,
        width: 0,
        length: 0
      }
    }
  };
  getDimensions(): Dimension{
    return this.dimension;
  }
};