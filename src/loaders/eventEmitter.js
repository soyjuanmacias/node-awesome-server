import EventEmitter from 'eventemitter3';
import events from '../events/index.js';
import { onUserRegister, onUserLogin } from '../events/user.events.js';

/**
 * Event Emitter instance loader
 */
const EE = new EventEmitter();

/**
 * User events
 */
EE.on(events.user.register, onUserRegister);
EE.on(events.user.login, onUserLogin);

export default EE;