const bestPath = (e)=>{const a=e[0],n=e[1],r=[];r.length=a;for(let e=0;e<a;e++)r[e]=1;for(let e=1;e<n;e++)for(let e=1;e<a;e++)r[e]+=r[e-1];return r[a-1]}
console.log(bestPath([12,7]))