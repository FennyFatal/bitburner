const parenSolve = (e)=>{let a=0,n=0;const i=[];for(let t=0;t<e.length;++t)"("===e[t]?++a:")"===e[t]&&(a>0?--a:++n);!function e(t,a,n,r,i,o,s){if(i.length!==a)"("===i[a]?(n>0&&e(t,a+1,n-1,r,i,o,s),e(t+1,a+1,n,r,i,o+i[a],s)):")"===i[a]?(r>0&&e(t,a+1,n,r-1,i,o,s),t>0&&e(t-1,a+1,n,r,i,o+i[a],s)):e(t,a+1,n,r,i,o+i[a],s);else if(0===n&&0===r&&0===t){for(let e=0;e<s.length;e++)if(s[e]===o)return;s.push(o)}}(0,0,a,n,e,"",i);return `[${i.join(', ')}]`;};
console.log(parenSolve('(aa))(()a)))))'))