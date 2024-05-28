import {Publisher} from "./publisher.mjs";
import {Subscriber} from "./subscriber.mjs";
import {EventEmitter} from "events";

c\
const publisher = new Publisher(emitter);
const subscriber = new Subscriber(emitter);

subscriber.subscriberToEvent();
publisher.publisherMessage();



