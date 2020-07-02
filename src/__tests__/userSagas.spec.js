import {
  put,
  takeEvery,
  call,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/user'
import api from '../utils/API'
import * as s from '../sagas/user'
import * as r from '../sagas/tokenRefresh'


describe('user Sagas', () => {
  describe('user Sagas worker', () => {
    describe('handler sign in request saga test', () => {
      const gen = s.handlerSignInRequest();

      it('auth2 request', () => {
        window.gapi = {
          auth2: {
            getAuthInstance: jest.fn()
          }
        }
        const eff = gen.next().value;

        expect(eff).toEqual(
          call(window.gapi.auth2.getAuthInstance),
        );
      });

      it('sign in request', () => {

        const auth2 = {
          signIn: jest.fn(),
        }
        const eff = gen.next(auth2).value;

        expect(eff).toEqual(
          apply(auth2, auth2.signIn),
        );
      });

      const response = {
        getAuthResponse: jest.fn(),
        getBasicProfile: jest.fn(),
      }

      it('token request', () => {

        const eff = gen.next(response).value;

        expect(eff).toEqual(
          apply(response, response.getAuthResponse),
        );
      });

      it('id request', () => {

        const token = {
          id_token: '12345'
        }
        const eff = gen.next(token).value;

        expect(eff).toEqual(
          apply(api, api.post, ['auth/google/', {
            token: token.id_token,
          }]),
        );
      });


      it('dispatch success', () => {

        const id = {
          data: {
            token: '123'
          }
        }
        const eff = gen.next(id).value;

        expect(eff).toEqual(
          put({
            type: a.SIGN_IN_SUCCESS,
            payload: {
              authToken: '12345',
              token: id.data.token,
            }
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('handler sign out request saga test', () => {
      const gen = s.handlerSignOutRequest();

      it('auth2 request', () => {
        window.gapi = {
          auth2: {
            getAuthInstance: jest.fn()
          }
        }
        const eff = gen.next().value;

        expect(eff).toEqual(
          call(window.gapi.auth2.getAuthInstance),
        );
      });

      it('sign out request', () => {

        const auth2 = {
          signOut: jest.fn(),
        }
        const eff = gen.next(auth2).value;

        expect(eff).toEqual(
          apply(auth2, auth2.signOut),
        );
      });


      it('dispatch success', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          put({
            type: a.SIGN_OUT_SUCCESS,
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })


    describe('handler token refresh request saga test', () => {
      const gen = r.handlerTokenRefreshRequest();

      it('auth2 request', () => {
        window.gapi = {
          auth2: {
            getAuthInstance: jest.fn()
          }
        }
        const eff = gen.next().value;

        expect(eff).toEqual(
          call(window.gapi.auth2.getAuthInstance),
        );
      });

      it('currentUser request', () => {

        const auth2 = {
          signOut: jest.fn(),
          currentUser: {
            get: jest.fn(),
          }
        }
        const eff = gen.next(auth2).value;

        expect(eff).toEqual(
          apply(auth2.currentUser, auth2.currentUser.get),
        );
      });


      it('reload token request', () => {

        const response = {
          reloadAuthResponse: jest.fn(),
        }
        const eff = gen.next(response).value;

        expect(eff).toEqual(
          apply(response, response.reloadAuthResponse)
        );
      });


      it('token request', () => {

        const token = {
          id_token: '12345',
        }
        const eff = gen.next(token).value;

        expect(eff).toEqual(
          apply(api, api.post, ['auth/google/', {
            token: token.id_token
          }])
        );
      });


      it('dispatch success', () => {

        const id = {
          data: {
            token: '123'
          }
        }

        const eff = gen.next(id).value;

        expect(eff).toEqual(
          put({
            type: a.REFRESH_TOKEN_SUCCESS,
            payload: {
              authToken: '12345',
              token: id.data.token,
            }
          })
        );
      });

      it('generator done', () => {

        gen.next()

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })

  describe('user Sagas watchers', () => {
    describe('worker sign in request saga test', () => {
      const gen = s.watchSignInRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.SIGN_IN_REQUEST, s.handlerSignInRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('worker sign out request saga test', () => {
      const gen = s.watchSignOutRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.SIGN_OUT_REQUEST, s.handlerSignOutRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('worker token refresh request saga test', () => {
      const gen = r.watchTokenRefreshRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.REFRESH_TOKEN_REQUEST, r.handlerTokenRefreshRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })
})