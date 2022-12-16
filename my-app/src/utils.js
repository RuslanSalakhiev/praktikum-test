import {scaleLinear} from 'd3-scale';
import {bin} from 'd3-array';
import { distance } from 'framer-motion';

const ColorScale = require("color-scales");

// Distribution settings
export const DISTRIBUTION = {
  min: 120,
  max: 180,
  mean: 150,
  stdev: 10,
  count: 576,
  thresholds: 5
}

// Color settings
const colorMinValue = DISTRIBUTION.min;
const colorMaxValue = DISTRIBUTION.max;
const colorMin = "#CAFF90";
const colorMax = "#345511";
const colorAlpha = 1;


// TreeGroup Parameters
export const TREEGROUP = {
  smallSide: 6,
  fullSide: 24,
  distance: 13,
  r: 5
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
          TREEGROUP.distance,
          TREEGROUP.r 
        ))
  }
  return result;
}

function getGridX(elemIndex, distance, smallSideLength, fullSideLength){
  const shift = parseInt(elemIndex/smallSideLength) % (fullSideLength / smallSideLength);
  return ((elemIndex % fullSideLength + shift)+ 1) * distance;
}

function getGridY(elemIndex, distance, smallSideLength, fullSideLength){
  const shift = parseInt(elemIndex/(smallSideLength * fullSideLength)) + 1
  return (parseInt(elemIndex/fullSideLength) + shift ) * distance
}
// 
function TreeObject(elemIndex, value, color, distance,r) {
  this.elemIndex = elemIndex;
  this.value = value;
  this.color = color;
  this.initX = getGridX(elemIndex, distance, TREEGROUP.smallSide, TREEGROUP.fullSide);
  this.initY = getGridY(elemIndex, distance, TREEGROUP.smallSide, TREEGROUP.fullSide);;
  this.chartX = this.initX;
  this.chartY = this.initY;
  // this.bin = bin
  this.r = r;
}

export function addBins(data) {
  const values = data.map(elem => elem.value)
  
  let binGenerator = bin()
  .domain([DISTRIBUTION.min,DISTRIBUTION.max])   
  .thresholds(DISTRIBUTION.thresholds)
  
  const bins = binGenerator(values) 
  
  data.forEach((element, i) => {
    const value = element.value;
    
    let binIndex, elemIndex
    bins.forEach((bin, i) => {
      const foundIndex = bin.indexOf(value);
      if (foundIndex === -1) return
      binIndex = i;
      elemIndex = foundIndex;  
   });

   // заполнить данные 
   data[i].chartX = binIndex * 10;
   data[i].chartY = elemIndex * 5;
  });

  console.log(data)
}

// export function getChartCoordinates(){
//   let x = scaleLinear()
//   .domain([10, 130])
//   .range([0, 960]);

// }

