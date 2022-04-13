// {
// function yolo(){
//     var a = 10;
//     function cb (err, res){
//         if(err){

//             console.log(err);
//         }
//         else{
//             console.log("hello how are you ?");
//         }
//     }
//     setTimeout(cb, 5000);
//     console.log(a);
// }

// yolo();
// let b = 100;
// console.log(b);
// }


// const request = require("request");
// let url = "https://www.worldometers.info/coronavirus/";
// function yolo(){
//     var a = 10;
//     function cb(err, res, body){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("hello how are you ?");
//             console.log("statusCode is ", res.statusCode);
//         }
//     }
//     request(url, cb);
//     console.log(a);
// }

// yolo();
// let b = 100;
// console.log(b)


// print 1 to 10 with 2 seconds delay each time
for(let i = 1; i <= 10; i++){
    setTimeout(() => {
        console.log(i);
    }, 2000*i);
}