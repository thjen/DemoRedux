export default (state, action) => {
    switch(action.type) {
        case "SET_TECHNOLOGY": 
            return {
                ...state, // backup state
                tech: action.payload.tech, // set state
            }
        default:
            return state;
    }
};