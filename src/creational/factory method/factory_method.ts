abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod(
            )
        return `Creator: the same creator's code has just work with ${product.operation()}`;
    }
}


class Product {
    public operation(){}
}



class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}

class ConcreteProduct1 implements Product{
    public operation(): string {
       return `{Result of ConcereteProduct1}`;
    }
}

class ConcereteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2()
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return `{Result of ConcereteProduct2}`;
    }
    
}



export {Creator, Product, ConcreteProduct1, ConcreteProduct2, ConcreteCreator1, ConcereteCreator2}



