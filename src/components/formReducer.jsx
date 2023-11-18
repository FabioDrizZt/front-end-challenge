export const ACTIONS = {
  SET_FIELD: 'SET_FIELD',
  SUBMIT_FORM: 'SUBMIT_FORM',
  RESET_FORM: 'RESET_FORM'
}

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FIELD:
      return { ...state, [action.field]: action.value }
    case ACTIONS.SUBMIT_FORM:
      return { ...state, ...action.initialState }
    case ACTIONS.RESET_FORM:
      return action.initialState
    default:
      return state
  }
}

export default formReducer
