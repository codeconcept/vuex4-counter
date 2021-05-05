import { createStore } from 'vuex';

import user from '../store/modules/user';
import counter from '../store/modules/counter';

const store = createStore({
  modules: {
    user,
    counter
  },
});

export default store;
