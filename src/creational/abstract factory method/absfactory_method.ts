interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        throw new Error("Method not implemented.");
    }
    createProductB(): AbstractProductB {
        throw new Error("Method not implemented.");
    }
    
}
class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        throw new Error("Method not implemented.");
    }
    createProductB(): AbstractProductB {
        throw new Error("Method not implemented.");
    }
    
}
class ConcreteProductA implements AbstractProductA {
    usefullFunctionA(): string {
        throw new Error("Method not implemented.");
    }
}
class ConcreteProductB implements AbstractProductB {
    usefullFunctionB(): string {
        throw new Error("Method not implemented.");
    }
}

interface AbstractProductA {
    usefullFunctionA():string
}
interface AbstractProductB {
    usefullFunctionB():string
}

class ConcreteProductB1 implements AbstractProductA {
    usefullFunctionA(): string {
        throw new Error("Method not implemented.");
    }
    
}