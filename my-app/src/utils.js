import {bin} from 'd3-array';

const ColorScale = require("color-scales");

// Distribution settings
export const DISTRIBUTION = {
  min: 120,
  max: 180,
  mean: 150,
  stdev: 10,
  count: 576,
  thresholds: 60
}

// Color settings
const colorMinValue = DISTRIBUTION.min;
const colorMaxValue = DISTRIBUTION.max;
const colorMin = "#D9FFC9";
const colorMax = "#269624";
const colorAlpha = 1;



const SVGParams = {
  width: 700,
  height: 400,
  smallSide: 6,
  fullSide: 24,
  distanceGrid: 13,
  columnDistanceChart: 10,
  treeDistanceChart: 10,
  r: 5,

}


// TreeGroup Parameters
export const TREEGROUP = {
  width: 700,
  height: 400,
  smallSide: 6,
  fullSide: 24,
  distanceGrid: 13,
  columnDistanceChart: 10,
  treeDistanceChart: 10,
  r: 5,
  gridMarginSide: (SVGParams.width - (SVGParams.fullSide +3) * SVGParams.r  * 2 - SVGParams.distanceGrid * (SVGParams.fullSide / SVGParams.smallSide +1))/2,
  gridMarginBottom: 10,
  chartMarginSide: 40,
  chartMarginBottom: 50,
}


//axis settings
// const xAxisMin = distribution.min;
// const xAxisMax = distribution.max;

let colorScale = new ColorScale(colorMinValue, colorMaxValue, [colorMin, colorMax], colorAlpha); // red to green from 0 to 100


export function getColor(value){
  return colorScale.getColor(value).toHexString()
}

function gaussianRandom(mean, stdev) {
  let u = 1 - Math.random(); 
  let v = Math.random();
  let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  return z * stdev + mean;
}

export function getRandomValue(){
  return gaussianRandom(DISTRIBUTION.mean, DISTRIBUTION.stdev)
}

export function generateData(countData) {
  const result = [];
  for (let  i = 0; i < countData; i++){

    const value = gaussianRandom(DISTRIBUTION.mean, DISTRIBUTION.stdev);
    
    result.push(
        new TreeObject(
          i,
          value,
          getColor(value),
          TREEGROUP.distanceGrid,
          TREEGROUP.r 
        ))
  }
  return result;
}

function getGridX(elemIndex, distance, smallSideLength, fullSideLength, margin){
  const shift = parseInt(elemIndex/smallSideLength) % (fullSideLength / smallSideLength);
  return ((elemIndex % fullSideLength + shift)) * distance + margin;
}

function getGridY(elemIndex, distance, smallSideLength, fullSideLength, margin){
  const shift = parseInt(elemIndex/(smallSideLength * fullSideLength)) + 1
  return (parseInt(elemIndex/fullSideLength) + shift ) * distance + margin
}

// Объект дерево
function TreeObject(elemIndex, value, color, distance,r) {
  this.elemIndex = elemIndex;
  this.value = value;
  this.color = color;
  this.initX = getGridX(elemIndex, distance, TREEGROUP.smallSide, TREEGROUP.fullSide, TREEGROUP.gridMarginSide);
  this.initY = getGridY(elemIndex, distance, TREEGROUP.smallSide, TREEGROUP.fullSide, TREEGROUP.gridMarginBottom);;
  this.chartX = this.initX;
  this.chartY = this.initY;
  this.r = r;
}




function getCoordinatesShift(axis, startCoord, endCoord, height = null, margin){
  return axis === 'x' ?  endCoord - startCoord : height - endCoord - startCoord - margin;
}

export function addBins(data) {
  const values = data.map(elem => elem.value)
  
  let binGenerator = bin()
  .domain([DISTRIBUTION.min,DISTRIBUTION.max])   
  .thresholds(DISTRIBUTION.thresholds)
  
  const bins = binGenerator(values) 
  
  data.forEach((element, i) => {
    const value = element.value;
    const initX = element.initX;
    const initY = element.initY;

    let binIndex, elemIndex
    bins.forEach((bin, i) => {
      const foundIndex = bin.indexOf(value);
      if (foundIndex === -1) return
      binIndex = i + 1;
      elemIndex = foundIndex; 
      
   });
   
   data[i].chartX = getCoordinatesShift('x',initX, binIndex * TREEGROUP.columnDistanceChart + TREEGROUP.chartMarginSide ,TREEGROUP.height, TREEGROUP.chartMarginSide) ;
   data[i].chartY = getCoordinatesShift('y',initY, elemIndex * TREEGROUP.treeDistanceChart, TREEGROUP.height, TREEGROUP.chartMarginBottom) ;


   // заполнить данные 
  
   
  //  return data
  });


}

// export function getChartCoordinates(){
//   let x = scaleLinear()
//   .domain([10, 130])
//   .range([0, 960]);

// }

