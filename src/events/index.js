import EventEmitter from 'eventemitter3';
import events from './events.js';

/**
 * Capa de eventos.
 * 
 * Esta capa será la encargada de gestionar la configuración de los eventos de la aplicación.
 *  
 * Desde este punto se exportará un único objeto que será el responsable de registrar subscribers y emitir los eventos.
 * Esta NO es una arquitectura basada en pub/sub o eventos exclusivamente.
 * La implementación de eventos en la aplicación es opcional, pero recomendada.
 * Se pretende usar a modo de combinación con la arquitectura hexagonal por capas y de manera complementaria a 
 * los servicios y controladores de cada entidad. 
 * 
 * El objetivo de esta capa es la de distribuir diferentes tareas llamando a servicios de forma asíncrona cuando se 
 * produzca un evento o acción concreta.
 * 
 * Por el momento solo se ha implementado un ejemplo de uso de eventos con un único subscriber.
 */

/**
 * Event Emitter instance loader
 */
const EE = new EventEmitter();

/**
 * Return 
 */
export default events.configureEvents(EE);
