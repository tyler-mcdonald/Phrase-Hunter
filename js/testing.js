

class Test {
    constructor(x) {
        this.x = x + 2;
    }

    add1() {
        return this.x +1
    }
}

const test = new Test(5);
console.log(test);
test.add1();

console.log(test);