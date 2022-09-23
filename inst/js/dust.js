/*! For license information please see dust.js.LICENSE.txt */
var dust;(()=>{var t={689:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.binomial=void 0,e.binomial=function(t,e,r){if(0===e||0===r)return 0;if(1===r)return e;const i=r<=.5?r:1-r,a=e*i>=10?function(t,e,r){const o=Math.sqrt(e*r*(1-r)),i=1.15+2.53*o,a=.0248*i-.0873+.01*r,s=e*r+.5,u=.92-4.2/i,c=r/(1-r),l=(2.83+5.1/i)*o,f=Math.floor((e+1)*r);let p;for(;;){const r=t.random()-.5;let o=t.random();const h=.5-Math.abs(r),d=Math.floor((2*a/h+i)*r+s);if(h>=.07&&o<=u){p=d;break}if(!(d<0||d>e)&&(o=Math.log(o*l/(a/(h*h)+i)),o<=(f+.5)*Math.log((f+1)/(c*(e-f+1)))+(e+1)*Math.log((e-f+1)/(e-d+1))+(d+.5)*Math.log(c*(e-d+1)/(d+1))+n(f)+n(e-f)-n(d)-n(e-d))){p=d;break}}return p}(t,e,i):function(t,e,r){let n=-1;do{n=o(t.random(),e,r)}while(n<0);return n}(t,e,i);return r<=.5?a:e-a};const r=[.08106146679532733,.04134069595540946,.02767792568499805,.02079067210376495,.016644691189821703,.013876128823071987,.011896709945892425,.010411265261971892,.00925546218270945,.008330563433359472];function n(t){return t<r.length?r[t]:function(t){const e=(t+1)*(t+1);return(1/12-(1/360-1/1260/e)/e)/(t+1)}(t)}function o(t,e,r){const n=1-r,o=r/n,i=o*(e+1);let a=Math.pow(n,e),s=0,u=a;for(;t>=a;)t-=a,s++,a*=i/s-o,u=a;return s}},386:(t,e)=>{"use strict";function r(t){return-Math.log(t.random())}Object.defineProperty(e,"__esModule",{value:!0}),e.exponential=e.randomExponential=void 0,e.randomExponential=r,e.exponential=function(t,e){return r(t)/e}},532:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.uniform=e.randomUniform=e.randomNormal=e.normal=e.randomExponential=e.exponential=e.binomial=e.RngStateReplay=e.RngStateObserved=e.RngStateBuiltin=e.RngState=e.Random=void 0;var n=r(929);Object.defineProperty(e,"Random",{enumerable:!0,get:function(){return n.Random}});var o=r(726);Object.defineProperty(e,"RngState",{enumerable:!0,get:function(){return o.RngState}});var i=r(35);Object.defineProperty(e,"RngStateBuiltin",{enumerable:!0,get:function(){return i.RngStateBuiltin}});var a=r(301);Object.defineProperty(e,"RngStateObserved",{enumerable:!0,get:function(){return a.RngStateObserved}});var s=r(843);Object.defineProperty(e,"RngStateReplay",{enumerable:!0,get:function(){return s.RngStateReplay}});var u=r(689);Object.defineProperty(e,"binomial",{enumerable:!0,get:function(){return u.binomial}});var c=r(386);Object.defineProperty(e,"exponential",{enumerable:!0,get:function(){return c.exponential}}),Object.defineProperty(e,"randomExponential",{enumerable:!0,get:function(){return c.randomExponential}});var l=r(638);Object.defineProperty(e,"normal",{enumerable:!0,get:function(){return l.normal}}),Object.defineProperty(e,"randomNormal",{enumerable:!0,get:function(){return l.randomNormal}});var f=r(390);Object.defineProperty(e,"randomUniform",{enumerable:!0,get:function(){return f.randomUniform}}),Object.defineProperty(e,"uniform",{enumerable:!0,get:function(){return f.uniform}})},638:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.normal=e.randomNormal=void 0;const r=2*Math.PI;function n(t){let e=0,n=0;do{e=t.random(),n=t.random()}while(e<Number.EPSILON);return Math.sqrt(-2*Math.log(e))*Math.cos(r*n)}e.randomNormal=n,e.normal=function(t,e,r){return e+n(t)*r}},789:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.poisson=void 0;const n=r(788);e.poisson=function(t,e){return e<10?function(t,e){let r=0;const n=Math.exp(-e);let i=1;for(;i*=t.random(),!(i<=n&&r<=o);)r++;return r}(t,e):function(t,e){let r=0;const o=Math.log(e),i=.931+2.53*Math.sqrt(e),a=.02483*i-.059,s=1.1239+1.1328/(i-3.4);for(;;){let u=t.random();u-=.5;const c=t.random(),l=.5-Math.abs(u),f=Math.floor((2*a/l+i)*u+e+.43);if(l>=.07&&c<=.9277-3.6224/(i-2)){r=f;break}if(!(f<0||l<.013&&c>l)&&Math.log(c*s/(a/(l*l)+i))<=f*o-e-(0,n.lngamma)(f+1)){r=f;break}}return r}(t,e)};const o=2**31-1},929:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Random=void 0;const n=r(689),o=r(386),i=r(638),a=r(789),s=r(390);e.Random=class{state;constructor(t){this.state=t}randomExponential(){return(0,o.randomExponential)(this.state)}randomNormal(){return(0,i.randomNormal)(this.state)}randomUniform(){return(0,s.randomUniform)(this.state)}binomial(t,e){return(0,n.binomial)(this.state,t,e)}exponential(t){return(0,o.exponential)(this.state,t)}normal(t,e){return(0,i.normal)(this.state,t,e)}poisson(t){return(0,a.poisson)(this.state,t)}uniform(t,e){return(0,s.uniform)(this.state,t,e)}}},35:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RngStateBuiltin=void 0;const n=r(726);class o extends n.RngState{constructor(){super()}random(){return Math.random()}}e.RngStateBuiltin=o},301:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RngStateObserved=void 0;const n=r(726),o=r(35),i=r(843);class a extends n.RngState{_state;_values;constructor(t){super(),void 0===t&&(t=new o.RngStateBuiltin),this._state=t,this._values=[]}random(){const t=this._state.random();return this._values.push(t),t}replay(){return new i.RngStateReplay(this._values)}length(){return this._values.length}values(){return this._values}}e.RngStateObserved=a},843:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RngStateReplay=void 0;const n=r(726);class o extends n.RngState{_i;_values;constructor(t){super(),this._i=0,this._values=t}random(){const t=this._values[this._i++];if(this._i>this._values.length)throw Error("Exhausted stream");return t}length(){return this._values.length-this._i}}e.RngStateReplay=o},726:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RngState=void 0,e.RngState=class{setSeed(t){throw Error("This generator cannot be seeded (really!)")}}},390:(t,e)=>{"use strict";function r(t){return t.random()}Object.defineProperty(e,"__esModule",{value:!0}),e.uniform=e.randomUniform=void 0,e.randomUniform=r,e.uniform=function(t,e,n){return r(t)*(n-e)+e}},788:(t,e)=>{var r,n=function(){"use strict";var t=new DataView(new ArrayBuffer(8)),e=function(e,r,n){var o,i,a,s=-.16666666666666632,u=0;return t.setFloat64(0,e),u=t.getInt32(0),(u&=2147483647)<1044381696&&0==(0|e)?e:(a=(o=e*e)*e,i=.00833333333332249+o*(o*(27557313707070068e-22+o*(1.58969099521155e-10*o-2.5050760253406863e-8))-.0001984126982985795),0===n?e+a*(s+o*i):e-(o*(.5*r-a*i)-r-a*s))},r=function(e,r){var n,o,i,a=0;return t.setFloat64(0,e),a=t.getInt32(0),(a&=2147483647)<1044381696&&0==(0|e)?1:(o=(n=e*e)*(.0416666666666666+n*(n*(2480158728947673e-20+n*(n*(2.087572321298175e-9+-11359647557788195e-27*n)-2.7557314351390663e-7))-.001388888888887411)),a<1070805811?1-(.5*n-(n*o-e*r)):(a>1072234496?i=.28125:(t.setFloat64(0,i),t.setUint32(0,a-2097152),t.setUint32(4,0),i=t.getFloat64(0)),1-i-(.5*n-i-(n*o-e*r))))},n=function(n){var o,i,a,s,u,c,l,f,p=1.4616321449683622,h=0,d=0;if(t.setFloat64(0,n),c=t.getInt32(0),l=t.getInt32(4),(f=2147483647&c)>=2146435072)return n*n;if(0==(f|l))return 1/0;if(f<999292928)return c<0?-Math.log(-n):-Math.log(n);if(c<0){if(f>=1127219200)return 1/0;if(o=function(n){var o,i=0,a=0;if(t.setFloat64(0,n),a=t.getInt32(0),(a&=2147483647)<1070596096)return e(Math.PI*n,0,0);switch(o=-n,Math.floor(o)!=o?i=4*(o=2*((o*=.5)-Math.floor(o)))|0:a>=1128267776?(o=0,i=0):(i=t.getInt32(4),o=i&=1,i<<=2),i){case 0:o=e(Math.PI*o,0,0);break;case 1:case 2:o=r(Math.PI*(.5-o),0);break;case 3:case 4:o=e(Math.PI*(1-o),0,0);break;case 5:case 6:o=-r(Math.PI*(o-1.5),0);break;default:o=e(Math.PI*(o-2),0,0)}return-o}(n),0==o)return 1/0;h=Math.log(3.141592653589793/Math.abs(o*n)),n=-n}if(0==(f-1072693248|l)||0==(f-1073741824|l))s=0;else if(f<1073741824)switch(f<=1072483532?(s=-Math.log(n),f>=1072130372?(i=1-n,d=0):f>=1070442081?(i=n-(p-1),d=1):(i=n,d=2)):(s=0,f>=1073460419?(i=2-n,d=0):f>=1072936132?(i=n-p,d=1):(i=n-1,d=2)),d){case 0:s+=i*(.07721566490153287+(a=i*i)*(.06735230105312927+a*(.007385550860814029+a*(.0011927076318336207+a*(.00022086279071390839+25214456545125733e-21*a)))))+a*(.3224670334241136+a*(.020580808432516733+a*(.0028905138367341563+a*(.0005100697921535113+a*(.00010801156724758394+44864094961891516e-21*a)))))-.5*i;break;case 1:s+=(a=i*i)*(.48383612272381005+(u=a*i)*(u*(.006100538702462913+u*(.00031563207090362595*u-.0014034646998923284))-.032788541075985965))-(-3638676997039505e-33-u*(u*(.01797067508118204+u*(u*(.000881081882437654+-.00031275416837512086*u)-.0036845201678113826))-.1475877229945939+i*(.06462494023913339+u*(u*(.0022596478090061247+u*(.0003355291926355191*u-.0005385953053567405))-.010314224129834144))))-.12148629053584961;break;case 2:s+=-.5*i+i*(i*(.6328270640250934+i*(1.4549225013723477+i*(.9777175279633727+i*(.22896372806469245+.013381091853678766*i))))-.07721566490153287)/(1+i*(2.4559779371304113+i*(2.128489763798934+i*(.7692851504566728+i*(.10422264559336913+.003217092422824239*i)))))}else if(f<1075838976)switch(o=0,s=.5*(i=n-(d=0|n))+i*(i*(.21498241596060885+i*(.325778796408931+i*(.14635047265246445+i*(.02664227030336386+i*(.0018402845140733772+3194753265841009e-20*i)))))-.07721566490153287)/(1+i*(1.3920053346762105+i*(.7219355475671381+i*(.17193386563280308+i*(.01864591917156529+i*(.0007779424963818936+7326684307446256e-21*i)))))),a=1,d){case 7:a*=i+6;case 6:a*=i+5;case 5:a*=i+4;case 4:a*=i+3;case 3:a*=i+2,s+=Math.log(a)}else s=f<1133510656?(n-.5)*((o=Math.log(n))-1)+(u=.4189385332046727+(a=1/n)*(.08333333333333297+(i=a*a)*(i*(.0007936505586430196+i*(i*(.0008363399189962821+-.0016309293409657527*i)-.00059518755745034))-.0027777777772877554))):n*(Math.log(n)-1);return c<0&&(s=h-s),s};return{lngamma:function(t){return n(t)},gamma:function(t){return Math.exp(n(t))}}}();void 0!==t.exports?t.exports=n:void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)},907:t=>{"use strict";t.exports=function(t){for(var e=new Array(t),r=0;r<t;++r)e[r]=r;return e}},738:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},861:(t,e,r)=>{var n=r(907),o=r(738),i="undefined"!=typeof Float64Array;function a(t,e){return t[0]-e[0]}function s(){var t,e=this.stride,r=new Array(e.length);for(t=0;t<r.length;++t)r[t]=[Math.abs(e[t]),t];r.sort(a);var n=new Array(r.length);for(t=0;t<n.length;++t)n[t]=r[t][1];return n}function u(t,e){var r=["View",e,"d",t].join("");e<0&&(r="View_Nil"+t);var o="generic"===t;if(-1===e){var i="function "+r+"(a){this.data=a;};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+r+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+r+"(a){return new "+r+"(a);}";return new Function(i)()}if(0===e)return i="function "+r+"(a,d) {this.data = a;this.offset = d};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+r+"_copy() {return new "+r+"(this.data,this.offset)};proto.pick=function "+r+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+r+"_get(){return "+(o?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+r+"_set(v){return "+(o?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+r+"(a,b,c,d){return new "+r+"(a,d)}",new Function("TrivialArray",i)(c[t][0]);i=["'use strict'"];var a=n(e),u=a.map((function(t){return"i"+t})),l="this.offset+"+a.map((function(t){return"this.stride["+t+"]*i"+t})).join("+"),f=a.map((function(t){return"b"+t})).join(","),p=a.map((function(t){return"c"+t})).join(",");i.push("function "+r+"(a,"+f+","+p+",d){this.data=a","this.shape=["+f+"]","this.stride=["+p+"]","this.offset=d|0}","var proto="+r+".prototype","proto.dtype='"+t+"'","proto.dimension="+e),i.push("Object.defineProperty(proto,'size',{get:function "+r+"_size(){return "+a.map((function(t){return"this.shape["+t+"]"})).join("*"),"}})"),1===e?i.push("proto.order=[0]"):(i.push("Object.defineProperty(proto,'order',{get:"),e<4?(i.push("function "+r+"_order(){"),2===e?i.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):3===e&&i.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):i.push("ORDER})")),i.push("proto.set=function "+r+"_set("+u.join(",")+",v){"),o?i.push("return this.data.set("+l+",v)}"):i.push("return this.data["+l+"]=v}"),i.push("proto.get=function "+r+"_get("+u.join(",")+"){"),o?i.push("return this.data.get("+l+")}"):i.push("return this.data["+l+"]}"),i.push("proto.index=function "+r+"_index(",u.join(),"){return "+l+"}"),i.push("proto.hi=function "+r+"_hi("+u.join(",")+"){return new "+r+"(this.data,"+a.map((function(t){return["(typeof i",t,"!=='number'||i",t,"<0)?this.shape[",t,"]:i",t,"|0"].join("")})).join(",")+","+a.map((function(t){return"this.stride["+t+"]"})).join(",")+",this.offset)}");var h=a.map((function(t){return"a"+t+"=this.shape["+t+"]"})),d=a.map((function(t){return"c"+t+"=this.stride["+t+"]"}));i.push("proto.lo=function "+r+"_lo("+u.join(",")+"){var b=this.offset,d=0,"+h.join(",")+","+d.join(","));for(var v=0;v<e;++v)i.push("if(typeof i"+v+"==='number'&&i"+v+">=0){d=i"+v+"|0;b+=c"+v+"*d;a"+v+"-=d}");for(i.push("return new "+r+"(this.data,"+a.map((function(t){return"a"+t})).join(",")+","+a.map((function(t){return"c"+t})).join(",")+",b)}"),i.push("proto.step=function "+r+"_step("+u.join(",")+"){var "+a.map((function(t){return"a"+t+"=this.shape["+t+"]"})).join(",")+","+a.map((function(t){return"b"+t+"=this.stride["+t+"]"})).join(",")+",c=this.offset,d=0,ceil=Math.ceil"),v=0;v<e;++v)i.push("if(typeof i"+v+"==='number'){d=i"+v+"|0;if(d<0){c+=b"+v+"*(a"+v+"-1);a"+v+"=ceil(-a"+v+"/d)}else{a"+v+"=ceil(a"+v+"/d)}b"+v+"*=d}");i.push("return new "+r+"(this.data,"+a.map((function(t){return"a"+t})).join(",")+","+a.map((function(t){return"b"+t})).join(",")+",c)}");var m=new Array(e),y=new Array(e);for(v=0;v<e;++v)m[v]="a[i"+v+"]",y[v]="b[i"+v+"]";for(i.push("proto.transpose=function "+r+"_transpose("+u+"){"+u.map((function(t,e){return t+"=("+t+"===undefined?"+e+":"+t+"|0)"})).join(";"),"var a=this.shape,b=this.stride;return new "+r+"(this.data,"+m.join(",")+","+y.join(",")+",this.offset)}"),i.push("proto.pick=function "+r+"_pick("+u+"){var a=[],b=[],c=this.offset"),v=0;v<e;++v)i.push("if(typeof i"+v+"==='number'&&i"+v+">=0){c=(c+this.stride["+v+"]*i"+v+")|0}else{a.push(this.shape["+v+"]);b.push(this.stride["+v+"])}");return i.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),i.push("return function construct_"+r+"(data,shape,stride,offset){return new "+r+"(data,"+a.map((function(t){return"shape["+t+"]"})).join(",")+","+a.map((function(t){return"stride["+t+"]"})).join(",")+",offset)}"),new Function("CTOR_LIST","ORDER",i.join("\n"))(c[t],s)}var c={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};t.exports=function(t,e,r,n){if(void 0===t)return(0,c.array[0])([]);"number"==typeof t&&(t=[t]),void 0===e&&(e=[t.length]);var a=e.length;if(void 0===r){r=new Array(a);for(var s=a-1,l=1;s>=0;--s)r[s]=l,l*=e[s]}if(void 0===n)for(n=0,s=0;s<a;++s)r[s]<0&&(n-=(e[s]-1)*r[s]);for(var f=function(t){if(o(t))return"buffer";if(i)switch(Object.prototype.toString.call(t)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(t)?"array":"generic"}(t),p=c[f];p.length<=a+1;)p.push(u(f,p.length-1));return(0,p[a+1])(t,e,r,n)}},653:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.base=void 0;var n=r(763);e.base={pars:n.pars}},133:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dust=void 0;var n=r(532),o=r(653),i=r(217),a=r(367),s=r(177),u=function(){function t(t,e,r,a,s){if(r<=0)throw Error("Expected at least one particle");this._Model=t,this._particles=[],this._random=s||new n.Random(new n.RngStateBuiltin),this._model=new t(o.base,e);for(var u=0;u<r;++u)this._particles.push(new i.Particle(this._model,a))}return t.prototype.nState=function(){return this._particles[0].size},t.prototype.nParticles=function(){return this._particles.length},t.prototype.step=function(){return this._particles[0].step},t.prototype.info=function(){return this._particles[0].info()},t.prototype.setPars=function(t,e){var r=this,n=this.step(),a=(this.nState(),new this._Model(o.base,t));if(a.size()!==this.nState())throw Error("Particle produced unexpected state size");this.forEachParticle((function(t,o){var s=e?void 0:t.state();r._particles[o]=new i.Particle(a,n,s)}))},t.prototype.setStep=function(t){this._particles.forEach((function(e){e.step=t}))},t.prototype.setState=function(t){this.step(),this.checkState(t),this.forEachParticle((function(e,r){e.setState(null===t?null:t[r])}))},t.prototype.run=function(t){var e=this;this._particles.forEach((function(r){return r.run(t,e._random)}))},t.prototype.simulate=function(t,e){for(var r=null===e?this.nState():e.length,n=this.nParticles(),o=t.length,i=(0,s.dustStateTime)(r,n,t),a=function(r){u.run(t[r]),u.forEachParticle((function(t,n){t.copyState(i.viewParticle(n,r),e)}))},u=this,c=0;c<o;++c)a(c);return i},t.prototype.state=function(t){var e=null===t?this.nState():t.length,r=this.nParticles(),n=(0,a.dustState)(e,r);return this.forEachParticle((function(e,r){e.copyState(n.viewParticle(r),t)})),n},t.prototype.reorder=function(t){var e=this,r=this.nParticles();if(t.length!==r)throw Error("Expected index to have length ".concat(r)+" but given ".concat(t.length));this.forEachParticle((function(n,o){var i=t[o];if(i<0||i>=r)throw Error("Expected index to be in [0, ".concat(r-1,"]")+" but given ".concat(i));n.setState(e._particles[i].state(),!0)})),this.forEachParticle((function(t,e){t.swap()}))},t.prototype.model=function(){return this._model},t.prototype.forEachParticle=function(t){this._particles.forEach(t)},t.prototype.checkState=function(t){if(null!==t){if(t.length!==this.nParticles())throw Error("Invalid length state, expected ".concat(this.nParticles())+" but given ".concat(t.length));for(var e=0;e<t.length;++e)if(t[e].length!==this.nState())throw Error("Invalid length state for particle ".concat(e,",")+" expected ".concat(this.nState())+" but given ".concat(t[e].length))}},t}();e.Dust=u},763:(t,e)=>{"use strict";function r(t,e,r,n){var o=t[e];if(void 0===o){if(void 0!==r[e])return;if(null===n)throw Error("Expected a value for '".concat(e,"'"));r[e]=n}else r[e]=o}Object.defineProperty(e,"__esModule",{value:!0}),e.pars=e.setParScalar=void 0,e.setParScalar=r,e.pars={setParScalar:r}},217:function(t,e){"use strict";var r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.Particle=void 0;var n=function(){function t(t,e,n){this._model=t,this.step=e,this.size=t.size(),this._y=void 0===n?t.initial(this.step):r([],n,!0),this._yNext=Array(this.size).fill(0)}return t.prototype.info=function(){return this._model.info()},t.prototype.run=function(t,e){for(;this.step<t;)this._model.update(this.step++,this._y,this._yNext,e),this.swap()},t.prototype.state=function(){return this._y},t.prototype.copyState=function(t,e){var r=this._y;if(null===e)for(var n=0;n<r.length;++n)t.set(n,r[n]);else for(n=0;n<e.length;++n)t.set(n,r[e[n]])},t.prototype.setState=function(t,e){void 0===e&&(e=!1);var r=e?this._yNext:this._y;null===t&&(t=this._model.initial(this.step));for(var n=0;n<t.length;++n)r[n]=t[n]},t.prototype.swap=function(){var t;t=[this._yNext,this._y],this._y=t[0],this._yNext=t[1]},t}();e.Particle=n},586:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.variableNames=e.PkgWrapper=void 0;var n=r(532),o=r(653),i=r(133),a=r(882),s=function(){function t(t,e,r){this.Model=t,this.pars=e,this.random=r||new n.Random(new n.RngStateBuiltin),this.model=new this.Model(o.base,e)}return t.prototype.setUser=function(t,e){this.pars=t,this.model=new this.Model(o.base,t)},t.prototype.initial=function(t){return this.model.initial(t)},t.prototype.update=function(t,e){var r=Array(e.length).fill(0);return this.model.update(t,e,r,this.random),r},t.prototype.getInternal=function(){return this.model.getInternal()},t.prototype.getMetadata=function(){var t=this.model.info();return{info:t,names:u(t),order:t.map((function(t){return t.dim})),size:this.model.size()}},t.prototype.run=function(t,e){var r=t[0],n=new i.Dust(this.Model,this.pars,1,r,this.random);null!==e&&n.setState([e]);var o=n.simulate(t,null);return this.model=n.model(),{info:this.model.info(),y:Array.from(o.state.data)}},t}();function u(t){for(var e=[],r=function(t){var r=t.dim,n=t.name;0===r.length?e.push(n):e.push.apply(e,(0,a.combinations)(r).map((function(t){return"".concat(n,"[").concat(t.join(","),"]")})))},n=0,o=t;n<o.length;n++)r(o[n]);return e}e.PkgWrapper=s,e.variableNames=u},177:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DustStateTime=e.dustStateTime=void 0;var o=n(r(861)),i=r(367);e.dustStateTime=function(t,e,r){var n=r.length,i=(0,o.default)(new Float64Array(t*e*n),[n,e,t]);return new a(i,t,e,r)};var a=function(){function t(t,e,r,n){this.nState=e,this.nParticles=r,this.nSteps=n.length,this.steps=n,this.state=t}return t.prototype.viewTime=function(t){var e=this.state.pick(t,null,null);return new i.DustState(e,this.nState,this.nParticles)},t.prototype.viewParticle=function(t,e){return this.state.pick(e,t,null)},t.prototype.viewState=function(t,e){return this.state.pick(e,null,t)},t.prototype.viewTrace=function(t,e){return this.state.pick(null,e,t)},t.prototype.getParticle=function(t,e){return(0,i.copyVector)(this.viewParticle(t,e))},t.prototype.getState=function(t,e){return(0,i.copyVector)(this.viewState(t,e))},t.prototype.getTrace=function(t,e){return(0,i.copyVector)(this.viewTrace(t,e))},t}();e.DustStateTime=a},367:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.copyVector=e.DustState=e.dustState=void 0;var o=n(r(861));e.dustState=function(t,e){var r=(0,o.default)(new Float64Array(t*e),[e,t]);return new i(r,t,e)};var i=function(){function t(t,e,r){this.nState=e,this.nParticles=r,this.state=t}return t.prototype.viewParticle=function(t){return this.state.pick(t,null)},t.prototype.viewState=function(t){return this.state.pick(null,t)},t.prototype.getParticle=function(t){return a(this.viewParticle(t))},t.prototype.getState=function(t){return a(this.viewState(t))},t.prototype.asMatrix=function(){for(var t=[],e=0;e<this.nParticles;++e)t.push(this.getParticle(e));return t},t}();function a(t){for(var e=t.shape[0],r=Array(e),n=0;n<e;++n)r[n]=t.get(n);return r}e.DustState=i,e.copyVector=a},882:function(t,e){"use strict";var r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};function n(t,e){for(var r=[],n=t;n<=e;++n)r.push(n);return r}function o(t,e){return t[0].map((function(r,n){return e(t.map((function(t){return t[n]})))}))}function i(t){return t.reduce((function(t,e){return t+e}),0)/t.length}Object.defineProperty(e,"__esModule",{value:!0}),e.combinations=e.meanArray=e.mean=e.applyArray=e.isEqualArray=e.rep=e.seq=void 0,e.seq=n,e.rep=function(t,e){return Array(e).fill(t)},e.isEqualArray=function(t,e){return t.every((function(t,r){return t===e[r]}))},e.applyArray=o,e.mean=i,e.meanArray=function(t){return o(t,i)},e.combinations=function t(e){var o=n(1,e[0]);if(e.length>1){for(var i=t(e.slice(1)),a=[],s=0;s<i.length;++s)for(var u=0;u<o.length;++u)a.push(r([o[u]],i[s],!0));return a}return o.map((function(t){return[t]}))}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}var n={};(()=>{"use strict";var t=n;Object.defineProperty(t,"__esModule",{value:!0}),t.DustStateTime=t.dustStateTime=t.DustState=t.dustState=t.PkgWrapper=t.Particle=t.Dust=t.base=void 0;var e=r(653);Object.defineProperty(t,"base",{enumerable:!0,get:function(){return e.base}});var o=r(133);Object.defineProperty(t,"Dust",{enumerable:!0,get:function(){return o.Dust}});var i=r(217);Object.defineProperty(t,"Particle",{enumerable:!0,get:function(){return i.Particle}});var a=r(586);Object.defineProperty(t,"PkgWrapper",{enumerable:!0,get:function(){return a.PkgWrapper}});var s=r(367);Object.defineProperty(t,"dustState",{enumerable:!0,get:function(){return s.dustState}}),Object.defineProperty(t,"DustState",{enumerable:!0,get:function(){return s.DustState}});var u=r(177);Object.defineProperty(t,"dustStateTime",{enumerable:!0,get:function(){return u.dustStateTime}}),Object.defineProperty(t,"DustStateTime",{enumerable:!0,get:function(){return u.DustStateTime}})})(),dust=n})();