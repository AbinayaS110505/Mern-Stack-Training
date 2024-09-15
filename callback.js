// function suc()
// {
//     console.log("Success");
// }
// function fail()
// {
//     console.log("Fail")
// }
// function error(){
//     console.log("Error7")
// }
// function exec(data, callback)
// {
//     if(data)
//     {
//         console.log(`balance : ${data}`);
//     }
//     setTimeout(callback, 3000)
// }
// function trigger(data)
// {
//     if(data>0)
//         exec(data, suc)
//     else if(data<=0)
//         exec(data,fail)
//     else
//     exec("0",error)
// }
// let data=prompt("Eneter Ammount: ")
// trigger(data)
async function API()
{
    try{
            const response =await fetch('https://66e526f75cc7f9b6273c6ca1.mockapi.io/register')
            const data =await response.json()
            return data;
}       
    catch(error)
    {
    console.log(error)
    }
}
async function Apidata() {
    const apidata=await API()
    console.log(apidata)
   const activ=apidata.filter(data=>data.isActive)
   console.log(activ)
  const structure=apidata.map((data)=>{console.log(data)})
}
Apidata()