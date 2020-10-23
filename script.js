  // <<<<<<<GET Total Value>>>>>>>
  arr=[10,20,30,40];
 console.log('total',arr.reduce((a,b)=>a+b));

//   arr=[10,20,30,40];
//  total=arr.reduce((a,b)=>{
//    console.log('a:'+a+' b:'+b);
//  return a+b},0) //<-- 2 args but 1arg is give a:10,b:20 -->1st 
//  console.log(total);


// <<<<<<<GET Max Value>>>>>>>

arr=[10,20,30,40]
console.log('max',arr.reduce((a,b)=>a>b? a: a=b));

// max=arr.reduce((a,b)=>{
//   if(a>b){
//   return a
//   }
//   else{
//     return a=b
//   }
// });
// console.log(max)

