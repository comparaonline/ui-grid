function createCommonjsModule(e,n){return n={exports:{}},e(n,n.exports),n.exports}function makeEmptyFunction(e){return function(){return e}}function invariant(e,n,l,o,r,i,a,t){if(validateFormat(n),!e){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[l,o,r,i,a,t],m=0;(s=new Error(n.replace(/%s/g,function(){return u[m++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}function createClassName(){return index$1.apply(void 0,arguments)}function generalClassNames(e){return{"show-for-medium":e.showFor===Breakpoints.MEDIUM,"show-for-large":e.showFor===Breakpoints.LARGE,"show-for-small-only":e.showOnlyFor===Breakpoints.SMALL,"show-for-medium-only":e.showOnlyFor===Breakpoints.MEDIUM,"show-for-large-only":e.showOnlyFor===Breakpoints.LARGE,"hide-for-medium":e.hideFor===Breakpoints.MEDIUM,"hide-for-large":e.hideFor===Breakpoints.LARGE,"hide-for-small-only":e.hideOnlyFor===Breakpoints.SMALL,"hide-for-medium-only":e.hideOnlyFor===Breakpoints.MEDIUM,"hide-for-large-only":e.hideOnlyFor===Breakpoints.LARGE,hide:e.isHidden,invisible:e.isInvisible,"show-for-landscape":e.showForLandscape,"show-for-portrait":e.showForPortrait,"show-for-sr":e.showForSr,"show-on-focus":e.showOnFocus,clearfix:e.isClearfix,"float-left":e.float===FloatTypes.LEFT,"float-center":e.float===FloatTypes.CENTER,"float-right":e.float===FloatTypes.RIGHT}}function objectKeys(e){return Object.keys(e)}function objectValues(e){var n=[];for(var l in e)e.hasOwnProperty(l)&&n.push(e[l]);return n}function removeProps(e,n){var l={};for(var o in e)e.hasOwnProperty(o)&&-1===n.indexOf(o)&&(l[o]=e[o]);return l}function isDefined(e){return void 0!==e}import React from"react";var breakpoints={"bp-small":"0","bp-medium":"200px","bp-large":"1024px","bp-xlarge":"1170px","bp-xxlarge":"1306px"},emptyFunction=function(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(e){return e};var emptyFunction_1=emptyFunction,validateFormat=function(e){},invariant_1=invariant,ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,factoryWithThrowingShims=function(){function e(e,n,l,o,r,i){i!==ReactPropTypesSecret_1&&invariant_1(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return e}e.isRequired=e;var l={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n};return l.checkPropTypes=emptyFunction_1,l.PropTypes=l,l},index=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),_extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o])}return e},Breakpoints={SMALL:"small",MEDIUM:"medium",LARGE:"large",XLARGE:"xlarge",XXLARGE:"xxlarge"},BadgeColors={INFO:"info",SECONDARY:"secondary",SUCCESS:"success",WARNING:"warning",ALERT:"alert"},ButtonColors={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",ALERT:"alert",WARNING:"warning"},ButtonGroupColors={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",ALERT:"alert",WARNING:"warning"},CalloutColors={PRIMARY:"primary",SECONDARY:"secondary",SUCCESS:"success",WARNING:"warning",ALERT:"alert"},LabelColors={INFO:"info",SECONDARY:"secondary",SUCCESS:"success",WARNING:"warning",ALERT:"alert"},ProgressColors={SECONDARY:"secondary",SUCCESS:"success",WARNING:"warning",ALERT:"alert"},Colors=_extends({},BadgeColors,ButtonColors,ButtonGroupColors,CalloutColors,LabelColors,ProgressColors),CalloutSizes={SMALL:"small",LARGE:"large"},ButtonSizes={TINY:"tiny",SMALL:"small",LARGE:"large"},ButtonGroupSizes={TINY:"tiny",SMALL:"small",LARGE:"large"},SwitchSizes={TINY:"tiny",SMALL:"small",LARGE:"large"},Sizes=_extends({},ButtonSizes,ButtonGroupSizes,CalloutSizes,SwitchSizes),HorizontalAlignments={CENTER:"center",RIGHT:"right",JUSTIFY:"justify",SPACED:"spaced"},VerticalAlignments={TOP:"top",MIDDLE:"middle",BOTTOM:"bottom",STRETCH:"stretch"},MenuAlignments={RIGHT:"right",CENTER:"center"},Alignments=_extends({},HorizontalAlignments,VerticalAlignments,MenuAlignments),FloatTypes={LEFT:"left",CENTER:"center",RIGHT:"right"},SwitchInputTypes={CHECKBOX:"checkbox",RADIO:"radio"},InputTypes=_extends({},SwitchInputTypes),index$1=createCommonjsModule(function(e){!function(){"use strict";function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===i)for(var a in r)l.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var l={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),GeneralPropTypes={showFor:index.oneOf([Breakpoints.MEDIUM,Breakpoints.LARGE]),showOnlyFor:index.oneOf(objectValues(Breakpoints)),hideFor:index.oneOf([Breakpoints.MEDIUM,Breakpoints.LARGE]),hideOnlyFor:index.oneOf(objectValues(Breakpoints)),isHidden:index.bool,isInvisible:index.bool,showForLandscape:index.bool,showForPortrait:index.bool,showForSr:index.bool,showOnFocus:index.bool,isClearfix:index.bool,float:index.oneOf(objectValues(FloatTypes))},Row=function e(n){var l=createClassName(n.noDefaultClassName?null:"row",n.className,isDefined(n.upOnSmall)?"small-up-"+n.upOnSmall:null,isDefined(n.upOnMedium)?"medium-up-"+n.upOnMedium:null,isDefined(n.upOnLarge)?"large-up-"+n.upOnLarge:null,{"align-right":n.horizontalAlignment===HorizontalAlignments.RIGHT,"align-center":n.horizontalAlignment===HorizontalAlignments.CENTER,"align-justify":n.horizontalAlignment===HorizontalAlignments.JUSTIFY,"align-spaced":n.horizontalAlignment===HorizontalAlignments.SPACED,"align-top":n.verticalAlignment===VerticalAlignments.TOP,"align-middle":n.verticalAlignment===VerticalAlignments.MIDDLE,"align-bottom":n.verticalAlignment===VerticalAlignments.BOTTOM,"align-stretch":n.verticalAlignment===VerticalAlignments.STRETCH,"small-unstack":n.unstackOnSmall,"medium-unstack":n.unstackOnMedium,"large-unstack":n.unstackOnLarge,"small-collapse":n.collapseOnSmall,"medium-collapse":n.collapseOnMedium,"large-collapse":n.collapseOnLarge,"small-uncollapse":n.uncollapseOnSmall,"medium-uncollapse":n.uncollapseOnMedium,"large-uncollapse":n.uncollapseOnLarge,collapse:n.isCollapsed,expanded:n.isExpanded,column:n.isColumn},generalClassNames(n)),o=removeProps(n,objectKeys(e.propTypes));return React.createElement("div",_extends({},o,{className:l}))};Row.propTypes=_extends({},GeneralPropTypes,{upOnSmall:index.number,upOnMedium:index.number,upOnLarge:index.number,horizontalAlignment:index.string,verticalAlignment:index.string,unstackOnSmall:index.bool,unstackOnMedium:index.bool,unstackOnLarge:index.bool,collapseOnSmall:index.bool,collapseOnMedium:index.bool,collapseOnLarge:index.bool,uncollapseOnSmall:index.bool,uncollapseOnMedium:index.bool,uncollapseOnLarge:index.bool,isCollapsed:index.bool,isExpanded:index.bool,isColumn:index.bool});var Column=function e(n){var l=n.isColumn?"column":"columns",o=createClassName(n.noDefaultClassName?null:l,n.className,n.small?"small-"+n.small:null,n.medium?"medium-"+n.medium:null,n.large?"large-"+n.large:null,isDefined(n.offsetOnSmall)?"small-offset-"+n.offsetOnSmall:null,isDefined(n.offsetOnMedium)?"medium-offset-"+n.offsetOnMedium:null,isDefined(n.offsetOnLarge)?"large-offset-"+n.offsetOnLarge:null,isDefined(n.pushOnSmall)?"small-push-"+n.pushOnSmall:null,isDefined(n.pushOnMedium)?"medium-push-"+n.pushOnMedium:null,isDefined(n.pushOnLarge)?"large-push-"+n.pushOnLarge:null,isDefined(n.pullOnSmall)?"small-pull-"+n.pullOnSmall:null,isDefined(n.pullOnMedium)?"medium-pull-"+n.pullOnMedium:null,isDefined(n.pullOnLarge)?"large-pull-"+n.pullOnLarge:null,isDefined(n.orderOnSmall)?"small-order-"+n.orderOnSmall:null,isDefined(n.orderOnMedium)?"medium-order-"+n.orderOnMedium:null,isDefined(n.orderOnLarge)?"large-order-"+n.orderOnLarge:null,{"small-centered":n.centerOnSmall,"medium-centered":n.centerOnMedium,"large-centered":n.centerOnLarge,"small-uncentered":n.uncenterOnSmall,"medium-uncentered":n.uncenterOnMedium,"large-uncentered":n.uncenterOnLarge,"small-expand":n.expandOnSmall,"medium-expand":n.expandOnMedium,"large-expand":n.expandOnLarge,shrink:n.isShrunk,end:n.isLast},generalClassNames(n)),r=removeProps(n,objectKeys(e.propTypes));return React.createElement("div",_extends({},r,{className:o}))};Column.propTypes=_extends({},GeneralPropTypes,{small:index.number,medium:index.number,large:index.number,offsetOnSmall:index.number,offsetOnMedium:index.number,offsetOnLarge:index.number,pushOnSmall:index.number,pushOnMedium:index.number,pushOnLarge:index.number,pullOnSmall:index.number,pullOnMedium:index.number,pullOnLarge:index.number,orderOnSmall:index.number,orderOnMedium:index.number,orderOnLarge:index.number,centerOnSmall:index.bool,centerOnMedium:index.bool,centerOnLarge:index.bool,uncenterOnSmall:index.bool,uncenterOnMedium:index.bool,uncenterOnLarge:index.bool,expandOnSmall:index.bool,expandOnMedium:index.bool,expandOnLarge:index.bool,isShrunk:index.bool,isLast:index.bool});export{breakpoints,Row,Column};
//# sourceMappingURL=index.es.js.map