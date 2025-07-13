// initialize

// const js_dom = require("jsdom");// unable nodejs in the browser
const day_js = require("dayjs");
const time_zone = require("dayjs/plugin/timezone");
// const utc = require('dayjs/plugin/utc')

let now = day_js();

// console.log( now.format(`dddd , D MMMM , YYYY`))
day_js.extend(time_zone);

global.window.timeZone = day_js.tz.guess(); // assign it to a variable  in the global object or in the browser global.window.variable name
global.window.userDate = now.format(`dddd , D MMMM , YYYY`);

global.window.time = function () {
  return day_js().format(` hh : mm : ss`);
};
console.log(global.window.time);

//  now we should compile this to browser embedable js file
