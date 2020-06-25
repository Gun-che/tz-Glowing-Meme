export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const request = () => ({ type: REQUEST })
export const success = () => ({ type: SUCCESS })
export const failure = () => ({ type: FAILURE })