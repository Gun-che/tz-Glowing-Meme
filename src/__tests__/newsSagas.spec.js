import {
  put,
  takeEvery,
  apply
} from 'redux-saga/effects'
import * as a from '../actions/news'
import api from '../utils/API'
import * as s from '../sagas/news'

describe('news Sagas', () => {
  describe('news Sagas worker', () => {
    describe('handler all news request saga test', () => {
      const gen = s.handlerNewsRequest();

      it('all news request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.get, ['feeds/']),
        );
      });

      it('dispatch success', () => {

        const news = {
          data: {
            feeds: ['123']
          }
        }
        const eff = gen.next(news).value;

        expect(eff).toEqual(
          put({
            type: a.GET_NEWS_SUCCESS,
            payload: news.data.feeds
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })


    describe('handler news item request saga test', () => {
      const action = {
        payload: 'aaa'
      }
      const gen = s.handlerNewsItemRequest(action);

      it('news item request', () => {

        const eff = gen.next().value;

        expect(eff).toEqual(
          apply(api, api.get, [`feeds/${action.payload}`]),
        );
      });

      it('dispatch success', () => {

        const news = {
          data: {
            feed: {}
          }
        }
        const eff = gen.next(news).value;

        expect(eff).toEqual(
          put({
            type: a.GET_NEWS_ITEM_SUCCESS,
            payload: [news.data.feed]
          }),
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })



    describe('watcher news request saga test', () => {
      const gen = s.watchNewsRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.GET_NEWS_REQUEST, s.handlerNewsRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })



    describe('watcher news item request saga test', () => {
      const gen = s.watchNewsItemRequest();

      it('takeEvery', () => {
        const eff = gen.next().value;

        expect(eff).toEqual(
          takeEvery(a.GET_NEWS_ITEM_REQUEST, s.handlerNewsItemRequest)
        );
      });

      it('generator done', () => {

        const eff = gen.next().done;

        expect(eff).toBeTruthy();
      });
    })
  })
})