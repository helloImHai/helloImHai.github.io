import { UPDATE_HEIGHT_ABOUT, UPDATE_HEIGHT_EXP, UPDATE_HEIGHT_SKILLS } from '../actions/types.js';

const initialState = {
  about: 0,
  experience: 0,
  skills: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_HEIGHT_ABOUT:
      return { ...state, about: payload }
    case UPDATE_HEIGHT_EXP:
      return { ...state, experience: payload }
    case UPDATE_HEIGHT_SKILLS:
      return { ...state, skills: payload }
    default:
      return state
  }
}
