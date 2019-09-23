var regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let s=require("readline");
var z=s.createInterface(process.stdin,process.stdout);
z.question("enter username",function(name){
    if (regx.test(name)){
        console.log("valid username");
    }
    else{
        console.log("Invalid username");
    }
    process.exit();
});