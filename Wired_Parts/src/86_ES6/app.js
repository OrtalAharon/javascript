function a() {
    function b() {
        console.log(myVar)
    }
    b();
}
var myVar =1; //added to window object
a();