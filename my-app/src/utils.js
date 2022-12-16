import {scaleLinear} from 'd3-scale';
import { distance } from 'framer-motion';

const ColorScale = require("color-scales");

// Distribution settings
const distribution = {
  min: 120,
  max: 180,
  mean: 150,
  stdev: 10,
  count: 576
}

// Color settings
const colorMinValue = distribution.min;
const colorMaxValue = distribution.max;
const colorMin = "#CAFF90";
const colorMax = "#345511";
const colorAlpha = 1;


//axis settings
// const xAxisMin = distribution.min;
// const xAxisMax = distribution.max;

let colorScale = new ColorScale(colorMinValue, colorMaxValue, [colorMin, colorMax], colorAlpha); // red to green from 0 to 100


export function getGridX(elemIndex, distance, sideLength){
  return (elemIndex % sideLength + 1) * distance;
}

export function getGridY(elemIndex, distance, sideLength){
  return (parseInt(elemIndex/sideLength) + 1) * distance
}

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
  return gaussianRandom(distribution.mean, distribution.stdev)
}

export function generateData(countData) {
  const result = [];
  for (let  i = 0; i < countData; i++){

    const value = gaussianRandom(distribution.mean, distribution.stdev);
    result.push(
        new TreeObject(
          i,
          value,
          getColor(value),
          value,
          value,
          value,
          value,
          6 
        ))
  }
  return result;
}

function getGridX2(elemIndex, distance, smallSideLength, fullSideLength){
  return ((elemIndex + parseInt(elemIndex/smallSideLength)) % fullSideLength + 1 ) * distance;
}

function getGridY2(elemIndex, distance, smallSideLength, fullSideLength){

  return (parseInt(elemIndex/fullSideLength) % smallSideLength + 1) * distance
}

function TreeObject(elemIndex, value, color, initX, initY, chartX, chartY, distance) {
  this.elemIndex = elemIndex;
  this.value = value;
  this.color = color;
  this.initX = getGridX2(elemIndex, distance, 6, 36);
  this.initY = getGridY2(elemIndex, distance, 6, 36);;
  this.chartX = chartX;
  this.chartY = chartY;
}


// export function getChartCoordinates(){
//   let x = scaleLinear()
//   .domain([10, 130])
//   .range([0, 960]);

// }

