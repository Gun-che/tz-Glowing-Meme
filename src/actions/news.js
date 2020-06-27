export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE'
export const GET_NEWS_ITEM_REQUEST = 'GET_NEWS_ITEM_REQUEST'
export const GET_NEWS_ITEM_SUCCESS = 'GET_NEWS_ITEM_SUCCESS'
export const GET_NEWS_ITEM_FAILURE = 'GET_NEWS_ITEM_FAILURE'
export const EDIT_NEWS_REQUEST = 'EDIT_NEWS_REQUEST'
export const EDIT_NEWS_SUCCESS = 'EDIT_NEWS_SUCCESS'
export const EDIT_NEWS_FAILURE = 'EDIT_NEWS_FAILURE'
export const DELETE_NEWS_REQUEST = 'DELETE_NEWS_REQUEST'
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS'
export const DELETE_NEWS_FAILURE = 'DELETE_NEWS_FAILURE'

export const createNewsRequest = () => ({
  type: GET_NEWS_REQUEST
});

export const createEditNewsRequest = ({ newsId, title, content, token }) => ({
  type: EDIT_NEWS_REQUEST,
  payload: {
    newsId,
    title,
    content,
    token
  }
});

export const createDeleteNewsRequest = ({ newsId, token }) => ({
  type: DELETE_NEWS_REQUEST,
  payload: {
    newsId,
    token,
  }
});

export const createGetNewsItemRequest = (newsId) => ({
  type: GET_NEWS_ITEM_REQUEST,
  payload: newsId
});
