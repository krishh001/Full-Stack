function greetings(name){
    return function(){
        console.log("welcome to RICr!!!", name);
    };
}

const greetKrishna = greetings("Krishna");
const greetSaurabh = greetings("Saurabh");

greetKrishna();
greetSaurabh();



