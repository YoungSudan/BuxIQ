import e from"buffer";var t=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var r={};var n=e.Buffer;function bind(e,t){return function wrap(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype;const{getPrototypeOf:s}=Object;const i=(e=>t=>{const r=o.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null));const kindOfTest=e=>{e=e.toLowerCase();return t=>i(t)===e};const typeOfTest=e=>t=>typeof t===e
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */;const{isArray:a}=Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */const c=typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function isBuffer(e){return e!==null&&!c(e)&&e.constructor!==null&&!c(e.constructor)&&f(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */const l=kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function isArrayBufferView(e){let t;t=typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer);return t}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */const u=typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */const f=typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */const d=typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */const isObject=e=>e!==null&&typeof e==="object"
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */;const isBoolean=e=>e===true||e===false
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */;const isPlainObject=e=>{if(i(e)!=="object")return false;const t=s(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */const h=kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */const p=kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */const m=kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */const g=kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */const isStream=e=>isObject(e)&&f(e.pipe)
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */;const isFormData=e=>{let t;return e&&(typeof FormData==="function"&&e instanceof FormData||f(e.append)&&((t=i(e))==="formdata"||t==="object"&&f(e.toString)&&e.toString()==="[object FormData]"))};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */const E=kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */const trim=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */;function forEach(e,t,{allOwnKeys:r=false}={}){if(e===null||typeof e==="undefined")return;let n;let o;typeof e!=="object"&&(e=[e]);if(a(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e);const s=o.length;let i;for(n=0;n<s;n++){i=o[n];t.call(null,e[i],i,e)}}}function findKey(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length;let o;while(n-- >0){o=r[n];if(t===o.toLowerCase())return o}return null}const y=(()=>typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:typeof window!=="undefined"?window:t)();const isContextDefined=e=>!c(e)&&e!==y
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */;function merge(){const{caseless:e}=isContextDefined(this)&&this||{};const t={};const assignValue=(r,n)=>{const o=e&&findKey(t,n)||n;isPlainObject(t[o])&&isPlainObject(r)?t[o]=merge(t[o],r):isPlainObject(r)?t[o]=merge({},r):a(r)?t[o]=r.slice():t[o]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&forEach(arguments[e],assignValue);return t}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */const extend=(e,t,r,{allOwnKeys:n}={})=>{forEach(t,((t,n)=>{r&&f(t)?e[n]=bind(t,r):e[n]=t}),{allOwnKeys:n});return e};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */const stripBOM=e=>{e.charCodeAt(0)===65279&&(e=e.slice(1));return e};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */const inherits=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n);e.prototype.constructor=e;Object.defineProperty(e,"super",{value:t.prototype});r&&Object.assign(e.prototype,r)};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */const toFlatObject=(e,t,r,n)=>{let o;let i;let a;const c={};t=t||{};if(e==null)return t;do{o=Object.getOwnPropertyNames(e);i=o.length;while(i-- >0){a=o[i];if((!n||n(a,e,t))&&!c[a]){t[a]=e[a];c[a]=true}}e=r!==false&&s(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */const endsWith=(e,t,r)=>{e=String(e);(r===void 0||r>e.length)&&(r=e.length);r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */const toArray=e=>{if(!e)return null;if(a(e))return e;let t=e.length;if(!d(t))return null;const r=new Array(t);while(t-- >0)r[t]=e[t];return r};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */const b=(e=>t=>e&&t instanceof e)(typeof Uint8Array!=="undefined"&&s(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */const forEachEntry=(e,t)=>{const r=e&&e[Symbol.iterator];const n=r.call(e);let o;while((o=n.next())&&!o.done){const r=o.value;t.call(e,r[0],r[1])}};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */const matchAll=(e,t)=>{let r;const n=[];while((r=e.exec(t))!==null)n.push(r);return n};const w=kindOfTest("HTMLFormElement");const toCamelCase=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function replacer(e,t,r){return t.toUpperCase()+r}));const A=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */const R=kindOfTest("RegExp");const reduceDescriptors=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e);const n={};forEach(r,((r,o)=>{let s;(s=t(r,o,e))!==false&&(n[o]=s||r)}));Object.defineProperties(e,n)};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */const freezeMethods=e=>{reduceDescriptors(e,((t,r)=>{if(f(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return false;const n=e[r];if(f(n)){t.enumerable=false;"writable"in t?t.writable=false:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}}))};const toObjectSet=(e,t)=>{const r={};const define=e=>{e.forEach((e=>{r[e]=true}))};a(e)?define(e):define(String(e).split(t));return r};const noop=()=>{};const toFiniteNumber=(e,t)=>{e=+e;return Number.isFinite(e)?e:t};const O="abcdefghijklmnopqrstuvwxyz";const S="0123456789";const T={DIGIT:S,ALPHA:O,ALPHA_DIGIT:O+O.toUpperCase()+S};const generateString=(e=16,t=T.ALPHA_DIGIT)=>{let r="";const{length:n}=t;while(e--)r+=t[Math.random()*n|0];return r};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function isSpecCompliantForm(e){return!!(e&&f(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const toJSONObject=e=>{const t=new Array(10);const visit=(e,r)=>{if(isObject(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const n=a(e)?[]:{};forEach(e,((e,t)=>{const o=visit(e,r+1);!c(o)&&(n[t]=o)}));t[r]=void 0;return n}}return e};return visit(e,0)};const C=kindOfTest("AsyncFunction");const isThenable=e=>e&&(isObject(e)||f(e))&&f(e.then)&&f(e.catch);var x={isArray:a,isArrayBuffer:l,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:u,isNumber:d,isBoolean:isBoolean,isObject:isObject,isPlainObject:isPlainObject,isUndefined:c,isDate:h,isFile:p,isBlob:m,isRegExp:R,isFunction:f,isStream:isStream,isURLSearchParams:E,isTypedArray:b,isFileList:g,forEach:forEach,merge:merge,extend:extend,trim:trim,stripBOM:stripBOM,inherits:inherits,toFlatObject:toFlatObject,kindOf:i,kindOfTest:kindOfTest,endsWith:endsWith,toArray:toArray,forEachEntry:forEachEntry,matchAll:matchAll,isHTMLForm:w,hasOwnProperty:A,hasOwnProp:A,reduceDescriptors:reduceDescriptors,freezeMethods:freezeMethods,toObjectSet:toObjectSet,toCamelCase:toCamelCase,noop:noop,toFiniteNumber:toFiniteNumber,findKey:findKey,global:y,isContextDefined:isContextDefined,ALPHABET:T,generateString:generateString,isSpecCompliantForm:isSpecCompliantForm,toJSONObject:toJSONObject,isAsyncFn:C,isThenable:isThenable};
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function AxiosError(e,t,r,n,o){Error.call(this);Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack;this.message=e;this.name="AxiosError";t&&(this.code=t);r&&(this.config=r);n&&(this.request=n);o&&(this.response=o)}x.inherits(AxiosError,Error,{toJSON:function toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const v=AxiosError.prototype;const P={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{P[e]={value:e}}));Object.defineProperties(AxiosError,P);Object.defineProperty(v,"isAxiosError",{value:true});AxiosError.from=(e,t,r,n,o,s)=>{const i=Object.create(v);x.toFlatObject(e,i,(function filter(e){return e!==Error.prototype}),(e=>e!=="isAxiosError"));AxiosError.call(i,e.message,t,r,n,o);i.cause=e;i.name=e.name;s&&Object.assign(i,s);return i};var j=null;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function isVisitable(e){return x.isPlainObject(e)||x.isArray(e)}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function removeBrackets(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function renderKey(e,t,r){return e?e.concat(t).map((function each(e,t){e=removeBrackets(e);return!r&&t?"["+e+"]":e})).join(r?".":""):t}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */function isFlatArray(e){return x.isArray(e)&&!e.some(isVisitable)}const N=x.toFlatObject(x,{},null,(function filter(e){return/^is[A-Z]/.test(e)}));
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/
/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function toFormData(e,t,r){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;r=x.toFlatObject(r,{metaTokens:true,dots:false,indexes:false},false,(function defined(e,t){return!x.isUndefined(t[e])}));const o=r.metaTokens;const s=r.visitor||defaultVisitor;const i=r.dots;const a=r.indexes;const c=r.Blob||typeof Blob!=="undefined"&&Blob;const l=c&&x.isSpecCompliantForm(t);if(!x.isFunction(s))throw new TypeError("visitor must be a function");function convertValue(e){if(e===null)return"";if(x.isDate(e))return e.toISOString();if(!l&&x.isBlob(e))throw new AxiosError("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(e)||x.isTypedArray(e)?l&&typeof Blob==="function"?new Blob([e]):n.from(e):e}
/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function defaultVisitor(e,r,n){let s=e;if(e&&!n&&typeof e==="object")if(x.endsWith(r,"{}")){r=o?r:r.slice(0,-2);e=JSON.stringify(e)}else if(x.isArray(e)&&isFlatArray(e)||(x.isFileList(e)||x.endsWith(r,"[]"))&&(s=x.toArray(e))){r=removeBrackets(r);s.forEach((function each(e,n){!(x.isUndefined(e)||e===null)&&t.append(a===true?renderKey([r],n,i):a===null?r:r+"[]",convertValue(e))}));return false}if(isVisitable(e))return true;t.append(renderKey(n,r,i),convertValue(e));return false}const u=[];const f=Object.assign(N,{defaultVisitor:defaultVisitor,convertValue:convertValue,isVisitable:isVisitable});function build(e,r){if(!x.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error("Circular reference detected in "+r.join("."));u.push(e);x.forEach(e,(function each(e,n){const o=!(x.isUndefined(e)||e===null)&&s.call(t,e,x.isString(n)?n.trim():n,r,f);o===true&&build(e,r?r.concat(n):[n])}));u.pop()}}if(!x.isObject(e))throw new TypeError("data must be an object");build(e);return t}
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function encode$1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function replacer(e){return t[e]}))}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function AxiosURLSearchParams(e,t){this._pairs=[];e&&toFormData(e,this,t)}const F=AxiosURLSearchParams.prototype;F.append=function append(e,t){this._pairs.push([e,t])};F.toString=function toString(e){const t=e?function(t){return e.call(this,t,encode$1)}:encode$1;return this._pairs.map((function each(e){return t(e[0])+"="+t(e[1])}),"").join("&")};
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function encode(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */function buildURL(e,t,r){if(!t)return e;const n=r&&r.encode||encode;const o=r&&r.serialize;let s;s=o?o(t,r):x.isURLSearchParams(t)?t.toString():new AxiosURLSearchParams(t,r).toString(n);if(s){const t=e.indexOf("#");t!==-1&&(e=e.slice(0,t));e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class InterceptorManager{constructor(){this.handlers=[]}
/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,r){this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null});return this.handlers.length-1}
/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}
/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}
/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){x.forEach(this.handlers,(function forEachHandler(t){t!==null&&e(t)}))}}var U=InterceptorManager;var D={silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false};var L=typeof URLSearchParams!=="undefined"?URLSearchParams:AxiosURLSearchParams;var _=typeof FormData!=="undefined"?FormData:null;var B=typeof Blob!=="undefined"?Blob:null;var k={isBrowser:true,classes:{URLSearchParams:L,FormData:_,Blob:B},protocols:["http","https","file","blob","url","data"]};const H=typeof window!=="undefined"&&typeof document!=="undefined";
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const M=(e=>H&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!=="undefined"&&navigator.product);const V=(()=>typeof WorkerGlobalScope!=="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts==="function")();var q=Object.freeze({__proto__:null,hasBrowserEnv:H,hasStandardBrowserWebWorkerEnv:V,hasStandardBrowserEnv:M});var I={...q,...k};function toURLEncodedForm(e,t){return toFormData(e,new I.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){if(I.isNode&&x.isBuffer(e)){this.append(t,e.toString("base64"));return false}return n.defaultVisitor.apply(this,arguments)}},t))}
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */function parsePropPath(e){return x.matchAll(/\w+|\[(\w*)]/g,e).map((e=>e[0]==="[]"?"":e[1]||e[0]))}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function arrayToObject(e){const t={};const r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++){s=r[n];t[s]=e[s]}return t}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function formDataToJSON(e){function buildPath(e,t,r,n){let o=e[n++];if(o==="__proto__")return true;const s=Number.isFinite(+o);const i=n>=e.length;o=!o&&x.isArray(r)?r.length:o;if(i){x.hasOwnProp(r,o)?r[o]=[r[o],t]:r[o]=t;return!s}r[o]&&x.isObject(r[o])||(r[o]=[]);const a=buildPath(e,t,r[o],n);a&&x.isArray(r[o])&&(r[o]=arrayToObject(r[o]));return!s}if(x.isFormData(e)&&x.isFunction(e.entries)){const t={};x.forEachEntry(e,((e,r)=>{buildPath(parsePropPath(e),r,t,0)}));return t}return null}
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function stringifySafely(e,t,r){if(x.isString(e))try{(t||JSON.parse)(e);return x.trim(e)}catch(e){if(e.name!=="SyntaxError")throw e}return(r||JSON.stringify)(e)}const z={transitional:D,adapter:["xhr","http"],transformRequest:[function transformRequest(e,t){const r=t.getContentType()||"";const n=r.indexOf("application/json")>-1;const o=x.isObject(e);o&&x.isHTMLForm(e)&&(e=new FormData(e));const s=x.isFormData(e);if(s)return n&&n?JSON.stringify(formDataToJSON(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e)){t.setContentType("application/x-www-form-urlencoded;charset=utf-8",false);return e.toString()}let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return toURLEncodedForm(e,this.formSerializer).toString();if((i=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return toFormData(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}if(o||n){t.setContentType("application/json",false);return stringifySafely(e)}return e}],transformResponse:[function transformResponse(e){const t=this.transitional||z.transitional;const r=t&&t.forcedJSONParsing;const n=this.responseType==="json";if(e&&x.isString(e)&&(r&&!this.responseType||n)){const r=t&&t.silentJSONParsing;const o=!r&&n;try{return JSON.parse(e)}catch(e){if(o){if(e.name==="SyntaxError")throw AxiosError.from(e,AxiosError.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:I.classes.FormData,Blob:I.classes.Blob},validateStatus:function validateStatus(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],(e=>{z.headers[e]={}}));var J=z;const K=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */var parseHeaders=e=>{const t={};let r;let n;let o;e&&e.split("\n").forEach((function parser(e){o=e.indexOf(":");r=e.substring(0,o).trim().toLowerCase();n=e.substring(o+1).trim();!r||t[r]&&K[r]||(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}));return t};const W=Symbol("internals");function normalizeHeader(e){return e&&String(e).trim().toLowerCase()}function normalizeValue(e){return e===false||e==null?e:x.isArray(e)?e.map(normalizeValue):String(e)}function parseTokens(e){const t=Object.create(null);const r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;while(n=r.exec(e))t[n[1]]=n[2];return t}const isValidHeaderName=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function matchHeaderValue(e,t,r,n,o){if(x.isFunction(n))return n.call(this,t,r);o&&(t=r);return x.isString(t)?x.isString(n)?t.indexOf(n)!==-1:x.isRegExp(n)?n.test(t):void 0:void 0}function formatHeader(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}function buildAccessors(e,t){const r=x.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:true})}))}class AxiosHeaders{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function setHeader(e,t,r){const o=normalizeHeader(t);if(!o)throw new Error("header name must be a non-empty string");const s=x.findKey(n,o);(!s||n[s]===void 0||r===true||r===void 0&&n[s]!==false)&&(n[s||t]=normalizeValue(e))}const setHeaders=(e,t)=>x.forEach(e,((e,r)=>setHeader(e,r,t)));x.isPlainObject(e)||e instanceof this.constructor?setHeaders(e,t):x.isString(e)&&(e=e.trim())&&!isValidHeaderName(e)?setHeaders(parseHeaders(e),t):e!=null&&setHeader(t,e,r);return this}get(e,t){e=normalizeHeader(e);if(e){const r=x.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(t===true)return parseTokens(e);if(x.isFunction(t))return t.call(this,e,r);if(x.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){e=normalizeHeader(e);if(e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||matchHeaderValue(this,this[r],r,t)))}return false}delete(e,t){const r=this;let n=false;function deleteHeader(e){e=normalizeHeader(e);if(e){const o=x.findKey(r,e);if(o&&(!t||matchHeaderValue(r,r[o],o,t))){delete r[o];n=true}}}x.isArray(e)?e.forEach(deleteHeader):deleteHeader(e);return n}clear(e){const t=Object.keys(this);let r=t.length;let n=false;while(r--){const o=t[r];if(!e||matchHeaderValue(this,this[o],o,e,true)){delete this[o];n=true}}return n}normalize(e){const t=this;const r={};x.forEach(this,((n,o)=>{const s=x.findKey(r,o);if(s){t[s]=normalizeValue(n);delete t[o];return}const i=e?formatHeader(o):String(o).trim();i!==o&&delete t[o];t[i]=normalizeValue(n);r[i]=true}));return this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);x.forEach(this,((r,n)=>{r!=null&&r!==false&&(t[n]=e&&x.isArray(r)?r.join(", "):r)}));return t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);t.forEach((e=>r.set(e)));return r}static accessor(e){const t=this[W]=this[W]={accessors:{}};const r=t.accessors;const n=this.prototype;function defineAccessor(e){const t=normalizeHeader(e);if(!r[t]){buildAccessors(n,e);r[t]=true}}x.isArray(e)?e.forEach(defineAccessor):defineAccessor(e);return this}}AxiosHeaders.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(AxiosHeaders.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}));x.freezeMethods(AxiosHeaders);var $=AxiosHeaders;
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */function transformData(e,t){const r=this||J;const n=t||r;const o=$.from(n.headers);let s=n.data;x.forEach(e,(function transform(e){s=e.call(r,s,o.normalize(),t?t.status:void 0)}));o.normalize();return s}function isCancel(e){return!!(e&&e.__CANCEL__)}
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function CanceledError(e,t,r){AxiosError.call(this,e==null?"canceled":e,AxiosError.ERR_CANCELED,t,r);this.name="CanceledError"}x.inherits(CanceledError,AxiosError,{__CANCEL__:true});
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */function settle(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new AxiosError("Request failed with status code "+r.status,[AxiosError.ERR_BAD_REQUEST,AxiosError.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}var G=I.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];x.isNumber(r)&&i.push("expires="+new Date(r).toGMTString());x.isString(n)&&i.push("path="+n);x.isString(o)&&i.push("domain="+o);s===true&&i.push("secure");document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */function isAbsoluteURL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */function combineURLs(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */function buildFullPath(e,t){return e&&!isAbsoluteURL(t)?combineURLs(e,t):t}var X=I.hasStandardBrowserEnv?function standardBrowserEnv(){const e=/(msie|trident)/i.test(navigator.userAgent);const t=document.createElement("a");let r;
/**
  * Parse a URL to discover its components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */function resolveURL(r){let n=r;if(e){t.setAttribute("href",n);n=t.href}t.setAttribute("href",n);return{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}r=resolveURL(window.location.href);
/**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */return function isURLSameOrigin(e){const t=x.isString(e)?resolveURL(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true}}();function parseProtocol(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function speedometer(e,t){e=e||10;const r=new Array(e);const n=new Array(e);let o=0;let s=0;let i;t=t!==void 0?t:1e3;return function push(a){const c=Date.now();const l=n[s];i||(i=c);r[o]=a;n[o]=c;let u=s;let f=0;while(u!==o){f+=r[u++];u%=e}o=(o+1)%e;o===s&&(s=(s+1)%e);if(c-i<t)return;const d=l&&c-l;return d?Math.round(f*1e3/d):void 0}}function progressEventReducer(e,t){let r=0;const n=speedometer(50,250);return o=>{const s=o.loaded;const i=o.lengthComputable?o.total:void 0;const a=s-r;const c=n(a);const l=s<=i;r=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&l?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=true;e(u)}}const Q=typeof XMLHttpRequest!=="undefined";var Z=Q&&function(e){return new Promise((function dispatchXhrRequest(t,r){let n=e.data;const o=$.from(e.headers).normalize();let{responseType:s,withXSRFToken:i}=e;let a;function done(){e.cancelToken&&e.cancelToken.unsubscribe(a);e.signal&&e.signal.removeEventListener("abort",a)}let c;if(x.isFormData(n))if(I.hasStandardBrowserEnv||I.hasStandardBrowserWebWorkerEnv)o.setContentType(false);else if((c=o.getContentType())!==false){const[e,...t]=c?c.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"";const r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+r))}const u=buildFullPath(e.baseURL,e.url);l.open(e.method.toUpperCase(),buildURL(u,e.params,e.paramsSerializer),true);l.timeout=e.timeout;function onloadend(){if(!l)return;const n=$.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());const o=s&&s!=="text"&&s!=="json"?l.response:l.responseText;const i={data:o,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};settle((function _resolve(e){t(e);done()}),(function _reject(e){r(e);done()}),i);l=null}"onloadend"in l?l.onloadend=onloadend:l.onreadystatechange=function handleLoad(){l&&l.readyState===4&&(l.status!==0||l.responseURL&&l.responseURL.indexOf("file:")===0)&&setTimeout(onloadend)};l.onabort=function handleAbort(){if(l){r(new AxiosError("Request aborted",AxiosError.ECONNABORTED,e,l));l=null}};l.onerror=function handleError(){r(new AxiosError("Network Error",AxiosError.ERR_NETWORK,e,l));l=null};l.ontimeout=function handleTimeout(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const n=e.transitional||D;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage);r(new AxiosError(t,n.clarifyTimeoutError?AxiosError.ETIMEDOUT:AxiosError.ECONNABORTED,e,l));l=null};if(I.hasStandardBrowserEnv){i&&x.isFunction(i)&&(i=i(e));if(i||i!==false&&X(u)){const t=e.xsrfHeaderName&&e.xsrfCookieName&&G.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}}n===void 0&&o.setContentType(null);"setRequestHeader"in l&&x.forEach(o.toJSON(),(function setRequestHeader(e,t){l.setRequestHeader(t,e)}));x.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials);s&&s!=="json"&&(l.responseType=e.responseType);typeof e.onDownloadProgress==="function"&&l.addEventListener("progress",progressEventReducer(e.onDownloadProgress,true));typeof e.onUploadProgress==="function"&&l.upload&&l.upload.addEventListener("progress",progressEventReducer(e.onUploadProgress));if(e.cancelToken||e.signal){a=t=>{if(l){r(!t||t.type?new CanceledError(null,e,l):t);l.abort();l=null}};e.cancelToken&&e.cancelToken.subscribe(a);e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a))}const f=parseProtocol(u);f&&I.protocols.indexOf(f)===-1?r(new AxiosError("Unsupported protocol "+f+":",AxiosError.ERR_BAD_REQUEST,e)):l.send(n||null)}))};const Y={http:j,xhr:Z};x.forEach(Y,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const renderReason=e=>`- ${e}`;const isResolvedHandle=e=>x.isFunction(e)||e===null||e===false;var ee={getAdapter:e=>{e=x.isArray(e)?e:[e];const{length:t}=e;let r;let n;const o={};for(let s=0;s<t;s++){r=e[s];let t;n=r;if(!isResolvedHandle(r)){n=Y[(t=String(r)).toLowerCase()];if(n===void 0)throw new AxiosError(`Unknown adapter '${t}'`)}if(n)break;o[t||"#"+s]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(t===false?"is not supported by the environment":"is not available in the build")));let r=t?e.length>1?"since :\n"+e.map(renderReason).join("\n"):" "+renderReason(e[0]):"as no adapter specified";throw new AxiosError("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n},adapters:Y};
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function throwIfCancellationRequested(e){e.cancelToken&&e.cancelToken.throwIfRequested();if(e.signal&&e.signal.aborted)throw new CanceledError(null,e)}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */function dispatchRequest(e){throwIfCancellationRequested(e);e.headers=$.from(e.headers);e.data=transformData.call(e,e.transformRequest);["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",false);const t=ee.getAdapter(e.adapter||J.adapter);return t(e).then((function onAdapterResolution(t){throwIfCancellationRequested(e);t.data=transformData.call(e,e.transformResponse,t);t.headers=$.from(t.headers);return t}),(function onAdapterRejection(t){if(!isCancel(t)){throwIfCancellationRequested(e);if(t&&t.response){t.response.data=transformData.call(e,e.transformResponse,t.response);t.response.headers=$.from(t.response.headers)}}return Promise.reject(t)}))}const headersToObject=e=>e instanceof $?e.toJSON():e
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */;function mergeConfig(e,t){t=t||{};const r={};function getMergedValue(e,t,r){return x.isPlainObject(e)&&x.isPlainObject(t)?x.merge.call({caseless:r},e,t):x.isPlainObject(t)?x.merge({},t):x.isArray(t)?t.slice():t}function mergeDeepProperties(e,t,r){return x.isUndefined(t)?x.isUndefined(e)?void 0:getMergedValue(void 0,e,r):getMergedValue(e,t,r)}function valueFromConfig2(e,t){if(!x.isUndefined(t))return getMergedValue(void 0,t)}function defaultToConfig2(e,t){return x.isUndefined(t)?x.isUndefined(e)?void 0:getMergedValue(void 0,e):getMergedValue(void 0,t)}function mergeDirectKeys(r,n,o){return o in t?getMergedValue(r,n):o in e?getMergedValue(void 0,r):void 0}const n={url:valueFromConfig2,method:valueFromConfig2,data:valueFromConfig2,baseURL:defaultToConfig2,transformRequest:defaultToConfig2,transformResponse:defaultToConfig2,paramsSerializer:defaultToConfig2,timeout:defaultToConfig2,timeoutMessage:defaultToConfig2,withCredentials:defaultToConfig2,withXSRFToken:defaultToConfig2,adapter:defaultToConfig2,responseType:defaultToConfig2,xsrfCookieName:defaultToConfig2,xsrfHeaderName:defaultToConfig2,onUploadProgress:defaultToConfig2,onDownloadProgress:defaultToConfig2,decompress:defaultToConfig2,maxContentLength:defaultToConfig2,maxBodyLength:defaultToConfig2,beforeRedirect:defaultToConfig2,transport:defaultToConfig2,httpAgent:defaultToConfig2,httpsAgent:defaultToConfig2,cancelToken:defaultToConfig2,socketPath:defaultToConfig2,responseEncoding:defaultToConfig2,validateStatus:mergeDirectKeys,headers:(e,t)=>mergeDeepProperties(headersToObject(e),headersToObject(t),true)};x.forEach(Object.keys(Object.assign({},e,t)),(function computeConfigValue(o){const s=n[o]||mergeDeepProperties;const i=s(e[o],t[o],o);x.isUndefined(i)&&s!==mergeDirectKeys||(r[o]=i)}));return r}const te="1.6.5";const re={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{re[e]=function validator(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const ne={};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */re.transitional=function transitional(e,t,r){function formatMessage(e,t){return"[Axios v"+te+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,n,o)=>{if(e===false)throw new AxiosError(formatMessage(n," has been removed"+(t?" in "+t:"")),AxiosError.ERR_DEPRECATED);if(t&&!ne[n]){ne[n]=true;console.warn(formatMessage(n," has been deprecated since v"+t+" and will be removed in the near future"))}return!e||e(r,n,o)}};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function assertOptions(e,t,r){if(typeof e!=="object")throw new AxiosError("options must be an object",AxiosError.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;while(o-- >0){const s=n[o];const i=t[s];if(i){const t=e[s];const r=t===void 0||i(t,s,e);if(r!==true)throw new AxiosError("option "+s+" must be "+r,AxiosError.ERR_BAD_OPTION_VALUE)}else if(r!==true)throw new AxiosError("Unknown option "+s,AxiosError.ERR_BAD_OPTION)}}var oe={assertOptions:assertOptions,validators:re};const se=oe.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class Axios{constructor(e){this.defaults=e;this.interceptors={request:new U,response:new U}}
/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){if(typeof e==="string"){t=t||{};t.url=e}else t=e||{};t=mergeConfig(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:se.transitional(se.boolean),forcedJSONParsing:se.transitional(se.boolean),clarifyTimeoutError:se.transitional(se.boolean)},false);n!=null&&(x.isFunction(n)?t.paramsSerializer={serialize:n}:oe.assertOptions(n,{encode:se.function,serialize:se.function},true));t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&x.merge(o.common,o[t.method]);o&&x.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]}));t.headers=$.concat(s,o);const i=[];let a=true;this.interceptors.request.forEach((function unshiftRequestInterceptors(e){if(typeof e.runWhen!=="function"||e.runWhen(t)!==false){a=a&&e.synchronous;i.unshift(e.fulfilled,e.rejected)}}));const c=[];this.interceptors.response.forEach((function pushResponseInterceptors(e){c.push(e.fulfilled,e.rejected)}));let l;let u=0;let f;if(!a){const e=[dispatchRequest.bind(this),void 0];e.unshift.apply(e,i);e.push.apply(e,c);f=e.length;l=Promise.resolve(t);while(u<f)l=l.then(e[u++],e[u++]);return l}f=i.length;let d=t;u=0;while(u<f){const e=i[u++];const t=i[u++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=dispatchRequest.call(this,d)}catch(e){return Promise.reject(e)}u=0;f=c.length;while(u<f)l=l.then(c[u++],c[u++]);return l}getUri(e){e=mergeConfig(this.defaults,e);const t=buildFullPath(e.baseURL,e.url);return buildURL(t,e.params,e.paramsSerializer)}}x.forEach(["delete","get","head","options"],(function forEachMethodNoData(e){Axios.prototype[e]=function(t,r){return this.request(mergeConfig(r||{},{method:e,url:t,data:(r||{}).data}))}}));x.forEach(["post","put","patch"],(function forEachMethodWithData(e){function generateHTTPMethod(t){return function httpMethod(r,n,o){return this.request(mergeConfig(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Axios.prototype[e]=generateHTTPMethod();Axios.prototype[e+"Form"]=generateHTTPMethod(true)}));var ie=Axios;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class CancelToken{constructor(e){if(typeof e!=="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function promiseExecutor(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;while(t-- >0)r._listeners[t](e);r._listeners=null}));this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e);t=e})).then(e);n.cancel=function reject(){r.unsubscribe(t)};return n};e((function cancel(e,n,o){if(!r.reason){r.reason=new CanceledError(e,n,o);t(r.reason)}}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;const t=new CancelToken((function executor(t){e=t}));return{token:t,cancel:e}}}var ae=CancelToken;
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */function spread(e){return function wrap(t){return e.apply(null,t)}}
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */function isAxiosError(e){return x.isObject(e)&&e.isAxiosError===true}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach((([e,t])=>{ce[t]=e}));var le=ce;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function createInstance(e){const t=new ie(e);const r=bind(ie.prototype.request,t);x.extend(r,ie.prototype,t,{allOwnKeys:true});x.extend(r,t,null,{allOwnKeys:true});r.create=function create(t){return createInstance(mergeConfig(e,t))};return r}const ue=createInstance(J);ue.Axios=ie;ue.CanceledError=CanceledError;ue.CancelToken=ae;ue.isCancel=isCancel;ue.VERSION=te;ue.toFormData=toFormData;ue.AxiosError=AxiosError;ue.Cancel=ue.CanceledError;ue.all=function all(e){return Promise.all(e)};ue.spread=spread;ue.isAxiosError=isAxiosError;ue.mergeConfig=mergeConfig;ue.AxiosHeaders=$;ue.formToJSON=e=>formDataToJSON(x.isHTMLForm(e)?new FormData(e):e);ue.getAdapter=ee.getAdapter;ue.HttpStatusCode=le;ue.default=ue;r=ue;var fe=r;export{fe as default};

