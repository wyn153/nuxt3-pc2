import { defineStore } from "pinia";
// import request from "@/utils/axiosReq";
// import { isEmpty } from "@/utils/is";

// 移动端与PC公用数据
export const useCommon = defineStore("common", {
  state: () => {
    return {
      bannerImg: "https://observe.zyf.life/safety_association_nuxt/imgs/common/banner.png",
      selectNavIndex: 0,
      headerNav: [
        {
          title: "首页",
          routeName: "safety_association_nuxt-home",
          routeUrl: "/safety_association_nuxt/home",
        },
        {
          title: "协会简介",
          routeName: "safety_association_nuxt-introduction",
          routeUrl: "/safety_association_nuxt/introduction",
        },
        {
          title: "行业新闻",
          routeName: "safety_association_nuxt-industryNews",
          routeUrl: "/safety_association_nuxt/industryNews",
        },
        {
          title: "通知公告",
          routeName: "safety_association_nuxt-noticeAnnouncement",
          routeUrl: "/safety_association_nuxt/noticeAnnouncement",
        },
        {
          title: "政策法规",
          routeName: "safety_association_nuxt-policiesRegulations",
          routeUrl: "/safety_association_nuxt/policiesRegulations",
        },
        {
          title: "技术标准",
          routeName: "safety_association_nuxt-technicalStandard",
          routeUrl: "/safety_association_nuxt/technicalStandard",
        },
        {
          title: "教育培训",
          routeName: "safety_association_nuxt-educationTraining",
          routeUrl: "/safety_association_nuxt/educationTraining",
        },
        {
          title: "会员查询",
          routeName: "safety_association_nuxt-membershipEnquiry",
          routeUrl: "/safety_association_nuxt/membershipEnquiry",
        },
        {
          title: "诚信建设",
          routeName: "safety_association_nuxt-integrityConstruction",
          routeUrl: "/safety_association_nuxt/integrityConstruction",
        },
        {
          title: "房屋医院",
          routeName: "safety_association_nuxt-houseHospital",
          routeUrl: "/safety_association_nuxt/houseHospital",
        },
      ],
    };
  },
  actions: {
    getCommon() {
      this.getModuleManageList();
    },
    setSelectNavIndex(val) {
      this.selectNavIndex = val;
    },
    getModuleManageList() {
      // request({
      //   // http://10.201.97.29:9099/api/getModuleManageList/
      //   url: "/getModuleManageList",
      //   isParams: true,
      //   method: "get",
      //   data: {},
      // })
      //   .then(({ data }) => {
      //     console.log("test", data);
      //     if (!isEmpty(data)) {
      //       return true;
      //     }
      //   })
      //   .catch((e) => {
      //     console.log("test", e);
      //     return false;
      //   });
    },
  },
});

// export default useCommon
