import userSubscribers from './subscribers/user.subscribers.js';

function configureEvents (EE) {
  return {
    user: {
      register: {
        eventName: 'on-user-register',
        emit: function () {
          EE.emit(this.eventName, userSubscribers.register({ eventName: this.eventName, ...arguments }));
        },
      },
      login: {
        eventName: 'on-user-login',
        emit: function () {
          EE.emit(this.eventName, userSubscribers.login({eventName: this.eventName, ...arguments}));
        },
      },
    },
  };
}


export default {
  configureEvents
};
