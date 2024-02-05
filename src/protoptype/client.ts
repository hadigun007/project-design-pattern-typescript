import { ComponentWithBackReference, Prototype } from "./prototype"

function main(){
    const p1 = new Prototype()
    p1.primitive = 245
    p1.component = new Date()
    p1.component = new ComponentWithBackReference(p1)

    p1.primitive = 222
    const p2 = p1.clone()

    if(p1.primitive == p2.primitive){
        console.log("Primitif field valuees have been  carried over to a clone ");
    }else{
        console.log("Primitif values have not copied"); 
    }

}


main()