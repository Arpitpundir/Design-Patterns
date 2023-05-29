import {ChairInterface} from "./ChairInterface";
import LargeChair from './LargeChair';
import MediumChair from './MediumChair';
import SmallChair from './SmallChair';

export default class ChairFactory {
  static getChair(chairType: string): ChairInterface{
    if(chairType === 'SmallChair'){
      return new SmallChair();
    }else if(chairType === 'LargeChair'){
      return new LargeChair();
    }else return new MediumChair();
  }
}