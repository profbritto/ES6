const ages=[12,85,79,63,64];
const ages2=[324243,12,85,79,63,64,97987];
const ages3=[12312324243,166442,8465,796,6356,64,97987];
const allages=ages.concat(ages2).concat([5]).concat(ages3);
const allages2=[...ages,...ages2,5,...ages3];
//console.log(allages);
//console.log(allages2);

const business=3232;
const business1=9895;
const business2=225;
const takapoysa=[25,988,76];
const maximum=Math.max(business,business1,business2);
const maximum2=Math.max(...takapoysa);
console.log(maximum);
console.log(maximum2);

