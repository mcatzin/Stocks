(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{52:function(t,n,e){"use strict";n.a=function(t){var n,e=[];for(var o in t)n=t[o],e.push([new Date(o).getTime(),parseFloat(n["1. open"]),parseFloat(n["2. high"]),parseFloat(n["3. low"]),parseFloat(n["4. close"])]);return e.reverse()}},55:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"d",function(){return c}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return u});var o=e(8),r=function(t,n){return function(e){fetch("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=".concat(t,"&to_symbol=").concat(n,"&apikey=UFG0SAWDO1QWPBM4")).then(function(t){return t.json()},function(t){return Promise.reject(t)}).then(function(t){e({type:o.a,payload:t})},function(t){e({type:o.a,payload:t})})}},c=function(t,n){return function(e){fetch("https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=".concat(t,"&to_symbol=").concat(n,"&apikey=UFG0SAWDO1QWPBM4")).then(function(t){return t.json()},function(t){return Promise.reject(t)}).then(function(t){e({type:o.c,payload:t})},function(t){e({type:o.c,payload:t})})}},a=function(t,n){return function(e){fetch("https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=".concat(t,"&to_symbol=").concat(n,"&apikey=UFG0SAWDO1QWPBM4")).then(function(t){return t.json()},function(t){return Promise.reject(t)}).then(function(t){e({type:o.b,payload:t})},function(t){e({type:o.b,payload:t})})}},u=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return function(n){Promise.all(e.map(function(e){return fetch("https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=".concat(t,"&to_symbol=").concat(e,"&apikey=UFG0SAWDO1QWPBM4")).then(function(t){return t.json()},function(t){return Promise.reject(t)}).then(function(t){return t},function(t){n({type:o.d,payload:t})})})).then(function(t){n({type:o.d,payload:t})})}}},69:function(t,n,e){"use strict";e.r(n);var o=e(14),r=e.n(o),c=e(15),a=e.n(c),u=e(16),i=e.n(u),f=e(17),s=e.n(f),l=e(11),p=e.n(l),h=e(0),y=e.n(h),m=e(21),d=e(10),w=e.n(d),v=e(53),g=e.n(v),b=e(33),F=e.n(b),R=e(55),E=e(52);function _(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,o=p()(t);if(n){var r=p()(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s()(this,e)}}var j=function(t){i()(e,t);var n=_(e);function e(t){return r()(this,e),n.call(this,t)}return a()(e,[{key:"componentDidMount",value:function(){this.props.getMonthlyForexTimeSeries("USD","EUR")}},{key:"render",value:function(){if(this.props.monthlyExchangeRate){var t={chart:{type:"line"},title:{text:"Monthly Forex of USD-To-EUR"},rangeSelector:{selected:6},series:[{name:"EUR",data:Object(E.a)(this.props.monthlyExchangeRate["Time Series FX (Monthly)"])}]};return y.a.createElement("div",null,y.a.createElement(F.a,{highcharts:g.a,constructorType:"stockChart",options:t}))}return y.a.createElement("h5",null,"Loading...")}}]),e}(h.Component);j.propTypes={monthlyExchangeRate:w.a.object.isRequired};n.default=Object(m.b)(function(t){return{monthlyExchangeRate:t.forexReducer.monthlyExchangeRate}},{getMonthlyForexTimeSeries:R.c})(j)}}]);