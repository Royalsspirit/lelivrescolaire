const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        students: action.students,
      };
    case 'ADD_USER':
      return {
        ...state,
        students: action.students,
      };
    case 'DELETE_USER':
      return {
        ...state,
        students: action.students,
      };
    default:
      return state;
  }
};
