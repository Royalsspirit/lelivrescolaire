import students from '../../fixtures/students.json';
export const getUsers = () => (dispatch) => {
  try {
    dispatch({
      type: 'GET_USERS',
      students,
    });
  } catch {
    dispatch({
      type: 'GET_USERS_ERROR',
      error: 'error',
    });
  }
};
export const addUser = (student, currentStudents) => (dispatch) => {
  dispatch({
    type: 'ADD_USER',
    students: [...currentStudents, student],
  });
};

export const updateUser = () => (dispatch) => {
  dispatch({
    type: 'UPDATE_USER',
  });
};

export const deleteUser = (id, currentStudents) => (dispatch) => {
  const newStudents = currentStudents.filter((item) => item.id != id);
  dispatch({
    type: 'DELETE_USER',
    students: newStudents,
  });
};
