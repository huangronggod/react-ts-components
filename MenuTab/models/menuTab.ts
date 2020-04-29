export default {
  namespace: 'MenuTabStore',
  state: {
    menuTabList: []
  },
  effects: {
    *updateTabList({ payload }: any, { call, put, select }: any) {
      yield put({
        type: 'save',
        payload: { menuTabList: payload }
      })
    },

  },
  reducers: {
    save(state: any, { payload }: any) {
      return { ...state, ...payload }
    }
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('pathname', pathname)
      })
    }
  }
}
