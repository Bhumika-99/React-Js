import { getValue } from "@testing-library/user-event/dist/utils";
import {ADD_TODO, REMOVE_TODO} from "./Action.types";


export default (state, action) => {

    switch (action.type) {

        case ADD_TODO:
            return[...state, action.payload];
        case REMOVE_TODO:
                return state.filter(todo => todo.id !== action.payload);
            
        deault: 
            return state;
  
    }

}