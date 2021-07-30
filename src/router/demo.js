


function expandedForm(num) {
    // Your code here
    var x = (num+"").split(""),lastRes = ""
    for (let y = 0; y < x.length; y++) {
        if(x[y] !== "0"){
            let aa = x.length - y - 1,number = "0"
            if(aa===0){
                console.log(x[y])
                lastRes = lastRes +  (lastRes ? " + " : '') +  x[y]
            }else{
                let z = x[y]
                for(let i =0;i<aa;i++){
                    z = z + number
                }
                lastRes = lastRes + (lastRes ? " + " : '') + z
            }
        }
    }
    return lastRes
  }
console.log( expandedForm(70304))



// function tribonacci(signature,n){
//     //your code here
//     var x = signature.length,arr = []
    
//     arr = arr.push[1]
//     console.log(arr)
//     // if(x === n){
//     //     arr.push(signature[x-2] + signature[x-1])
//     //     console.log(arr)
//     // }else{
//     //     console.log(x)
//     // }


   

    
// }




// tribonacci([1,1,1],10)
// function findNb(m) {
//     // your code
//     var y=0,x=1
    
//     while (y<=m) {
//         y += Math.pow(x,3)
//         x++
//         if(y > m){
//             return -1
//         }else {
//             return x
//         }
//     }

// }


// console.log(findNb(1071225))