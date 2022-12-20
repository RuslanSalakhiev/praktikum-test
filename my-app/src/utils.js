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


export const SVGParams = {
  width: 700,
  height: 380,
  smallSide: 6,
  fullSide: 24,
  distanceGrid: 13,
  columnDistanceChart: 10,
  treeDistanceChart: 10,
  r: 5,
}


// TreeGroup Parameters
export const TREEGROUP = {
  width: SVGParams.width,
  height: SVGParams.height,
  smallSide: SVGParams.smallSide,
  fullSide: SVGParams.fullSide,
  distanceGrid: SVGParams.distanceGrid,
  columnDistanceChart: SVGParams.columnDistanceChart,
  treeDistanceChart: SVGParams.treeDistanceChart,
  r: SVGParams.r,
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

function gaussianRandom(mean, stdev, min, max) {
  let u = 1 - Math.random(); 
  let v = Math.random();
  let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  
  const result = z * stdev + mean;
  return result < min 
    ? min 
    : result > max 
      ? max 
      : result
  ;
}

export function getRandomValue(){
  return gaussianRandom(DISTRIBUTION.mean, DISTRIBUTION.stdev, DISTRIBUTION.min, DISTRIBUTION.max)
}

export function generateData(countData) {
  const result = [];
  for (let  i = 0; i < countData; i++){

    const value = gaussianRandom(DISTRIBUTION.mean, DISTRIBUTION.stdev, DISTRIBUTION.min, DISTRIBUTION.max);
    
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




function getCoordinatesShift(axis, startCoord, endCoord, height = 0, margin = 0){
  // return 100
  return axis === 'x' ?  parseFloat(endCoord) - parseFloat(startCoord) :  parseFloat(height) -  parseFloat(endCoord) -  parseFloat(startCoord) -  parseFloat(margin);
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
    bins.forEach((bin, BinInd) => {
      
      const foundIndex = bin.indexOf(value);
      // console.log(element.value, bin, BinInd, foundIndex)
      if (foundIndex === -1) return
      binIndex = BinInd + 1;
      elemIndex = foundIndex; 
      
   });
   
   if (isNaN(parseInt(binIndex) * TREEGROUP.columnDistanceChart + TREEGROUP.chartMarginSide))  {
    console.log(i, parseInt(binIndex), elemIndex, bins, element)
   } 
   data[i].chartX = getCoordinatesShift('x',initX, parseInt(binIndex) * TREEGROUP.columnDistanceChart + TREEGROUP.chartMarginSide ,TREEGROUP.height, TREEGROUP.chartMarginSide) ;
   data[i].chartY = getCoordinatesShift('y',initY, parseInt(elemIndex) * TREEGROUP.treeDistanceChart, TREEGROUP.height, TREEGROUP.chartMarginBottom) ;


   // заполнить данные 
  
   
  //  return data
  });


}

// export function getChartCoordinates(){
//   let x = scaleLinear()
//   .domain([10, 130])
//   .range([0, 960]);

// }

