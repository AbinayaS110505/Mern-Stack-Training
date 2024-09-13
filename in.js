function fun1()
{
    if(c==1){
        console.log("function 3")}
    else{
    console.log("function 1")
     c=1;}
}
const fun2 = () =>
{
      for(let i=0;i<3;i++)
    console.log("function 2")
}
const fun3=() => {
    console.log(fun1());
}
var c=0;
     fun1();
     fun2();
     fun3();