import { ConcreteBuilder1, Director } from "./builder";

function main(dircetor: Director){

    const builder = new ConcreteBuilder1()
    dircetor.setBuilder(builder)


    console.log('Standart Basic Product: ')
    dircetor.buildMinimalViableProduct()
    builder.getProduct().listParts()


    console.log('Standard Full Featured product')
    dircetor.buildFullFeaturedProduct()
    builder.getProduct().listParts()


    console.log('Custom Product')
    builder.productPartA()
    builder.productPartC()
    builder.getProduct().listParts()


}


const director = new Director()
main(director)