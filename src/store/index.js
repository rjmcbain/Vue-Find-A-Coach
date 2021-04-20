import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/request/index";

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId() {
      return "c3";
    },
  },
});

export default store;
