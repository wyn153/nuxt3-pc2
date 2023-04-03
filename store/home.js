import { defineStore } from "pinia";
// import request from '~utils/axiosReq'

export const useHome = defineStore("home", {
  state: () => {
    return {
      aboutUsImgs: [
        {
          id: "2",
          url: "imgs/home/swiper01.png",
        },
        {
          id: "1",
          url: "imgs/home/swiper03.png",
        },
        {
          id: "0",
          url: "imgs/home/swiper07.png",
        },
        {
          id: "0",
          url: "imgs/home/swiper07.png",
        },
        {
          id: "0",
          url: "imgs/home/swiper07.png",
        },
      ],
      aboutUsText: {
        titleUrl: "imgs/home/aboutUsTitle.png",
        content: `苏州市房屋安全协会由苏州市住房和城乡建设局主管，由在本市从事房屋安全鉴定、房屋结构加固、白蚁防治、建筑幕墙、房屋消防安全、绿色低碳节能建筑、科研机构及高等院校等单位组成的具有法人资格的专业性社团组织。截止目前，会员单位共99家。且按章程产生了理事单位32家，会长副会长单位10家。`,
      },
      swiperImgs: [
        {
          id: "2",
          url: "imgs/home/swiper01.png",
          desc: "全国首创！苏州市房屋安全医院来了",
        },
        {
          id: "1",
          url: "imgs/home/swiper03.png",
          desc: "苏州市房屋安全协会第一届第一次理事会议",
        },
        {
          id: "0",
          url: "imgs/home/swiper07.png",
          desc: "标题",
        },
        {
          id: "0",
          url: "imgs/home/swiper07.png",
          desc: "标题",
        },
        {
          id: "0",
          url: "imgs/home/swiper07.png",
          desc: "标题",
        },
      ],
      // 教育培训
      examinationTraining: {
        titleUrl: "imgs/home/examinationTraining.png",
        list: [
          {
            desc: "关于房屋安全鉴定员继续教育的通知续教知（教知穗房鉴教知穗房鉴）",
          },
          {
            desc: "关于房屋安全鉴定员继续教育的通知续教知（教知穗房鉴教知穗房鉴）",
          },
          {
            desc: "关于房屋安全鉴定员继续教育的通知续教知（教知穗房鉴教知穗房鉴）",
          },
          {
            desc: "关于房屋安全鉴定员继续教育的通知续教知（教知穗房鉴教知穗房鉴）",
          },
        ],
      },
      // 通知公告
      noticeAnnouncement: {
        titleUrl: "imgs/home/noticeAnnouncement.png",
        list: [
          {
            type: "要闻",
            desc: "市支援合作工作领导小组全体会议召开",
            time: "2023-2-15",
          },
          {
            type: "发展",
            desc: "市政府召开常务会议 研究2023年全面推进乡村振兴重点工作等事项",
            time: "2023-2-15",
          },
          {
            type: "要闻",
            desc: "动担当积极作为 高质量完成年度征兵任务",
            time: "2023-2-15",
          },
          {
            type: "服务",
            desc: '"金融+科技”产业链初步形成 金融商务区入驻企业达千家',
            time: "2023-2-15",
          },
          {
            type: "服务",
            desc: '"金融+科技”产业链初步形成 金融商务区入驻企业达千家',
            time: "2023-2-15",
          },
          {
            type: "发展",
            desc: "2022年市区单位到回天报到服务1300余次",
            time: "2023-2-15",
          },
        ],
      },
      // 政策法规
      policiesRegulations: {
        titleUrl: "imgs/home/policiesRegulations.png",
        list: [
          {
            desc: "市支援合作工作领导小组全体会议召开",
            time: "2023-2-15",
          },
          {
            desc: "关于表彰“2021年度房屋安全鉴定工作优秀单位”的决定（穗房鉴协字[20..",
            time: "2023-2-15",
          },
          {
            desc: "关于表彰“2020年度房屋安全鉴定工作优秀单位”的决定（穗房鉴协字[20..",
            time: "2023-2-15",
          },
          {
            desc: "市支援合作工作领导小组全体会议召开",
            time: "2023-2-15",
          },
          {
            desc: "市支援合作工作领导小组全体会议召开",
            time: "2023-2-15",
          },
          {
            desc: "市支援合作工作领导小组全体会议召开",
            time: "2023-2-15",
          },
        ],
      },
      // 技术标准
      technicalStandard: {
        titleUrl: "imgs/home/technicalStandard.png",
        list: [
          {
            desc: "既有建筑幕墙安全检查技术规（DB440..2022-04-13",
            time: "2023-2-15",
          },
          {
            desc: "既有建筑鉴定与加固通用规范(GB 550..2022-03-21",
            time: "2023-2-15",
          },
          {
            desc: "建筑结构检测技术标准（GB_T 5034..2020-04-07",
            time: "2023-2-15",
          },
          {
            desc: "火灾后工程结构鉴定标准(T_CECS 2..2020-03-12",
            time: "2023-2-15",
          },
          {
            desc: "工业建筑可靠性鉴定标准（GB 50144..2020-01-06",
            time: "2023-2-15",
          },
          {
            desc: "混凝土中钢筋检测技术标准（附条文说明）",
            time: "2023-2-15",
          },
        ],
      },
    };
  },
  actions: {
    test() {
      //   request({
      //     url: '/test',
      //     isParams: true,
      //     method: 'get',
      //     data: {}
      //   })
      //     .then(({ data }) => {
      //       // console.log('test', data)
      //       if (!isEmpty(data)) {
      //         return true
      //       }
      //     })
      //     .catch((e) => {
      //       console.log('test', e)
      //       return false
      //     })
    },
  },
});

// export default useHomeStore
