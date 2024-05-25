export class Subscriber{
    constructor(emitter){
        this.emitter = emitter;
    }
        subscriberToEvent(){
            this.emitter.on('greeting',(message)=>{
                console.log('Receive Message: ${messqge}');
            });
        }

}