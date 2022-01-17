const getTheSpiral = (e)=>{const a=[];let n=0,i=e.length-1,o=0,s=e[0].length-1,l=0;for(;;){for(let t=o;t<=s;t++)a[l]=e[n][t],++l;if(++n>i)break;for(let t=n;t<=i;t++)a[l]=e[t][s],++l;if(--s<o)break;for(let t=s;t>=o;t--)a[l]=e[i][t],++l;if(--i<n)break;for(let t=i;t>=n;t--)a[l]=e[t][o],++l;if(++o>s)break}return `[${a.join(', ')}]`;}

console.log(getTheSpiral([
    [46,21, 4,13, 9,26,50,39,34,17,29,40,36, 9],
    [24,31, 1,31,36, 4,28, 9,11,11,44,20,10,29],
    [24, 9,22,22,36,31,23, 5,16,16,26, 2, 8,22],
    [10,10,49,28,13, 8, 2,37,17,21,27,34,30,33],
    [29,45, 4,42,21, 2,25,29,20,12,35,39,50,41]
]))