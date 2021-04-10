import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "RJ",
          lastName: "McBain",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm RJ and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
