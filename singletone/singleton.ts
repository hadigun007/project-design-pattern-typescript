class Singletone {
    private static instance: Singletone;

    private constructor(){}

    public static getInstance(){
        if(!Singletone.instance){
            Singletone.instance = new Singletone();
        }
        return Singletone.instance;
    }
}

export default Singletone