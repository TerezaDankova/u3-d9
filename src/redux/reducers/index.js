const initialState = {
      favorites: [],
}

const mainReducer = (state = initialState, action) => {
      switch (action.type) {
            case "ADD_TO_FAV":
                  return {
                        ...state,
                        favorites: {
                        ...state.favorites, 

                        favorites: [...state.favorites, action.payload], 
                  }
            }
     
      default: 
        return state;
    };
};

export default mainReducer;