// console.log("Hello Using 35")
//  var a = 89;
//  console.log("a=" +a);


// var a = 78;
// if (a >50){
//     var a = 90;
//     console.log("a=" +a);
// }
// console.log("a=" +a);

//arrow function
// const msg = (mymsg)=>{
//     console.log("hello"+mymsg);

// }
// msg("wlcm to fsd");


//  const sqrt=(num)=>{
//     return Math.sqrt(num);
//  }
//  console.log(sqrt(25));


//IIFE
// (()=>{console.log("hello....iife")})();
// function login(msg,error){
//     if(error){
//          console.log("errroris"+error);
//     }
//     else{
//         console.log("welcome"+msg);

//     }
// }
// function loginverification(username,password,callback){
//     if(username === "admin" && password === "password"){
//         callback(null, "Login successful");
//     } else {
//         callback("Invalid credentials", null);
//     }

// }
//  loginverification("admin", "password", login);

 
//  function randomNumberRepeated(num, callback) {
//     if (num <= 0) {
//         callback(null, "Login successful");
//     } else {
//         let randomNumber = Math.floor(Math.random() * 100);
//         callback(randomNumber, null);
//     }
// }

// randomNumberRepeated(5, function (randomNumber, message) {
//     if (message) {
//         console.log(message);
//     } else {
//         console.log("Random Number:", randomNumber);
//     }
// });
        
    setTimeout(() => {console.log("1st");
    setTimeout(() => {console.log("2nd");
        setTimeout(() => {console.log("3rd");
            setTimeout(() => {console.log("4th");   
                setTimeout(() => {console.log("5th");
                    setTimeout(() => {console.log("6th");
                         setTimeout(() => {console.log("7th");
                            setTimeout(() => {console.log("8th");
                                setTimeout(() => {console.log("9th");
                                    setTimeout(() => {console.log("10th");
                                        setTimeout(() => {console.log("11th");
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
     }, 1000);
}, 1000);
