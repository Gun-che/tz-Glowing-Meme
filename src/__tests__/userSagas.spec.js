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

      it('token request', () => {
        const response = {
          getAuthResponse: jest.fn()
        }

        const eff = gen.next(response).value;

        expect(eff).toEqual(
          apply(response, response.getAuthResponse),
        );
      });

      it('auth2 request', () => {

        const response = {
          getAuthResponse: jest.fn()
        }
        const eff = gen.next(response).value;

        expect(eff).toEqual(
          apply(response, response.getAuthResponse),
        );
      });
    })
  })
})