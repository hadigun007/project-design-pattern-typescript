import {Target, Adaptee, Adapter} from './adapter'

function main(target:Target){
    console.log(target.request())
}

// const target = new Target()

// main()

console.log('Client: I can work just fine with target objects:')
const target = new Target()
main(target)

console.log('');

const adaptee = new Adaptee()
console.log('Client: The adaptee has weird interface. see, I don\'t understand it:')
console.log('Adaptee: '+ adaptee.specificRequest())

console.log('');


console.log('Client: But i can work with it via Adapter:');
const adapter = new Adapter(adaptee)
main(adapter)
