import { Chair } from './Chair';
import { Dimension } from './Dimension-Type';

export default class SmallChair extends Chair{
  dimension: Dimension;
  constructor(dimension?: Dimension){
    super(dimension);
  }

  getDimension(): Dimension {
      return this.dimension;
  }
}