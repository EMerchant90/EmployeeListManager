import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
  Actions.employeeList();
};
