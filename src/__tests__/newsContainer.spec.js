import React from 'react'
import { shallow } from 'enzyme'
import { NewsContainer } from '../containers/NewsContainer'

describe('News container', () => {
  const props = {
    handlerRequest: jest.fn(),
    data: [],
    isFetching: false,
    msg: '',
    deleteRequest: jest.fn(),
    token: '123',
    loggedIn: true,
  }

  describe('News container init', () => {
    const newsContainer = shallow(<NewsContainer {...props} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })

  describe('News container render <News>', () => {
    const nextProps = {
      ...props,
      data: [{}, {}, {}]
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })

  describe('News container with error', () => {
    const nextProps = {
      ...props,
      msg: 'Something going wrong',
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })


  describe('News container loading', () => {
    const nextProps = {
      ...props,
      isFetching: true,
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)
    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })
})


