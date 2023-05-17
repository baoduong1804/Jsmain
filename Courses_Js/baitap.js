//reverseArray
// list1 =[2,4,3]
// list2 =[5,6,4]
// function reverseArray(param){
//     output=[]
//     for (var i=param.length- 1;i>=0;i-- ){
//     output.push(param[i])
//     }
//         return output
// }
// var Num1 = new reverseArray(list1)
// var Num2 = new reverseArray(list2)
// var result= Number(reverseArray(list1).join(''))+Number(reverseArray(list2).join(''))
// console.log(result.toString().split(''))

// var nums=[2,3,5,6,34]
// function maxArray(param){
//     var max=param[0]
//     for(var i =1 ;i<param.length;i++){
//         if(param[i]<max){
//             max=param[i]
//         } else {max}
//     }
//     return max
// }

// accounts = [[1,5],[7,3],[3,5]]

// function Aarray(param){
//     var box=[]
//     for(var i=0;i<param.length;i++){
//         let sum=0;
//         for(var j=0;j<param[i].length;j++){
//             sum+=param[i][j]
//         }
//         box.push(sum)
//     }
//     return box
// }
// var result= new maxArray(nums)
// // var Num= new Aarray(accounts)
// console.log(result)

var myArray=[9,8,3,5,2,7,1,15,10]
// function sapxep(param){
//     for(var i=0;i<param.length;i++){
//         var min_index =i;
//         for(var j=i+1;j<param.length;j++){
//         if(param[j]<param[min_index]){
//             min_index=j
//         } 
//     }
//     if(min_index!==i){
//         var temp = param[i];
//         param[i] = param[min_index];
//         param[min_index]=temp;
//     }
//     }
//     return param
// }
// var result= new sapxep(myArray)
// console.log(result)

// function sortArray(param){

// }
// myArray.shift()
// console.log(myArray)

var tong_val = myArray.reduce(function(accumulator,element){
    if(accumulator<element){
        console.log(accumulator)
        return accumulator
    } else {
        return element
    }
   
})
console.log(tong_val)

//4/4/42023
console.log(123231)