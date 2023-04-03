import { defineStore } from "pinia";
// import request from '@/utils/axiosReq'

export const useIndustryNews = defineStore("industryNews", {
  state: () => {
    return {
      news: "industryNews",
      articleList: [
        {
          id: 1,
          type: "要闻",
          title: "全国首创！苏州市房屋安全医院来了",
          time: "2023-03-10",
        },
        {
          id: 2,
          type: "要闻",
          title:
            "弘扬“四敢”精神，勇探房屋安全苏州模式    苏州市房屋安全协会成立大会暨第一次会员大会成功举办",
          time: "2023-03-07",
        },
      ],
    };
  },
  actions: {
    test() {
      // request({
      //   url: '/test',
      //   isParams: true,
      //   method: 'get',
      //   data: {}
      // })
      //   .then(({ data }) => {
      //     // console.log('test', data)
      //     if (!isEmpty(data)) {
      //       return true
      //     }
      //   })
      //   .catch((e) => {
      //     console.log('test', e)
      //     return false
      //   })
    },
  },
});

// export default useIndustryNewsStore
