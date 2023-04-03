import { defineStore } from "pinia";
// import request from '@/utils/axiosReq'

export const useIntroduction = defineStore("introduction", {
  state: () => {
    return {
      news: "introduction",
      aboutUsList: [
        {
          id: 1,
          title: "会员单位",
          icon: "imgs/introduction/aboutUs1.png",
          number: 99,
          state: "家",
        },
        {
          id: 2,
          title: "理事单位",
          icon: "imgs/introduction/aboutUs2.png",
          number: 32,
          state: "家",
        },
        {
          id: 3,
          title: "会长副会长单位",
          icon: "imgs/introduction/aboutUs3.png",
          number: 10,
          state: "家",
        },
      ],
      committeelist1: [
        {
          title: "苏州市废物检测鉴定专业委员会",
          unit: "主任单位：苏州苏州方正工程技术开发检测有限公司",
        },
        {
          title: "苏州市房屋白蚁防治专业委员会",
          unit: "主任单位：苏州江枫白蚁防治有限公司",
        },
        {
          title: "苏州市房屋消防技术专业委员会",
          unit: "主任单位：江苏合和机电安装工程有限公司",
        },
        {
          title: "苏州市房屋智慧科技专业委员会",
          unit: "主任单位: 苏州市建筑科学研究院集团股份有限公司",
        },
      ],
      committeelist2: [
        {
          title: "苏州市房屋加固改造专业委员会",
          unit: "主任单位: 苏州中固建设科技股份有限公司",
        },
        {
          title: "苏州市房屋建筑外墙专业委员会",
          unit: "主任单位：苏州柯利达装饰股份有限公司",
        },
        {
          title: "苏州市房屋建筑设计专业委员会",
          unit: "主任单位：启迪设计集团股份有限公司",
        },
      ],
      serviceAimList: [
        {
          icon: "imgs/introduction/serviceAim1.png",
          text: "坚持“人民城市人民建、人民城市为人民”重要理念，一切核心是人民;",
        },
        {
          icon: "imgs/introduction/serviceAim2.png",
          text: "积极协助业务主管部门做好对本行业标准规范的实施和监督,提高会员单位的业务和技术应用水平促进高新技术成果的转化和应用,促进行业标准向国际化标准靠拢为城市经济建设发展服务;",
        },
        {
          icon: "imgs/introduction/serviceAim3.png",
          text: "遵守我国宪法、法律、法规、国家政策,践行社会主义核心价值观，遵守社会道德风尚,贯彻党和国家的方针政策;",
        },
        {
          icon: "imgs/introduction/serviceAim4.png",
          text: "遵守我国宪法、法律、法规、国家政策,践行社会主义核心价值观，遵守社会道德风尚,贯彻党和国家的方针政策;",
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
