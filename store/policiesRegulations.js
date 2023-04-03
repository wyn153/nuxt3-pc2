import { defineStore } from 'pinia'
import request from '@/utils/axiosReq'

const usePoliciesRegulationsStore = defineStore('policiesRegulations', {
  state: () => {
    return {
      news: 'policiesRegulations'
    }
  },
  actions: {
    test() {
      request({
        url: '/test',
        isParams: true,
        method: 'get',
        data: {}
      })
        .then(({ data }) => {
          // console.log('test', data)
          if (!isEmpty(data)) {
            return true
          }
        })
        .catch((e) => {
          console.log('test', e)
          return false
        })
    }
  }
})

export default usePoliciesRegulationsStore
