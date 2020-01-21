import { UPDATE_HEIGHT_ABOUT, UPDATE_HEIGHT_EXP, UPDATE_HEIGHT_SKILLS } from './types.js';

export const updateHeightAbout = (height) => ({ type: UPDATE_HEIGHT_ABOUT, payload: height});
export const updateHeightExp = (height) => ({type: UPDATE_HEIGHT_EXP, payload: height});
export const updateHeightSkills = (height) => ({type: UPDATE_HEIGHT_SKILLS, payload: height});