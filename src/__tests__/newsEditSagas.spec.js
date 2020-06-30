import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/news'
import api from '../utils/API'
import * as s from '../sagas/newsEdit'

describe('news Edit(Edit, Create, Remove) Sagas', () => {
  describe('news Sagas worker', () => {
    describe('handler Delete request saga test', () => {

      const action = a.createDeleteNewsRequest({
        newsId: '1111',
        token: '1111',
      })


      const gen = s.handlerDeleteNewsRequest(action);

      it('delete news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.delete, [`feeds/${action.payload.newsId}`, {
            headers: {
              "x-access-token": action.payload.token
            }
          }])
        );
      });

      it('dispatch success', () => {
        const res = { 1: 1 }
        const eff = gen.next(res).value;

        expect(eff).toEqual(
          put({
            type: a.DELETE_NEWS_SUCCESS,
            payload: res
          }),
        );
      });

      it('dispatch news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          put({
            type: a.GET_NEWS_REQUEST,
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('handler Edit news request saga test', () => {

      const action = a.createEditNewsRequest({
        newsId: '1111',
        token: '1111',
        title: '1111',
        content: '1111',
      })


      const gen = s.handlerEditNewsRequest(action);

      it('delete news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.put, [`feeds/${action.payload.newsId}`, {
            title: action.payload.title,
            content: action.payload.content,
          }, {
            headers: {
              "x-access-token": action.payload.token
            }
          }])
        );
      });

      it('dispatch success', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          put({
            type: a.EDIT_NEWS_SUCCESS,
          }),
        );
      });

      it('dispatch news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          put({
            type: a.GET_NEWS_REQUEST,
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('handler Create news request saga test', () => {

      const action = a.createCreateNewsRequest({
        token: '1111',
        title: '1111',
        content: '1111',
      })


      const gen = s.handlerCreateNewsRequest(action);

      it('delete news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.post, [`feeds/`, {
            title: action.payload.title,
            content: action.payload.content,
          }, {
              headers: {
                "x-access-token": action.payload.token
              }
            }])
        );
      });

      it('dispatch success', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          put({
            type: a.CREATE_NEWS_SUCCESS,
          }),
        );
      });

      it('dispatch news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          put({
            type: a.GET_NEWS_REQUEST,
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })


    describe('watcher sagas test', () => {
      describe('watcher Delete news request saga test', () => {
        const gen = s.watchDeleteNewsRequest();

        it('takeEvery', () => {
          const eff = gen.next().value;

          expect(eff).toEqual(
            takeEvery(a.DELETE_NEWS_REQUEST, s.handlerDeleteNewsRequest)
          );
        });

        it('generator done', () => {

          const eff = gen.next().done;

          expect(eff).toBeTruthy();
        });
      })
    })

    describe('watcher Edit news request saga test', () => {
      const gen = s.watchEditNewsRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.EDIT_NEWS_REQUEST, s.handlerEditNewsRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })

    describe('watcher Create news request saga test', () => {
      const gen = s.watchCreateNewsRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.CREATE_NEWS_REQUEST, s.handlerCreateNewsRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })
})