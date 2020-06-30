import {
  put,
  takeEvery,
  call,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/user'
import api from '../utils/API'
import * as s from '../sagas/user'

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
          id_token: '123'
        }
        const eff = gen.next(token).value;

        expect(eff).toEqual(
          apply(api, api.post, ['auth/google/', {
            token: token.id_token
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
              profile: response.getBasicProfile(),
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
  })

  describe('user Sagas watcher', () => {
    describe('handler sign in request saga test', () => {
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

    describe('handler sign out request saga test', () => {
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
  })
})