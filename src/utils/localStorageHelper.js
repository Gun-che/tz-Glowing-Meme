
export const tokenGoogle = 'tokenGoogle__token';
export const authTokenGoogle = 'authTokenGoogle__auth';
export const loggedInGoogleSignIn = 'loggedInGoogleSignIn__bool'



export const reedFromLocalStorage = () => {
  const token = localStorage.getItem(tokenGoogle) || '';
  const authToken = localStorage.getItem(authTokenGoogle) || '';
  const loggedIn = JSON.parse(localStorage.getItem(loggedInGoogleSignIn)) || false;

  return { token, authToken, loggedIn }
}

export const writeLocalStorage = ({
  token,
  authToken,
  loggedIn,
}) => {
  if (!token || !authToken) throw Error('incomplete transaction')

  localStorage.setItem(loggedInGoogleSignIn, loggedIn);
  localStorage.setItem(tokenGoogle, token);
  localStorage.setItem(authTokenGoogle, authToken);
}

export const cleareLocalStorage = () => {

  localStorage.setItem(loggedInGoogleSignIn);
  localStorage.setItem(tokenGoogle);
  localStorage.setItem(authTokenGoogle);
}