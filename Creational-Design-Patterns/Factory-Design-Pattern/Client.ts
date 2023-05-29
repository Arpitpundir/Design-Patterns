import ChairFactory from './ChairFactory';

const chair  = ChairFactory.getChair('SmallChair');
console.log(chair.getDimensions());
