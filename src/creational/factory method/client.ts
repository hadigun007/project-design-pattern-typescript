import { ConcereteCreator2, ConcreteCreator1, Creator } from "./factory_method"

function client(creator: Creator) {
    console.log('Client: i\'m not aware of the creator\s class, but it still works')
    console.log(creator.someOperation())
}

console.log('App launch with ConcreteCreator1')
client(new ConcreteCreator1)

console.log('App launch with ConcreteCreator2')
client(new ConcereteCreator2)

