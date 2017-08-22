function createCommonjsModule(e,n){return n={exports:{}},e(n,n.exports),n.exports}import React from"react";import PropTypes from"prop-types";var small="0",medium="768px",large="1024px",xlarge="1170px",breakpoints={small:small,medium:medium,large:large,xlarge:xlarge},index=createCommonjsModule(function(e){!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),defineProperty=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e},bps=Object.keys(breakpoints),toCamelCase=function(e){return""+e.substr(0,1).toUpperCase()+e.substr(1)},getBreakpointPropName=function(e,n){return n+"On"+toCamelCase(e)},getBooleanClassNames=function(e,n){return n.reduce(function(n,r){return n.concat(e[r]?" "+r:"")},"")},getBreakpointClassName=function(e,n){return e[n]?" "+n+"-"+e[n]:""},getBreakpointNumericClassName=function(e,n,r){return n.reduce(function(n,t){var o=e[getBreakpointPropName(r,t)];return n.concat(o?" "+r+"-"+t+"-"+o:"")},"")},getBreakpointBooleanClassName=function(e,n,r){return n.reduce(function(n,t){return n.concat(e[getBreakpointPropName(r,t)]?" "+r+"-"+t:"")},"")},getBreakpointVisibilityClassName=function(e,n,r){return n.reduce(function(n,t){return n.concat(e[getBreakpointPropName(r,t)]?" "+t+"-for-"+r:"")},"")},generateBreakpointClassNames=function(e,n,r){return"".concat(n.include?getBreakpointClassName(e,r):"",n.numeric?getBreakpointNumericClassName(e,n.numeric,r):"",n.boolean?getBreakpointBooleanClassName(e,n.boolean,r):"",n.visibility?getBreakpointVisibilityClassName(e,n.visibility,r):"")},generateClassNames=function(e,n){return"".concat(n.boolean?getBooleanClassNames(e,n.boolean):"",n.breakpoints?bps.reduce(function(r,t){return r.concat(generateBreakpointClassNames(e,n.breakpoints,t))},""):"")},getBooleanTypes=function(e){return e.reduce(function(e,n){return Object.assign(e,defineProperty({},n,PropTypes.bool))},{})},getBreakpointType=function(e){return defineProperty({},e,PropTypes.number)},getBreakpointGenericType=function(e,n,r){return e.reduce(function(e,t){return Object.assign(e,defineProperty({},getBreakpointPropName(n,t),r))},{})},generateBreakpointTypes=function(e,n){return Object.assign(e.include?getBreakpointType(n):{},e.numeric?getBreakpointGenericType(e.numeric,n,PropTypes.number):{},e.boolean?getBreakpointGenericType(e.boolean,n,PropTypes.bool):{},e.visibility?getBreakpointGenericType(e.visibility,n,PropTypes.bool):{})},generatePropTypes=function(e){return Object.assign(e.boolean?getBooleanTypes(e.boolean):{},bps.reduce(function(n,r){return Object.assign(n,generateBreakpointTypes(e.breakpoints,r))},{}))},propNames={breakpoints:{include:!1,numeric:["up"],boolean:["collapse","uncollapse"],visibility:["hide","show"]},boolean:["collapse","expanded"]},Row=function(e){var n=index("row"+generateClassNames(e,propNames),{"flex-row":e.equalHeightColumns},e.className);return React.createElement("div",{className:n},e.children)};Row.propTypes=generatePropTypes(propNames);var propNames$1={breakpoints:{include:!0,numeric:["pull","push","offset"],boolean:["centered","uncentered"],visibility:["hide","show"]}},Column=function(e){var n=index(e.className,"column"+generateClassNames(e,propNames$1));return React.createElement("div",{className:n},e.children)};Column.propTypes=generatePropTypes(propNames$1);export{breakpoints,Row,Column};
//# sourceMappingURL=index.es.js.map
