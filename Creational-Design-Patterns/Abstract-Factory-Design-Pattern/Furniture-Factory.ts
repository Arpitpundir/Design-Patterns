import TableInterface from './Table-Interface';
import {ChairInterface} from "./../Factory-Design-Pattern/ChairInterface";
import TableFactory from './Table-Factory';
import ChairFactory from "./../Factory-Design-Pattern/ChairFactory";

interface IFurniture extends TableInterface, ChairInterface {};
export default class FurnitureFactory{
  static getFurniture(type: string): IFurniture | undefined {
    try {
      if(['SmallChair', 'MediumChair', 'LargeChair'].indexOf(type) > -1){
        return ChairFactory.getChair(type);
      }else if(['SmallTable', 'LargeTable', 'MediumChair'].indexOf(type) > -1){
        return TableFactory.getTable(type);
      }else{
        throw Error("Please provide a valid furniture type");
      }
    }catch(error){
      console.log(error);
    }
  }
}