export const auth2Init = () => {
  const _onInit = (auth2) => {
    console.log('init ok', auth2)
  }

  const _onErr = (err) => {
    console.error('error', err)
  }

  if (window.gapi) {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
      })
        .then(_onInit, _onErr)
    })
  } else {
    setTimeout(auth2Init)
  }
}