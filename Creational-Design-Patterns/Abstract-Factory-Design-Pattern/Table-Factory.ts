import LargeTable from './Large-Table';
import MediumTable from './Medium-Table';
import SmallTable from './Small-Table';

export default class TableFactory{
  static getTable(tableType: string){
    if(tableType === 'small'){
      return new SmallTable();
    }else if(tableType === 'large'){
      return new LargeTable();
    }else {
      return new MediumTable();
    }
  }
};