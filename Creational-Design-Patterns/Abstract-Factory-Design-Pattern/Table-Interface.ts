import { Dimension } from '../Factory-Design-Pattern/Dimension-Type';
export default interface TableInterface{
  dimension: Dimension;
  getDimension: () => Dimension;
}