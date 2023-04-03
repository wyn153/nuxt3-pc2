import { defineStore } from 'pinia'
import request from '@/utils/axiosReq'

const useServiceGuideStore = defineStore('serviceGuide', {
  state: () => {
    return {
      news: 'serviceGuide'
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

export default useServiceGuideStore
