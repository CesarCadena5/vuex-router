import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";

const dbzStore = {
    namespaced: true,
    state,
    mutations,
    actions
};

export default dbzStore