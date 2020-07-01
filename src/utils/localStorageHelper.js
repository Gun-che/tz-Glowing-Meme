import jwt from 'jsonwebtoken'

const token = 'tokenGoogle__token';
const authToken = 'authTokenGoogle__auth';
const loggedIn = 'loggedInGoogleSignIn__bool'



export const reedFromLocalStarage = () => {
  const token = localStorage.getItem(token) || '';
  const authToken = localStorage.getItem(authToken) || '';
  const loggedIn = JSON.parse(localStorage.getItem(loggedInSignIn)) || false;

  return { token, authToken, loggedIn }
}

export const writeLocalStorage = ({
  token,
  authToken,
  loggedIn,
}) => {
  if (!token || !authToken) throw Error('incomplete transaction')

  localStorage.setItem(loggedInSignIn, loggedIn);
  localStorage.setItem(token, token);
  localStorage.setItem(authToken, authToken);
}

export const cleareLocalStorage = () => {

  localStorage.setItem(loggedInSignIn);
  localStorage.setItem(token);
  localStorage.setItem(authToken);
}