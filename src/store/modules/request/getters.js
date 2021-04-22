export default {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.reuests && state.requests.length > 0;
  },
};
