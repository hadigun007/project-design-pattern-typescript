export interface Builder {
    productPartA(): void;
    productPartB(): void;
    productPartC(): void;
}

export class ConcreteBuilder1 implements Builder {
    private product!:Product1;

    constructor(){
        this.reset()
    }
    productPartA(): void {
        this.product.parts.push("PartA1")
    }
    productPartB(): void {
        this.product.parts.push("PartB1")
    }
    productPartC(): void {
        this.product.parts.push("PartC1")
    }

    public reset(){
        this.product = new Product1()
    }

    public getProduct(){
        const result = this.product;
        this.reset()
        return result;
    }
}

export class Product1 {
    public parts:string[] = []

    public listParts():void{
        console.log(`Product part: ${this.parts.join(', ')}\n`)
    }
}


export class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder):void{
        this.builder = builder
    }

    public buildMinimalViableProduct(){
        this.builder.productPartA()
    }

    public buildFullFeaturedProduct():void {
        this.builder.productPartA()
        this.builder.productPartB()
        this.builder.productPartC()
    }
}