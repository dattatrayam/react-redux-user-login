import * as actions from "./actions/index"
import * as types from './constants/action-types'


describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.INIT_SEARCH,
      text
    }
    expect(actions.initSearch(text)).toEqual(expectedAction)
  })
})