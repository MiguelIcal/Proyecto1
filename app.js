class KeysandValues { 

    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
   keysyvalues(){
    return `[["a", "b", "c"] ["${this.a}", "${this.b}", "${this.c}"]]`;
   }
}

const keysandValues1  = new KeysandValues(1, 2, 3);
const keysandValues2  = new KeysandValues("Apple", "Microsoft", "Google");
const keysandValues3  = new KeysandValues(true, false, undefined)


var keysandValues = {a:1, b:2, c:3}
console.log(keysandValues);
console.log(keysandValues1.keysyvalues());
var keysandValues = {a:"Apple", b:"Microsoft", c:"Google"}
console.log(keysandValues);
console.log(keysandValues2.keysyvalues());
var keysandValues = {a:"true", b:"false", c:"undefine"}
console.log(keysandValues);
console.log(keysandValues3.keysyvalues());
