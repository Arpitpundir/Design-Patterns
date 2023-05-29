import { Chair } from './Chair';
import { ChairInterface } from './ChairInterface';
import { Dimension } from './Dimension-Type';

export default class LargeChair extends Chair{
  dimension: Dimension;
  constructor(dimension?:Dimension){
    super(dimension);
  }
  getDimensions():Dimension{
    return this.dimension;
  }
}