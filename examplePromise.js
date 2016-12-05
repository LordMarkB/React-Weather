//challenge area take two params, check if they are both numbers, if not throw error, else throw the sum

function addPromise (a,b){
    return new Promise(function(resolve,reject){
      if(typeof a == 'number' && typeof b =='number'){
        var sum = a+b;
        resolve(sum);
      } else {
        reject("error, one of those two is not a number");
      }
    });
}

addPromise(7,8).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});

addPromise(34,34).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});

addPromise("hello",8).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});

addPromise(8,"hello").then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});

//==================================================================================================
// //BELOW IS THE PROMISE CASE
// function getTempPromise (location){
//     return new Promise(function (resolve, reject) {
//         setTimeout(function(){
//             resolve(79);
//             reject("city not found")            
//         },1000)
//     });
// }

// getTempPromise('Fremont').then(function(temp){
//     console.log('success promise', temp)
// },function(err){
//     console.log('promise error', err)
// })
//==================================================================================================
// function getTempCallback(location, callback){
//     callback(undefined,78)
//     callback('city not found');
// }

// getTempCallback('Philadelphia', function (err,temp){
//     if(err){
//         console.log('error',err);
//     } else {
//         console.log('success', temp);
//     }
// });