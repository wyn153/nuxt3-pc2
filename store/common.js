import { defineStore } from "pinia";
// import request from "@/utils/axiosReq";
// import { isEmpty } from "@/utils/is";

// 移动端与PC公用数据
export const useCommon = defineStore("common", {
  state: () => {
    return {
      bannerImg: "imgs/common/banner.png",
      selectNavIndex: 0,
      headerNav: [
        {
          title: "首页",
          routeName: "home",
          routeUrl: "/home",
        },
        {
          title: "协会简介",
          routeName: "introduction",
          routeUrl: "/introduction",
        },
        {
          title: "行业新闻",
          routeName: "industryNews",
          routeUrl: "/industryNews",
        },
        {
          title: "通知公告",
          routeName: "noticeAnnouncement",
          routeUrl: "/noticeAnnouncement",
        },
        {
          title: "政策法规",
          routeName: "policiesRegulations",
          routeUrl: "/policiesRegulations",
        },
        {
          title: "技术标准",
          routeName: "technicalStandard",
          routeUrl: "/technicalStandard",
        },
        {
          title: "教育培训",
          routeName: "educationTraining",
          routeUrl: "/educationTraining",
        },
        {
          title: "会员查询",
          routeName: "membershipEnquiry",
          routeUrl: "/membershipEnquiry",
        },
        {
          title: "诚信建设",
          routeName: "integrityConstruction",
          routeUrl: "/integrityConstruction",
        },
        {
          title: "房屋医院",
          routeName: "houseHospital",
          routeUrl: "/houseHospital",
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
