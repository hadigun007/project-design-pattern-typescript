// import * as M from './singleton'

import Singletone from "./singleton"

function client(){
    const s1 = Singletone.getInstance()
    const s2 = Singletone.getInstance()

    if(s1 === s2) {
        console.log("singletone works, both variable are the same")
    }else {
        console.log("singletone are failed, variable are differents")
    }
}

client()