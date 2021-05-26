const types = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

export const actionCreators = {
  loading: () => ({ type: types.LOADING }),
  failure: () => ({ type: types.FAILURE }),
  success: (photos) => ({
    type: types.SUCCESS,
    payload: { photos },
  }),
}

export const initialState = {
  loading: false,
  error: false,
  photos: [],
  nextPage: 1,
}

export function reducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false }
    case types.SUCCESS:
      return {
        loading: false,
        error: false,
        photos: [...state.photos, ...action.payload.photos],
        nextPage: state.nextPage + 1,
      }
    case types.FAILURE:
      return { ...state, loading: false, error: true }
  }
}
