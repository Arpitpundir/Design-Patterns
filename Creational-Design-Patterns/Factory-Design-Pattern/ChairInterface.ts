import { Dimension } from './Dimension-Type'
export interface ChairInterface{
  dimension: Dimension;
  getDimensions:() => Dimension;
}