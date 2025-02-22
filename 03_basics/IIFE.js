// Immediatly invoked function expression (IIFE)

(function chai(){
    //name IIFE
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected To ${name}`)    
})("Aniket");