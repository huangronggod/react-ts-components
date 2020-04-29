import store from '@utils/ypStore'

export default {
  namespace: 'userInfo',
  state: {
    userInfo: store.get('userInfo') || null
  },
  effects: {},
  reducers: {},
  subscriptions: {}
}
