(function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t(require('photoswipe'),require('photoswipe/dist/photoswipe-ui-default')):'function'==typeof define&&define.amd?define('NaturalGallery',['photoswipe','photoswipe/dist/photoswipe-ui-default'],t):'object'==typeof exports?exports.NaturalGallery=t(require('photoswipe'),require('photoswipe/dist/photoswipe-ui-default')):e.NaturalGallery=t(e.photoswipe,e['photoswipe/dist/photoswipe-ui-default'])})(this,function(e,t){var l=Math.floor;return function(e){function t(n){if(l[n])return l[n].exports;var i=l[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var l={};return t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(l,'a',l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=2)}([function(e,t){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var l;(function(e){e.getIcon=function(e){var t=document.createElementNS('http://www.w3.org/2000/svg','svg');return t.setAttribute('viewBox','0 0 100 100'),t.innerHTML='<use xlink:href="#'+e+'"></use>',t},e.toggleClass=function(e,t){e&&t&&(this.hasClass(e,t)?this.removeClass(e,t):this.addClass(e,t))},e.removeClass=function(e,t){var l=new RegExp('(\\s|^)'+t+'(\\s|$)');e.className=e.className.replace(l,' ').replace(/^\s\s*/,'').replace(/\s\s*$/,'')},e.addClass=function(e,t){this.hasClass(t)||(e.className+=(e.className?' ':'')+t)},e.hasClass=function(e,t){return e.className&&new RegExp('(^|\\s)'+t+'(\\s|$)').test(e.className)},e.uniqBy=function(e,t){var l=[];return e.forEach(function(e){var n=l.some(function(l){return e[t]===l[t]});n||l.push(e)}),l},e.differenceBy=function(e,t,l){var n=[];return e.forEach(function(e){var i=t.some(function(t){return e[l]===t[l]});i||n.push(e)}),n},e.intersectionBy=function(e,t,l){var n=[];return e.forEach(function(e){var i=t.some(function(t){return e[l]===t[l]});i&&n.push(e)}),n};var t=[{base:'A',letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:'AA',letters:/[\uA732]/g},{base:'AE',letters:/[\u00C6\u01FC\u01E2]/g},{base:'AO',letters:/[\uA734]/g},{base:'AU',letters:/[\uA736]/g},{base:'AV',letters:/[\uA738\uA73A]/g},{base:'AY',letters:/[\uA73C]/g},{base:'B',letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:'C',letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:'D',letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:'DZ',letters:/[\u01F1\u01C4]/g},{base:'Dz',letters:/[\u01F2\u01C5]/g},{base:'E',letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:'F',letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:'G',letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:'H',letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:'I',letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:'J',letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:'K',letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:'L',letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:'LJ',letters:/[\u01C7]/g},{base:'Lj',letters:/[\u01C8]/g},{base:'M',letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:'N',letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:'NJ',letters:/[\u01CA]/g},{base:'Nj',letters:/[\u01CB]/g},{base:'O',letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:'OI',letters:/[\u01A2]/g},{base:'OO',letters:/[\uA74E]/g},{base:'OU',letters:/[\u0222]/g},{base:'P',letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:'Q',letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:'R',letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:'S',letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:'T',letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:'TZ',letters:/[\uA728]/g},{base:'U',letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:'V',letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:'VY',letters:/[\uA760]/g},{base:'W',letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:'X',letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:'Y',letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:'Z',letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:'a',letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:'aa',letters:/[\uA733]/g},{base:'ae',letters:/[\u00E6\u01FD\u01E3]/g},{base:'ao',letters:/[\uA735]/g},{base:'au',letters:/[\uA737]/g},{base:'av',letters:/[\uA739\uA73B]/g},{base:'ay',letters:/[\uA73D]/g},{base:'b',letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:'c',letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:'d',letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:'dz',letters:/[\u01F3\u01C6]/g},{base:'e',letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:'f',letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:'g',letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:'h',letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:'hv',letters:/[\u0195]/g},{base:'i',letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:'j',letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:'k',letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:'l',letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:'lj',letters:/[\u01C9]/g},{base:'m',letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:'n',letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:'nj',letters:/[\u01CC]/g},{base:'o',letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:'oi',letters:/[\u01A3]/g},{base:'ou',letters:/[\u0223]/g},{base:'oo',letters:/[\uA74F]/g},{base:'p',letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:'q',letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:'r',letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:'s',letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:'t',letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:'tz',letters:/[\uA729]/g},{base:'u',letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:'v',letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:'vy',letters:/[\uA761]/g},{base:'w',letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:'x',letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:'y',letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:'z',letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}];e.removeDiacritics=function(e){for(var l=0;l<t.length;l++)e=e.replace(t[l].letters,t[l].base);return e}})(l=t.Utility||(t.Utility={}))},function(e,t){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var l=function(){function e(e){this.header=e,this._collection=null}return e.prototype.isActive=function(){return null!==this.collection},Object.defineProperty(e.prototype,'collection',{get:function(){return this._collection},set:function(e){this._collection=e},enumerable:!0,configurable:!0}),e}();t.AbstractFilter=l},function(e,t,l){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),l(3),l(4);var n=l(5);t.Gallery=n.Gallery},function(){},function(){},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var i=n(6),o=n(9),r=n(10),a=n(11),s=n(0),d=n(13),p=function(){function e(e,t,n,i){for(var d in void 0===i&&(i=null),this.scrollElement=i,this._options={rowHeight:350,format:'natural',round:3,margin:3,limit:0,showLabels:'hover',lightbox:!0,minRowsAtStart:2,showCount:!1,searchFilter:!1,categoriesFilter:!1,showNone:!1,showOthers:!1,labelCategories:'Category',labelNone:'None',labelOthers:'Others',labelSearch:'Search',labelImages:'Images',selectable:!1,zoomRotation:!0,infiniteScrollOffset:0},this._events={},this.old_scroll_top=0,this._pswpContainer=[],this._collection=[],this._categories=[],this._selected=[],this.defaultImageRatio=.7,this.pswpElement=t,this.options)'undefined'==typeof n.options[d]&&(n.options[d]=this.options[d]);this.options=n.options,this.categories=n.categories?n.categories:[],this.rootElement=e,s.Utility.addClass(this.rootElement,'natural-gallery'),this._events=n.events?n.events:{},this._events.select&&(this.options.selectable=!0),(this.options.searchFilter||this.options.categoriesFilter||this.options.showCount)&&(this.header=new o.Header(this),this.options.searchFilter&&this.header.addFilter(new r.SearchFilter(this.header)),this.options.categoriesFilter&&this.header.addFilter(new a.CategoryFilter(this.header))),this.render(),this.bodyWidth=l(this.bodyElement.getBoundingClientRect().width),n.images?this.collection=n.images:this.pagination(),0===this.options.limit&&this.bindScroll(null===i?document:i)}return e.prototype.render=function(){var t=this;this.noResults=document.createElement('div'),s.Utility.addClass(this.noResults,'natural-gallery-noresults'),this.noResults.appendChild(s.Utility.getIcon('icon-noresults')),this.noResults.style.display='block',this.nextButton=document.createElement('div'),s.Utility.addClass(this.nextButton,'natural-gallery-next'),this.nextButton.appendChild(s.Utility.getIcon('icon-next')),this.nextButton.style.display='none',this.nextButton.addEventListener('click',function(l){l.preventDefault();var e=t.getRowsPerPage();t.addElements(e),t.pagination(e)});var e=document.createElement('iframe');this.rootElement.appendChild(e);var l=null;e.contentWindow.addEventListener('resize',function(){clearTimeout(l),l=setTimeout(function(){t.resize()},100)}),this.bodyElement=document.createElement('div'),s.Utility.addClass(this.bodyElement,'natural-gallery-body'),this.bodyElement.appendChild(this.noResults),this.header&&this.rootElement.appendChild(this.header.render()),this.rootElement.appendChild(this.bodyElement),this.rootElement.appendChild(this.nextButton)},e.prototype.addItems=function(e){if(e.constructor===Array&&e.length){var t=0===this.collection.length||this.collection.length===this.pswpContainer.length;e.forEach(function(e){this._collection.push(new i.Item(e,this))},this),d.Organizer.organize(this),this.header&&this.header.refresh(),t&&this.addElements(this.getRowsPerPage())}},e.prototype.style=function(){this.collection.forEach(function(e){e.style()})},e.prototype.addElements=function(e){void 0===e&&(e=null);var t=this.collection;if(this.nextButton.style.display='block',this.pswpContainer.length===t.length)return this.nextButton.style.display='none',void(0===t.length&&(this.noResults.style.display='block',this.rootElement.getElementsByClassName('natural-gallery-images')[0].style.display='none'));for(var l,n=this.pswpContainer.length,o=this.pswpContainer.length?t[n].row+e:e,r=n;r<t.length;r++)l=t[r],l.row<o&&(this.pswpContainer.push(l.getPswpItem()),this.bodyElement.appendChild(l.loadElement()),l.bindClick(),l.flash()),this.pswpContainer.length===t.length&&(this.nextButton.style.display='none');this.noResults.style.display='none';var i=this.rootElement.getElementsByClassName('natural-gallery-images')[0];i&&(i.style.display='block');var a=this.rootElement.getElementsByClassName('natural-gallery-visible')[0];a&&(a.textContent=this.pswpContainer.length+'');var s=this.rootElement.getElementsByClassName('natural-gallery-total')[0];s&&(s.textContent=t.length+'')},e.prototype.getRowsPerPage=function(){if(this.options.limit)return this.options.limit;var e=this.scrollElement?this.scrollElement.clientHeight:document.documentElement.clientHeight,t=e-this.bodyElement.offsetTop,n=l(t/(0.55*this.options.rowHeight));return n<this.options.minRowsAtStart?this.options.minRowsAtStart:n},e.prototype.resize=function(){var e=l(this.bodyElement.getBoundingClientRect().width);if(e!==this.bodyWidth){this.bodyWidth=e,d.Organizer.organize(this);var t=this.collection[this.pswpContainer.length-1],n=t?t.row+1:this.getRowsPerPage();this.reset(),this.addElements(n)}},e.prototype.refresh=function(){this.reset(),d.Organizer.organize(this),this.addElements(this.getRowsPerPage())},e.prototype.reset=function(){this.pswpContainer=[],this._collection.forEach(function(e){e.remove()}),this.noResults.style.display='block'},e.prototype.bindScroll=function(e){var t=this,l=null;l=e instanceof Document?e.documentElement:e,e.addEventListener('scroll',function(){var e=t.rootElement.offsetTop+t.rootElement.offsetHeight+t.options.infiniteScrollOffset,n=l.scrollTop-(l.clientTop||0),i=l.clientHeight,o=n-t.old_scroll_top;t.old_scroll_top=n,0<o&&n+i>=e&&(t.addElements(1),t.pagination(1))})},e.prototype.pagination=function(e){if(void 0===e&&(e=1),this.events.pagination)if(this.collection.length){var t=this.getMaxImagesPerRow();this._events.pagination(this.collection.length,t*e)}else{var l=d.Organizer.simulatePagination(this);this._events.pagination(this.collection.length,2*(l*this.getRowsPerPage()))}},e.prototype.getMaxImagesPerRow=function(){return Math.max.apply(null,function(e){return e.reduce(function(t,l){return t[l.row]=-1<t[l.row]?t[l.row]+1:1,t},[])}(this.collection))},e.prototype.select=function(e){var t=this._selected.indexOf(e);-1===t&&(this._selected.push(e),this._events.select(this._selected.map(function(e){return e.fields})))},e.prototype.unselect=function(e){var t=this._selected.indexOf(e);-1<t&&(this._selected.splice(t,1),this._events.select(this._selected.map(function(e){return e.fields})))},e.prototype.unselectAll=function(){for(var e=this._selected.length-1;0<=e;e--)this._selected[e].toggleSelect();this._selected=[]},Object.defineProperty(e.prototype,'events',{get:function(){return this._events},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'id',{get:function(){return this._id},set:function(e){this._id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'pswpContainer',{get:function(){return this._pswpContainer},set:function(e){this._pswpContainer=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'collection',{get:function(){return this.header&&this.header.isFiltered()?this.header.collection:this._collection},set:function(e){this.reset(),this._collection=[],this.addItems(e)},enumerable:!0,configurable:!0}),e.prototype.getOriginalCollection=function(){return this._collection},Object.defineProperty(e.prototype,'bodyWidth',{get:function(){return this._bodyWidth},set:function(e){this._bodyWidth=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'bodyElement',{get:function(){return this._bodyElement},set:function(e){this._bodyElement=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'rootElement',{get:function(){return this._rootElement},set:function(e){this._rootElement=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'pswpApi',{get:function(){return this._pswpApi},set:function(e){this._pswpApi=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'pswpElement',{get:function(){return this._pswpElement},set:function(e){this._pswpElement=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'options',{get:function(){return this._options},set:function(e){this._options=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'header',{get:function(){return this._header},set:function(e){this._header=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'categories',{get:function(){return this._categories},set:function(e){this._categories=e},enumerable:!0,configurable:!0}),e}();t.Gallery=p},function(e,t,l){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var n=l(0),i=l(7),o=l(8),r=function(){function e(e,t){this.gallery=t,this._binded=!1,this.selected=!1,this._fields=e,this.id=e.id,this.thumbnail=e.thumbnail,this.enlarged=e.enlarged,this.title=this.getTitle(e),this.link=this.getLink(e),this.linkTarget=this.getLinkTarget(e),this.tWidth=e.tWidth,this.tHeight=e.tHeight,this.eWidth=e.eWidth,this.eHeight=e.eHeight,this.categories=e.categories,this.last=e.last,this.createElement()}return e.prototype.getTitle=function(e){return e.title?this.getTitleDetails(e.title).title:null},e.prototype.getLink=function(e){return e.link?e.link:this.getTitleDetails(e.title).link},e.prototype.getLinkTarget=function(e){return e.linkTarget?e.linkTarget:this.getTitleDetails(e.title).linkTarget},e.prototype.getTitleDetails=function(e){var t=document.createElement('div');t.innerHTML=e;var l=t.getElementsByTagName('a'),n={title:t.textContent,link:null,linkTarget:null};return l[0]&&(n.link=l[0].getAttribute('href'),n.linkTarget=l[0].getAttribute('target')),n},e.prototype.createElement=function(){var t=this,e=this.gallery.options,l=null;this.title&&-1<['true','hover'].indexOf(e.showLabels)&&(l=!0);var i=document.createElement('div'),o=document.createElement('div'),r=this.getLinkElement(),a=null;if(e.lightbox&&l&&r?(l=r,n.Utility.addClass(l,'button'),a=o):e.lightbox&&l&&!r?(l=document.createElement('div'),a=i):e.lightbox&&!l?a=i:!e.lightbox&&l&&r?(i=r,l=document.createElement('div'),l.classList.add('button')):e.lightbox||!l||r?!e.lightbox&&!l&&r&&(i=r):l=document.createElement('div'),a&&(n.Utility.addClass(a,'zoomable'),e.zoomRotation&&n.Utility.addClass(a,'rotation')),n.Utility.addClass(o,'image'),n.Utility.addClass(i,'figure loading visible'),o.style.backgroundImage='url('+this.thumbnail+')',i.appendChild(o),e.round){var s=e.round+'px';i.style.borderRadius=s,o.style.borderRadius=s}if(this.element=i,this.image=o,l&&(l.textContent=this.title,n.Utility.addClass(l,'title'),'hover'===e.showLabels&&n.Utility.addClass(l,'hover'),i.appendChild(l)),this.gallery.options.selectable){this.selectBtn=document.createElement('div');var d=n.Utility.getIcon('icon-select');this.selectBtn.appendChild(d),this.selectBtn.classList.add('selectBtn'),d.addEventListener('click',function(l){l.stopPropagation(),t.toggleSelect()}),this.element.appendChild(this.selectBtn)}},e.prototype.toggleSelect=function(){this.selected=!this.selected,this.selected?(this.element.classList.add('selected'),this.gallery.select(this)):(this.element.classList.remove('selected'),this.gallery.unselect(this))},e.prototype.getLinkElement=function(){var e=this,t=null;return this.link&&(t=document.createElement('a'),this.gallery.events.link?t.addEventListener('click',function(t){e.gallery.events.link.preventDefault&&t.preventDefault(),e.gallery.events.link.callback(e._fields)}):(t.setAttribute('href',this.link),n.Utility.addClass(t,'link'),this.linkTarget&&t.setAttribute('target',this.linkTarget))),t},e.prototype.style=function(){n.Utility.removeClass(this.element,'visible'),this.element.style.width=this.width+'px',this.element.style.height=this.height+'px',this.element.style.marginRight=this.gallery.options.margin+'px',this.element.style.marginBottom=this.gallery.options.margin+'px',this.last&&(this.element.style.marginRight='0');var e=this;window.setTimeout(function(){n.Utility.addClass(e.element,'visible')},0)},e.prototype.flash=function(){var e=this;n.Utility.removeClass(this.element,'visible'),window.setTimeout(function(){n.Utility.addClass(e.element,'visible')},0)},e.prototype.bindClick=function(){if(this.gallery.options.lightbox){var t=this;if(!this.binded){this.binded=!0;var e=function(l){t.openPhotoSwipe.call(t,l,t.element)},l=null;l=this.link?this.image:this.element,l.addEventListener('click',e)}}},e.prototype.openPhotoSwipe=function(t,e){t.preventDefault();var l=this;if(this.gallery.options.lightbox){var n=Array.prototype.slice.call(e.parentNode.children),r=n.indexOf(e)-1,a=new i(this.gallery.pswpElement,o,this.gallery.pswpContainer,{index:r,bgOpacity:0.85,showHideOpacity:!0,loop:!1});this.gallery.pswpApi=a,a.init();var s=null;a.listen('beforeChange',function(e){0<e&&a.getCurrentIndex()===a.items.length-1?l.gallery.addElements():e===-1*(a.items.length-1)&&(s=a.items.length,l.gallery.addElements())}),a.listen('afterChange',function(){s&&(a.goTo(s),s=null)})}},e.prototype.getPswpItem=function(){return{src:this._enlarged,w:this._eWidth,h:this._eHeight,title:this._title}},e.prototype.getElement=function(){return this.element},e.prototype.loadElement=function(){var e=this,t=document.createElement('img');return t.setAttribute('src',this.thumbnail),t.addEventListener('load',function(){n.Utility.removeClass(e.element,'loading'),n.Utility.addClass(e.element,'loaded')}),t.addEventListener('error',function(){n.Utility.addClass(e.element,'errored')}),this.element},e.prototype.remove=function(){this.getElement().parentNode&&this.getElement().parentNode.removeChild(this.getElement())},Object.defineProperty(e.prototype,'id',{get:function(){return this._id},set:function(e){this._id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'thumbnail',{get:function(){return this._thumbnail},set:function(e){this._thumbnail=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'enlarged',{get:function(){return this._enlarged},set:function(e){this._enlarged=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'title',{get:function(){return this._title},set:function(e){this._title=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'tWidth',{get:function(){return this._tWidth},set:function(e){this._tWidth=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'tHeight',{get:function(){return this._tHeight},set:function(e){this._tHeight=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'eWidth',{get:function(){return this._eWidth},set:function(e){this._eWidth=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'eHeight',{get:function(){return this._eHeight},set:function(e){this._eHeight=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'last',{get:function(){return this._last},set:function(e){this._last=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'categories',{get:function(){return this._categories},set:function(e){this._categories=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'row',{get:function(){return this._row},set:function(e){this._row=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'height',{get:function(){return this._height},set:function(e){this._height=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'width',{get:function(){return this._width},set:function(e){this._width=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'description',{get:function(){return this._description},set:function(e){this._description=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'binded',{get:function(){return this._binded},set:function(e){this._binded=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'link',{get:function(){return this._link},set:function(e){this._link=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'linkTarget',{get:function(){return this._linkTarget},set:function(e){this._linkTarget=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'fields',{get:function(){return this._fields},enumerable:!0,configurable:!0}),e}();t.Item=r},function(t){t.exports=e},function(e){e.exports=t},function(e,t,l){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var n=l(0),i=function(){function e(e){this._collection=null,this._filters=[],this.gallery=e}return e.prototype.addFilter=function(e){this.filters.push(e)},e.prototype.refresh=function(){this.filters.forEach(function(e){e.render()})},e.prototype.render=function(){var e=document.createElement('div');n.Utility.addClass(e,'natural-gallery-images sectionContainer'),e.appendChild(n.Utility.getIcon('icon-pict'));var t=document.createElement('div');n.Utility.addClass(t,'sectionName'),t.textContent=this.gallery.options.labelImages,e.appendChild(t);var l=document.createElement('span');e.appendChild(l),n.Utility.addClass(l,'natural-gallery-visible');var i=document.createElement('span');i.textContent='/',e.appendChild(i);var o=document.createElement('span');return n.Utility.addClass(o,'natural-gallery-total'),e.appendChild(o),this.element=document.createElement('div'),this.filters.forEach(function(e){this.element.appendChild(e.render())},this),n.Utility.addClass(this.element,'natural-gallery-header'),this.element.appendChild(e),this.element},e.prototype.isFiltered=function(){return null!==this.collection},e.prototype.filter=function(){var e=null;this.filters.forEach(function(t){t.isActive()&&(null==e?e=t.collection:e=n.Utility.intersectionBy(e,t.collection,'id'))}),this.collection=e,this.gallery.refresh()},Object.defineProperty(e.prototype,'collection',{get:function(){return this._collection},set:function(e){this._collection=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'element',{get:function(){return this._element},set:function(e){this._element=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'gallery',{get:function(){return this._gallery},set:function(e){this._gallery=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'filters',{get:function(){return this._filters},set:function(e){this._filters=e},enumerable:!0,configurable:!0}),e}();t.Header=i},function(e,t,l){'use strict';var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var l in t)t.hasOwnProperty(l)&&(e[l]=t[l])};return function(t,l){function n(){this.constructor=t}e(t,l),t.prototype=null===l?Object.create(l):(n.prototype=l.prototype,new n)}}();Object.defineProperty(t,'__esModule',{value:!0});var i=l(0),o=l(1),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=document.createElement('div');i.Utility.addClass(e,'natural-gallery-searchTerm sectionContainer'),e.appendChild(i.Utility.getIcon('icon-search')),e.appendChild(this.getInput());var t=document.createElement('label');i.Utility.addClass(t,'sectionName'),t.textContent=this.header.gallery.options.labelSearch,e.appendChild(t);var l=document.createElement('span');return i.Utility.addClass(l,'bar'),e.appendChild(l),e},t.prototype.getInput=function(){var e=this,t=document.createElement('input');return t.setAttribute('required',''),t.addEventListener('keyup',function(t){var l=this;27===t.keyCode&&(l.value=''),e.filter(l.value)}),t},t.prototype.filter=function(e){this.collection=null;var t=i.Utility.removeDiacritics(e).toLowerCase();0<t.length&&(this.collection=[],this.header.gallery.getOriginalCollection().forEach(function(e){var l=i.Utility.removeDiacritics(e.title+' '+(e.description?e.description:'')).toLowerCase();-1!==l.search(t)&&this.collection.push(e)},this)),this.header.filter()},t}(o.AbstractFilter);t.SearchFilter=r},function(e,t,l){'use strict';var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var l in t)t.hasOwnProperty(l)&&(e[l]=t[l])};return function(t,l){function n(){this.constructor=t}e(t,l),t.prototype=null===l?Object.create(l):(n.prototype=l.prototype,new n)}}();Object.defineProperty(t,'__esModule',{value:!0});var i=l(1),o=l(12),r=l(0),a=function(e){function t(t){var l=e.call(this,t)||this;return l.header=t,l._categories=[],l}return n(t,e),Object.defineProperty(t.prototype,'element',{get:function(){return this._element},set:function(e){this._element=e},enumerable:!0,configurable:!0}),t.prototype.render=function(){if(this.prepare(),!this.element){this.element=document.createElement('div'),r.Utility.addClass(this.element,'natural-gallery-categories sectionContainer');var e=document.createElement('div');r.Utility.addClass(e,'sectionName'),e.textContent=this.header.gallery.options.labelCategories,this.element.appendChild(e)}else for(var t=this.element.getElementsByTagName('label'),l=t.length-1;0<l;l--)this.element.removeChild(t.item(l));var n=this.element.getElementsByTagName('label')[0];return n&&n.parentNode.removeChild(n),this.categories.forEach(function(e){this.element.appendChild(e.render())},this),this.element},t.prototype.prepare=function(){var e=[];this.header.gallery.categories.forEach(function(t){e.push(new o.Category(t.id,t.title,this))},this),this.none=new o.Category(-1,this.header.gallery.options.labelNone,this),this.others=new o.Category(-2,this.header.gallery.options.labelOthers,this),this.header.gallery.options.showNone&&e.length&&e.push(this.none),this.header.gallery.options.showOthers&&e.length&&e.push(this.others);var t=[];this.header.gallery.getOriginalCollection().forEach(function(l){(!l.categories||l.categories&&0===l.categories.length&&this.header.gallery.options.showNone)&&(l.categories=[this.none]),e.length&&r.Utility.differenceBy(l.categories,e,'id').length===l.categories.length&&this.header.gallery.options.showOthers&&(l.categories=[this.others]),l.categories.forEach(function(e){t.push(new o.Category(e.id,e.title,this))},this)},this),e=r.Utility.uniqBy(e,'id'),t=r.Utility.uniqBy(t,'id'),this.categories=e.length?r.Utility.intersectionBy(e,t,'id'):t},t.prototype.filter=function(){var e=this.categories.filter(function(e){return e.isActive});if(e.length===this.categories.length)this.collection=null;else if(0===e.length)this.collection=[];else{var t=[];this.header.gallery.getOriginalCollection().forEach(function(l){!l.categories||l.categories&&0===l.categories.length?this.none&&t.push(l):l.categories.some(function(n){var i=e.some(function(e){return n.id===e.id});if(i)return t.push(l),!0})},this),this.collection=t}this.header.filter()},Object.defineProperty(t.prototype,'categories',{get:function(){return this._categories},set:function(e){this._categories=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,'others',{get:function(){return this._others},set:function(e){this._others=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,'none',{get:function(){return this._none},set:function(e){this._none=e},enumerable:!0,configurable:!0}),t}(i.AbstractFilter);t.CategoryFilter=a},function(e,t,l){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var n=l(0),i=function(){function e(e,t,l){this.filter=l,this._isActive=!0,this.id=e,this.title=t}return e.prototype.render=function(){var e=this;this.element=document.createElement('label');var t=document.createElement('input');t.setAttribute('type','checkbox'),t.setAttribute('checked','checked'),t.addEventListener('change',function(){e.isActive=!e.isActive,e.filter.filter()}),this.element.appendChild(t);var l=document.createElement('span');l.textContent=this.title;var i=document.createElement('span');n.Utility.addClass(i,'label'),i.appendChild(n.Utility.getIcon('icon-category')),i.appendChild(l),this.element.appendChild(i);var o=document.createElement('span');return n.Utility.addClass(o,'bar'),this.element.appendChild(o),this.element},Object.defineProperty(e.prototype,'id',{get:function(){return this._id},set:function(e){this._id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'title',{get:function(){return this._title},set:function(e){this._title=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'isActive',{get:function(){return this._isActive},set:function(e){this._isActive=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,'element',{get:function(){return this._element},set:function(e){this._element=e},enumerable:!0,configurable:!0}),e}();t.Category=i},function(e,t){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var n;(function(e){var t=Math.round,n=Math.ceil;e.organize=function(e){'natural'===e.options.format?this.organizeNatural(e.collection,e.bodyWidth,e.options.rowHeight,e.options.margin):'square'===e.options.format&&e.options.imagesPerRow?this.organizeSquareByImagesPerRow(e.collection,e.bodyWidth,e.options.imagesPerRow,e.options.margin):'square'===e.options.format&&e.options.rowHeight&&this.organizeSquareByRowHeight(e.collection,e.bodyWidth,e.options.rowHeight,e.options.margin),e.style()},e.simulatePagination=function(e){var t=e.options.margin?e.options.margin:0,l=n(e.options.rowHeight*e.defaultImageRatio+t),i=(e.bodyWidth+t)/(l+t);return n(i)},e.organizeSquareByRowHeight=function(e,o,r,a){a||(a=0);for(var s,d=n((o+a)/(r+a)),p=t((o+a-d*a)/d),g=o-d*p-(d-1)*a,c=0;c<e.length;c++)s=e[c],s.last=c%d==d-1,s.row=l(c/d),s.width=l(p),s.height=l(p),s.last&&(s.width=l(p+g))},e.organizeSquareByImagesPerRow=function(e,t,n,o){o||(o=0),n||(n=4);for(var r,a=(t-(n-1)*o)/n,s=0;s<e.length;s++)r=e[s],r.width=l(a),r.height=l(a),r.last=s%n==n-1,r.row=l(s/n)},e.organizeNatural=function(e,t,l,n,i){void 0===i&&(i=null),i||(i=0),n||(n=0),l||(l=300);for(var o=1;o<=e.length;o++){var r=e.slice(0,o),a=this.getRowWidth(l,n,r);if(a>=t){this.computeSizes(r,t,n,i),this.organizeNatural(e.slice(o),t,l,n,i+1);break}else if(o===e.length){this.computeSizes(r,null,n,i,l);break}}},e.computeSizes=function(e,n,o,r,a){void 0===a&&(a=null);for(var s=n?this.getRowHeight(n,o,e):a,d=this.getRowWidth(s,o,e),p=n?this.apportionExcess(e,n,d):0,g=0,c=0;c<e.length;c++){var i=e[c],u=this.getImageRatio(i)*s-p;g+=u-l(u),u=l(u),(1<=g||c===e.length-1&&1===t(g))&&(u++,g--),i.width=u,i.height=l(s),i.row=r,i.last=c===e.length-1}},e.getRowWidth=function(e,t,l){return t*(l.length-1)+this.getRatios(l)*e},e.getRowHeight=function(e,t,l){return e/this.getRatios(l)+t*(l.length-1)},e.getRatios=function(e){for(var t=this,l=0,n=0;n<e.length;n++)l+=t.getImageRatio(e[n]);return l},e.getImageRatio=function(e){return+e.tWidth/+e.tHeight},e.apportionExcess=function(e,t,l){var n=(l-t)/e.length;return n}})(n=t.Organizer||(t.Organizer={}))}])});