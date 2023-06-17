import FurnitureFactory from './Furniture-Factory';

const smallChair = FurnitureFactory.getFurniture('SmallChair');
console.log(smallChair?.getDimension());
const largeTable = FurnitureFactory.getFurniture('Largeable');
console.log(largeTable?.getDimension());