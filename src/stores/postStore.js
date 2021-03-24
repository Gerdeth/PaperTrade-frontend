import{EventEmitter} from "events";
import dispatcher from "../appDispatcher";
import ActionTypes from "../actions/actionTypes";

const CHANGE_EVENT  = "PassedComponent";
 let user=[];
 let allUsers=[];
 let topMovers=[];
 let portfolio= [];

 class PostStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getTopMovers() {
        return topMovers;
    }
}
const store =new PostStore;

dispatcher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.loadTopMovers:
            topMovers = action.topMovers;
            store.emitChange();
            break;
        default:
    }
});

export default store;