export class Publisher{

    constructor(emitter){
      this.emitter = emitter;
    }
    publisherMessage(){

        this.emitter.emit('greeting','helloworld');
    }
  }