module.exports= class Func { 
static tax(args1,args2=2.5){
  let args3=5
  if(isNaN(Number(args1))||isNaN(Number(args2))||!args1||args1<=0||args2<=0){
 throw new Error("Invalid argument")
  }else{
    let protax=Math.round(Number(args1)*args3/100)
    let wasitTax=Math.round(Number(args1)*Number(args2)/100)
    let tax =protax+wasitTax
    let all=Math.round(Number(args1)+tax)
    let object={"protax":protax,"wasitTax":wasitTax,"tax":tax,"all":all}
    return object
  }
}
}
