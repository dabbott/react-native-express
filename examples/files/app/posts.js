const types = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

export const actionCreators = {
  loading: () => ({ type: types.LOADING }),
  failure: () => ({ type: types.FAILURE }),
  success: (payload) => ({ type: types.SUCCESS, payload }),
}

export const initialState = {
  loading: true,
  error: false,
  posts: [],
}

export function reducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false }
    case types.SUCCESS:
      return {
        loading: false,
        error: false,
        posts: action.payload.map((post) => ({
          ...post,
          title: post.title.slice(0, 20),
          body: post.body.slice(0, 60),
        })),
      }
    case types.FAILURE:
      return { ...state, loading: false, error: true }
  }
}
