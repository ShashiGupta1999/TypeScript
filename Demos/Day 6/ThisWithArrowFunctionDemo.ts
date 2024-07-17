function functionDemo(){
    console.log(this);
}
functionDemo();

let sString = () => {
    console.log(this);
}
sString();