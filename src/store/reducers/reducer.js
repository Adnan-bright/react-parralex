let initialState = {
  data: false,
  navRoute:0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SHARE_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'SHARE_NAV_ROUTE':
      return {
        ...state,
        navRoute: action.payload,
      };

    default:
      return state;
  }

}
export default reducer