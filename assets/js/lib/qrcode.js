let QRCode;!function(){function t(t){this.mode=o.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(let t=0,e=this.data.length;t<e;t++){const e=[],o=this.data.charCodeAt(t);o>65536?(e[0]=240|(1835008&o)>>>18,e[1]=128|(258048&o)>>>12,e[2]=128|(4032&o)>>>6,e[3]=128|63&o):o>2048?(e[0]=224|(61440&o)>>>12,e[1]=128|(4032&o)>>>6,e[2]=128|63&o):o>128?(e[0]=192|(1984&o)>>>6,e[1]=128|63&o):e[0]=o,this.parsedData.push(e)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!==this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(let e=0,o=this.parsedData.length;e<o;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){const o=new t(e);this.dataList.push(o),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,o){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(let t=0;t<this.moduleCount;t++){this.modules[t]=new Array(this.moduleCount);for(let e=0;e<this.moduleCount;e++)this.modules[t][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,o),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,o)},setupPositionProbePattern:function(t,e){for(let o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(let n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=o>=0&&o<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===o||6===o)||o>=2&&o<=4&&n>=2&&n<=4)},getBestMaskPattern:function(){let t=0,e=0;for(let o=0;o<8;o++){this.makeImpl(!0,o);const n=g.getLostPoint(this);(0===o||t>n)&&(t=n,e=o)}return e},createMovieClip:function(t,e,o){const n=t.createEmptyMovieClip(e,o);this.make();for(let t=0;t<this.modules.length;t++){const e=1*t;for(let o=0;o<this.modules[t].length;o++){const i=1*o;this.modules[t][o]&&(n.beginFill(0,100),n.moveTo(i,e),n.lineTo(i+1,e),n.lineTo(i+1,e+1),n.lineTo(i,e+1),n.endFill())}}return n},setupTimingPattern:function(){for(let t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(let t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){const t=g.getPatternPosition(this.typeNumber);for(let e=0;e<t.length;e++)for(let o=0;o<t.length;o++){const n=t[e],i=t[o];if(null==this.modules[n][i])for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++)this.modules[n+t][i+e]=-2===t||2===t||-2===e||2===e||0===t&&0===e}},setupTypeNumber:function(t){const e=g.getBCHTypeNumber(this.typeNumber);for(var o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n}for(o=0;o<18;o++){n=!t&&1==(e>>o&1);this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){const o=this.errorCorrectLevel<<3|e,n=g.getBCHTypeInfo(o);for(var i=0;i<15;i++){var r=!t&&1==(n>>i&1);i<6?this.modules[i][8]=r:i<8?this.modules[i+1][8]=r:this.modules[this.moduleCount-15+i][8]=r}for(i=0;i<15;i++){r=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=r:i<9?this.modules[8][15-i-1+1]=r:this.modules[8][15-i-1]=r}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){let o=-1,n=this.moduleCount-1,i=7,r=0;for(let s=this.moduleCount-1;s>0;s-=2)for(6===s&&s--;;){for(let o=0;o<2;o++)if(null==this.modules[n][s-o]){let a=!1;r<t.length&&(a=1==(t[r]>>>i&1));g.getMask(e,n,s-o)&&(a=!a),this.modules[n][s-o]=a,i--,-1===i&&(r++,i=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,o,n){const i=m.getRSBlocks(t,o),r=new _;for(var s=0;s<n.length;s++){const e=n[s];r.put(e.mode,4),r.put(e.getLength(),g.getLengthInBits(e.mode,t)),e.write(r)}let a=0;for(s=0;s<i.length;s++)a+=i[s].dataCount;if(r.getLengthInBits()>8*a)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*a+")");for(r.getLengthInBits()+4<=8*a&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*a||(r.put(e.PAD0,8),r.getLengthInBits()>=8*a));)r.put(e.PAD1,8);return e.createBytes(r,i)},e.createBytes=function(t,e){let o=0,n=0,i=0;const r=new Array(e.length),s=new Array(e.length);for(var a=0;a<e.length;a++){const l=e[a].dataCount,u=e[a].totalCount-l;n=Math.max(n,l),i=Math.max(i,u),r[a]=new Array(l);for(var h=0;h<r[a].length;h++)r[a][h]=255&t.buffer[h+o];o+=l;const c=g.getErrorCorrectPolynomial(u),f=new p(r[a],c.getLength()-1).mod(c);s[a]=new Array(c.getLength()-1);for(h=0;h<s[a].length;h++){const t=h+f.getLength()-s[a].length;s[a][h]=t>=0?f.get(t):0}}let l=0;for(h=0;h<e.length;h++)l+=e[h].totalCount;const u=new Array(l);let c=0;for(h=0;h<n;h++)for(a=0;a<e.length;a++)h<r[a].length&&(u[c++]=r[a][h]);for(h=0;h<i;h++)for(a=0;a<e.length;a++)h<s[a].length&&(u[c++]=s[a][h]);return u};var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8};const n={L:1,M:0,Q:3,H:2},i=0,r=1,s=2,a=3,h=4,l=5,u=6,c=7;for(var g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){let e=t<<10;for(;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){let e=t<<12;for(;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){let e=0;for(;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case i:return(e+o)%2==0;case r:return e%2==0;case s:return o%3==0;case a:return(e+o)%3==0;case h:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case l:return e*o%2+e*o%3==0;case u:return(e*o%2+e*o%3)%2==0;case c:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){let e=new p([1],0);for(let o=0;o<t;o++)e=e.multiply(new p([1,f.gexp(o)],0));return e},getLengthInBits:function(t,e){if(e>=1&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){const e=t.getModuleCount();let o=0;for(var n=0;n<e;n++)for(var i=0;i<e;i++){let r=0;const s=t.isDark(n,i);for(let o=-1;o<=1;o++)if(!(n+o<0||e<=n+o))for(let a=-1;a<=1;a++)i+a<0||e<=i+a||0==o&&0==a||s==t.isDark(n+o,i+a)&&r++;r>5&&(o+=3+r-5)}for(n=0;n<e-1;n++)for(i=0;i<e-1;i++){let e=0;t.isDark(n,i)&&e++,t.isDark(n+1,i)&&e++,t.isDark(n,i+1)&&e++,t.isDark(n+1,i+1)&&e++,0!=e&&4!=e||(o+=3)}for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)&&(o+=40);for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)&&(o+=40);let r=0;for(i=0;i<e;i++)for(n=0;n<e;n++)t.isDark(n,i)&&r++;return o+=10*(Math.abs(100*r/e/e-50)/5),o}},f={glog:function(t){if(t<1)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},d=0;d<8;d++)f.EXP_TABLE[d]=1<<d;for(d=8;d<256;d++)f.EXP_TABLE[d]=f.EXP_TABLE[d-4]^f.EXP_TABLE[d-5]^f.EXP_TABLE[d-6]^f.EXP_TABLE[d-8];for(d=0;d<255;d++)f.LOG_TABLE[f.EXP_TABLE[d]]=d;function p(t,e){if(null==t.length)throw new Error(t.length+"/"+e);let o=0;for(;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(let e=0;e<t.length-o;e++)this.num[e]=t[e+o]}function m(t,e){this.totalCount=t,this.dataCount=e}function _(){this.buffer=[],this.length=0}p.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){const e=new Array(this.getLength()+t.getLength()-1);for(let o=0;o<this.getLength();o++)for(let n=0;n<t.getLength();n++)e[o+n]^=f.gexp(f.glog(this.get(o))+f.glog(t.get(n)));return new p(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;const e=f.glog(this.get(0))-f.glog(t.get(0)),o=new Array(this.getLength());for(var n=0;n<this.getLength();n++)o[n]=this.get(n);for(n=0;n<t.getLength();n++)o[n]^=f.gexp(f.glog(t.get(n))+e);return new p(o,0).mod(t)}},m.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m.getRSBlocks=function(t,e){const o=m.getRsBlockTable(t,e);if(null==o)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);const n=o.length/3,i=[];for(let t=0;t<n;t++){const e=o[3*t+0],n=o[3*t+1],r=o[3*t+2];for(let t=0;t<e;t++)i.push(new m(n,r))}return i},m.getRsBlockTable=function(t,e){switch(e){case n.L:return m.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return m.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return m.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return m.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},_.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let o=0;o<e;o++)this.putBit(1==(t>>>e-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};const C=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function w(){let t=!1;const e=navigator.userAgent;if(/android/i.test(e)){t=!0;const o=e.toString().match(/android ([0-9]\.[0-9])/i);o&&o[1]&&(t=parseFloat(o[1]))}return t}const D=function(){const t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){const e=this._htOption,o=this._el,n=t.getModuleCount();Math.floor(e.width/n),Math.floor(e.height/n);function i(t,e){const o=document.createElementNS("http://www.w3.org/2000/svg",t);for(const t in e)e.hasOwnProperty(t)&&o.setAttribute(t,e[t]);return o}this.clear();const r=i("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:e.colorLight});r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(r),r.appendChild(i("rect",{fill:e.colorLight,width:"100%",height:"100%"})),r.appendChild(i("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(let e=0;e<n;e++)for(let o=0;o<n;o++)if(t.isDark(e,o)){const t=i("use",{x:String(o),y:String(e)});t.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),r.appendChild(t)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}();let A="svg"===document.documentElement.tagName.toLowerCase()?D:"undefined"==typeof CanvasRenderingContext2D?function(){const t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){const e=this._htOption,o=this._el,n=t.getModuleCount(),i=Math.floor(e.width/n),r=Math.floor(e.height/n),s=['<table style="border:0;border-collapse:collapse;">'];for(let o=0;o<n;o++){s.push("<tr>");for(let a=0;a<n;a++)s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+i+"px;height:"+r+"px;background-color:"+(t.isDark(o,a)?e.colorDark:e.colorLight)+';"></td>');s.push("</tr>")}s.push("</table>"),o.innerHTML=s.join("");const a=o.childNodes[0],h=(e.width-a.offsetWidth)/2,l=(e.height-a.offsetHeight)/2;h>0&&l>0&&(a.style.margin=l+"px "+h+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){const t=1/window.devicePixelRatio,e=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(o,n,i,r,s,a,h,l,u){if("nodeName"in o&&/img/i.test(o.nodeName))for(let e=arguments.length-1;e>=1;e--)arguments[e]=arguments[e]*t;else void 0===l&&(arguments[1]*=t,arguments[2]*=t,arguments[3]*=t,arguments[4]*=t);e.apply(this,arguments)}}function e(t,e){const o=this;if(o._fFail=e,o._fSuccess=t,null===o._bSupportDataURI){const t=document.createElement("img"),e=function(){o._bSupportDataURI=!1,o._fFail&&o._fFail.call(o)},n=function(){o._bSupportDataURI=!0,o._fSuccess&&o._fSuccess.call(o)};t.onabort=e,t.onerror=e,t.onload=n,t.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}else!0===o._bSupportDataURI&&o._fSuccess?o._fSuccess.call(o):!1===o._bSupportDataURI&&o._fFail&&o._fFail.call(o)}const o=function(t,e){this._bIsPainted=!1,this._android=w(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(t){const e=this._elImage,o=this._oContext,n=this._htOption,i=t.getModuleCount(),r=n.width/i,s=n.height/i,a=Math.round(r),h=Math.round(s);e.style.display="none",this.clear();for(let e=0;e<i;e++)for(let l=0;l<i;l++){const i=t.isDark(e,l),u=l*r,c=e*s;o.strokeStyle=i?n.colorDark:n.colorLight,o.lineWidth=1,o.fillStyle=i?n.colorDark:n.colorLight,o.fillRect(u,c,r,s),o.strokeRect(Math.floor(u)+.5,Math.floor(c)+.5,a,h),o.strokeRect(Math.ceil(u)-.5,Math.ceil(c)-.5,a,h)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}();function L(t,e){let o=1;const i=function(t){const e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t);for(let t=0,r=C.length;t<=r;t++){let r=0;switch(e){case n.L:r=C[t][0];break;case n.M:r=C[t][1];break;case n.Q:r=C[t][2];break;case n.H:r=C[t][3]}if(i<=r)break;o++}if(o>C.length)throw new Error("Too long data");return o}QRCode=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.H},"string"==typeof e&&(e={text:e}),e)for(const t in e)this._htOption[t]=e[t];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(A=D),this._android=w(),this._el=t,this._oQRCode=null,this._oDrawing=new A(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(t){this._oQRCode=new e(L(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=n}();