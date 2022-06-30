const initialState = {
  status: false,
};

function popupReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_EVENT':
      return action.modalParams;

    case 'CLOSE_EVENT':
      return { status: false };
    default:
      return state;
  }
}

export default popupReducer;
