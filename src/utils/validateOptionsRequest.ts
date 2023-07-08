import { AxiosRequestConfig } from 'axios';
import { OptionsRequest } from '../interfaces/fetch';

export const MESSAGE_ERROR = {
  NOT_DEFINED: 'options Is not defined',
  INCORRECT: 'options Is not correct',
};

export function validateOptionsRequest(options: OptionsRequest): boolean {
  const requiredFields: Array<keyof AxiosRequestConfig> = ['method', 'url', 'headers'];

  if (!options) {
    throw new Error(MESSAGE_ERROR.NOT_DEFINED);
  }

  for (const field of requiredFields) {
    if (!options.hasOwnProperty(field)) {
      throw new Error(MESSAGE_ERROR.INCORRECT);
    }
  }

  return true;
}
