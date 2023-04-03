import { defineStore } from "pinia";
// import request from "@/utils/axiosReq";
// import { isEmpty } from "@/utils/is";

export const useMembershipEnquiry = defineStore("membershipEnquiry", {
  state: () => {
    return {
      news: "membershipEnquiry",
      tableData: [
        {
          id: "1",
          status: true, //是否启用
          name: "中亿丰控股集团有限公司",
          code: "",
          note: "",
          type: {
            id: "", //分类
            name: "",
          }, //类型,
          council_members: "中亿丰控股集团有限公司",
          president_unit: "中亿丰控股集团有限公司",
        },
      ],
    };
  },
  actions: {
    // getMember() {
    //   this.getMemberManageList();
    // },
    // getMemberManageList() {
    //   request({
    //     url: "/getMemberManageList",
    //     isParams: true,
    //     method: "get",
    //     data: {},
    //   })
    //     .then(({ data }) => {
    //       if (!isEmpty(data)) {
    //         this.tableData = data.list;
    //         this.tableData.forEach((item) => {
    //           item.council_members === "1" ? (item.council_members = item.name) : (item.council_members = "");
    //           item.president_unit === "1" ? (item.president_unit = item.name) : (item.president_unit = "");
    //         });
    //         return true;
    //       }
    //     })
    //     .catch((e) => {
    //       console.log("test", e);
    //       return false;
    //     });
    // },
  },
});
