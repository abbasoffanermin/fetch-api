//1--> https://simple-grocery-store-api.glitch.me/products

// fetch('https://simple-grocery-store-api.glitch.me/products')
// .then(response => response.json())
// .then(data => {
//   console.log(data)
// })
// .catch(error => {
//   console.log(error)
// })
//---------------------------------------------------------------------------------------

// const callApi1= async()=>{
//  const response = await fetch('https://simple-grocery-store-api.glitch.me/products');

//  console.log(response.body);
//  console.log(response.headers);

// const data=await response.json()
// console.log(data);
// }
// callApi1();

//2 -->https://simple-grocery-store-api.glitch.me/carts

// fetch('https://simple-grocery-store-api.glitch.me/carts')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

//-----------------------------------------------------------------------------
// const calApi2=async ()=>{
//     const response=await fetch('https://simple-grocery-store-api.glitch.me/carts')
//     console.log(response.headers);
//     console.log(response.body);
//     const data=await response.json()
// }

// calApi2()

//3-->https://simple-grocery-store-api.glitch.me/orders
// fetch('https://simple-grocery-store-api.glitch.me/orders')
// .then(response=>response.json())
// .then(data=>console.log(data))

// const callApi3=async ()=>{
//   const response=await fetch('https://simple-grocery-store-api.glitch.me/orders')
//   console.log(response.headers);
//   console.log(response.body);
//   const data=await response.json()
//   console.log(data)
// }



//4-->http://www.boredapi.com/api/activity/

// fetch('http://www.boredapi.com/api/activity/')
// .then(response=>response.json())
// .then(data=>console.log(data))


// const calApi4=async ()=>{
//   const response=await fetch('http://www.boredapi.com/api/activity/')
// console.log(response.headers);
// console.log(response.body);
//   const data=await response.json()
//   
// }
// calApi4()

//5-->https://api.thecatapi.com/v1/images/0XYvRd7oD

// fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
// .then(response=>response.json())
// .then(data=>console.log(data))


// const callApi5=async ()=>{
//   const response=await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
// console.log(response.headers);
// console.log(response.body);
//   const data=await response.json()
//   
// }
// callApi5()

//6-->https://pokeapi.co/api/v2/pokemon/ditto

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response=>response.json())
// .then(data=>console.log(data))


// const callApi6=async ()=>{
//   const response=await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// console.log(response.headers);
// console.log(response.body);
//   const data=await response.json()
 
// }
// callApi6()

//7-->https://api.nasa.gov/planetary/apod

// fetch('https://api.nasa.gov/planetary/apod')
// .then(response=>response.json())
// .then(data=>console.log(data))


// const callApi7=async ()=>{
//   const response=await fetch('https://api.nasa.gov/planetary/apod')
// console.log(response.headers);
// console.log(response.body);
//   const data=await response.json()
//  
// }
// callApi7()

// 8-->https://fakestoreapi.com/products

// fetch('https://fakestoreapi.com/products')
// .then(response=>response.json())
// .then(data=>console.log(data))

// const callApi8=async ()=>{
//   const response=await fetch('https://fakestoreapi.com/products')
// console.log(response.headers);
// console.log(response.body);
//   const data=await response.json()
//  
// }
// callApi8()
//9-->https://fakestoreapi.com/carts

// fetch('https://fakestoreapi.com/carts')
// .then(response=>response.json())
// .then(data=>console.log(data))


// const callApi9=async ()=>{
//   const response=await fetch('https://fakestoreapi.com/carts')
//   const data=await response.json()
//    console.log(response.headers);
//   console.log(response.body);
// }
// callApi9()

//10-->https://fakestoreapi.com/users

// fetch('https://fakestoreapi.com/users')
// .then(response=>response.json())
// .then(data=>console.log(data))


// const callApi10=async ()=>{
//   const response=await fetch('https://fakestoreapi.com/users')
//   const data=await response.json()
//    console.log(response.headers);
//   console.log(response.body);
// }
// callApi10()


// query and params
const callApi11=async ()=>{
  const response=await fetch('https://fakestoreapi.com/products?limit=5')
  const data=await response.json()
 .then(data => {
    console.log(data);
 })
 .catch(error => {
    console.log('error');
 })
   console.log(response.headers);
  console.log(response.body);
}
callApi11()


const callApi12=async ()=>{
  const response=await fetch('https://fakestoreapi.com/products/1')
  const data=await response.json()
 .then(data => {
    console.log(data);
 })
 .catch(error => {
    console.log('error');
 })
   console.log(response.headers);
  console.log(response.body);
}
