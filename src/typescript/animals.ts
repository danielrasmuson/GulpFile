interface Animal {
    name(): void;
}

class Elephant implements Animal {
    constructor() {
    }
    public name() {
        console.log("Elephant");
    }
}

class Horse implements Animal {
    constructor() {
    }
    public name() {
        console.log("Horse");
    }
}

