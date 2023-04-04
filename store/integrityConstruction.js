import { defineStore } from "pinia";
// import request from '@/utils/axiosReq'

export const useIntegrity = defineStore("integrityConstruction", {
  state: () => {
    return {
      news: "integrityConstruction",
      companyList: [
        {
          icon: "https://observe.zyf.life/safety_association_nuxt/imgs/integrityConstruction/company01.png",
          title: "苏州市建筑科学研究院集团股份有限公司",
          text: "苏州市建筑科学研究院集团股份有限公司:简称“建研院”，城市建设综合服务商与投资运营商，成立于一九七九年，沪交主板上市企业（股票代码：603183），我们致力于建筑领域高新技术的研究与应用，是集研发、生产、施工、技术服务、资本运作等于一体的集团化高新技术企业。迄今旗下已经拥有十八家全资及控股公司、十五个生产基地。业务范围涵盖检验检测与认可认证、绿色环保的新型建材、城市更新、智慧城市、职业教育培训、碳中和、EPC工程总承包及全过程咨询、实业投资等领域。",
        },
        {
          icon: "https://observe.zyf.life/safety_association_nuxt/imgs/integrityConstruction/company02.png",
          title: "中亿丰控股集团有限公司",
          text: "中亿丰控股集团有限公司,旗下成员企业拥有建筑设计甲级、岩土工程（勘察、设计）甲级、施工总承包（建筑、市政）特级、建设工程质量检测等国家资质20余项，资质结构专业齐全。中亿丰控股集团主要围绕“建造、制造、智造、金融、服务”五大业务板块协同联动，可为客户提供从投资、建设到勘察、设计、建造、运维、更新等一体的建筑全生命周期服务。近年来集团积极响应国家战略和行业趋势，持续丰富“中亿丰+”的产业内涵，提升赋能增值服务能力。",
        },
        {
          icon: "https://observe.zyf.life/safety_association_nuxt/imgs/integrityConstruction/company03.png",
          title: "苏州方正工程技术开发检测有限公司",
          text: "苏州方正工程技术开发检测有限公司:我司拥有检验检测机构资质认定（CMA）、中国合格评定国家认可委实验室认可、检验机构认可、建设工程质量检测机构资质、测绘资质、工程勘察资质、雷电防护装置检测资质、水利工程质量检测单位资质、消防设施维护保养检测/消防安全评估资质。公司作为独立的第三方专业检测机构，拥有注册资金3000万元，固定资产2400余万元，办公试验场所面公司荣获了“高新技术企业”、“苏州市质量奖”、“全国建设工程质量检测行业先进单位”等荣誉称号，历年来公司凭借优质服务和完善科学的技术质量管理一直保持“苏州市工程质量检测机构信用等级A级”。积13000㎡。",
        },
        {
          icon: "https://observe.zyf.life/safety_association_nuxt/imgs/integrityConstruction/company04.png",
          title: "苏州市江枫白蚁防治有限公司",
          text: "苏州市江枫白蚁防治有限公司,成立于1980年，距今已有三十八年历史，成立之初就专业从事白蚁防治药剂生产，是国内最早生产白蚁防治药剂的专业公司。目前公司拥有一支以全国白蚁防治领域高级专家组成的研发团队，并与广东省昆虫研究所、浙江大学农药与环境毒力研究所、湖北省随州市东正专用汽车有限公司等白蚁防治生产及研究单位组成多项白蚁防治产品与技术的专业化研究开发平台。目前公司业务范围及涉及的领域包括：白蚁防治药剂产品及防治器械的研发和生产，白蚁防治技术及策略研发，教育、培训与推广。是我国白蚁防治产品与技术的引领者与风向标之一。",
        },
        {
          icon: "https://observe.zyf.life/safety_association_nuxt/imgs/integrityConstruction/company05.png",
          title: "苏州固百年建设科技有限公司",
          text: "苏州固百年建设科技有限公司2017年5月成立，专业从事建筑结构加固补强，纠偏平移，桥梁加固工程，水利加固工程，钢结构工程，房屋建筑工程，房屋抗震检测鉴定、房屋安全检测。先后通过了ISO19001质量管理体系、ISO45001职业健康管理体系、ISO14001环境管理体系，诚信管理体系、AAA信息等级等国际管理标准的整合认证，拥有多项发明型专利，公司有特种工程（结构补强）专业承包、特种工程（建筑物纠偏和平移）专业承包、建筑工程总承包、钢结构专业承包等多项资质。涉及养老、商场、酒店、办公大楼、教育、医疗等近百余项大中型工程的加固施工项目，频获各业主和监理方的肯定及好评。",
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

// export default useIntegrityConstructionStore
