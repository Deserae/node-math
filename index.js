#! /usr/bin/env node
var argv = require('yargs').argv;
//console.log("newtmgr version 0.0.1");
console.log(argv._);

if(argv._.includes("pumpkins")){
  console.log("!!!!!");
}
//can't remember how to invoke this

if(argv.hasOwnProperty("deserae")){
  console.log("hamster",argv);
}


// if (argv.ships > 3 && argv.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!');
// } else {
//     console.log('Retreat from the xupptumblers!');
// }

///math**********************



  // var result = add(argv._);
  // console.log(result);

var subtract =function(params){
  var number = 0;
  argv._.forEach(function(x){
    number = number +x;
  });
  return number;
};

  // var result = subract(argv._);
  // console.log(result);

var multiply =function(params){
  var mnum = 1;
  argv._.forEach(function(x){
    mnum = mnum*x;
  });
  return mnum;
};

  // var result = multiply(argv._);
  // console.log(result);

var divide =function(params){
  var mnum = 1;
  argv._.forEach(function(x){
    mnum = mnum*x;
  });
  return mnum;
};

  // var result = divide(argv._);
  // console.log(result);
var add =function(params){
  var number = 0;
  params.forEach(function(param){
    number = number +param;
  });
  return number;
};

if (argv.add){
  console.log("add");
  var result = add(argv._);
  console.log(result);
}
if (argv.subtract){
  console.log("subtract");
}
if (argv.multiply){
  console.log("multiply");
}
if (argv.divide){
  console.log("dividepoo");
}

//+-*/
//if no options passed, help
//needs >= two inputs - prompt if not
//disallow /0
//print version in both --version and version
//random thing from docs to implement
//submit as pull request to newtmgr
// Sub
// ./math.js -sub -10 -2
// 8
 
// Add
// ./math.js -add -10 -2
// 12
 
// ./math.js -v or ./math.js --version
 
// incorrect inputs:
// ./math.js or math.js -h
// Please enter an operator and parameters
// Options are
// -mult
// -add
// -div
// -sub
 
 
// ./math.js -10 -2
// Please choose an operator
 
// ./math.js -mult -divide -10 -2
// Choose a single operator
 
// ./math.js -mult
// Please choose parameters

//var argv = require(‘yargs’).argv;
// var argv = {}; 
// argv._= [10, 2, 5];
 
// console.log("if multiplied result is " + multiply(argv._));
// console.log("if added result is " + add(argv._));
