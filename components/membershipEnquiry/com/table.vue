<template>
  <div class="membershipEnquiry">
    <div class="member-search">
      <el-input class="member-inp" v-model="inputValue" placeholder="单位名称..." />
      <el-button class="member-but" type="primary" @click="onSearch">点击查询</el-button>
    </div>
    <div class="member-img">
      <el-table :data="resultList" style="width: 100%" :header-cell-style="headerStyle" :span-method="objectSpanMethod">
        <el-table-column prop="id" label="序号" align="center" width="50" />
        <el-table-column label="成员单位" align="center">
          <el-table-column prop="name" label="名称" align="center" />
          <el-table-column prop="type.name" label="类型" width="90" align="center" />
        </el-table-column>
        <el-table-column prop="council_members" :label="'理事单位\n(原则上不超过会员人数的1/3)'" align="center"></el-table-column>
        <el-table-column
          prop="president_unit"
          :label="'会长单位\n((会长、副会长、秘书长，人数\n原则上不超过理事人数的 1/3))'"
          align="center"
        ></el-table-column>
      </el-table>
      <!-- <img src="/static/imgs/membershipEnquiry/enquiry.png" alt="" /> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useMembershipEnquiry } from "@/store/membershipEnquiry";

const membershipEnquiryStoreStore = useMembershipEnquiry();
const tableData = computed(() => membershipEnquiryStoreStore.tableData);

const inputValue = ref(null);
const merge = ref([]);
const pos = ref(null);
const resultList = ref(tableData.value);
const getSpanArr = (data) => {
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      merge.value.push(1);
      pos.value = 0;
    } else {
      // 判断当前元素与上一个元素是否相同
      //根据相同type进行合并,根据需要可进行修改
      if (data[i].type.name === data[i - 1].type.name) {
        merge.value[pos.value] += 1;
        merge.value.push(0);
      } else {
        merge.value.push(1);
        pos.value = i;
      }
    }
  }
};
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 2) {
    const _row = merge.value[rowIndex];
    // console.log(_row, '_row')
    const _col = _row > 0 ? 1 : 0;
    return {
      rowspan: _row,
      colspan: _col,
    };
  }
};
const headerStyle = ({ row, column, rowIndex, columnIndex }) => {
  // if (rowIndex == 0) {
  return {
    color: "rgba(255, 255, 255, 1)",
    background: "rgba(88, 161, 206, 1)",
    borderColor: "#B9B9B9",
  };
  // }
};
const onSearch = () => {
  if (!inputValue.value) {
    resultList.value = tableData.value; //如果输入框没有内容，则显示分页后的allData
    console.log("没有搜索内容");
    return;
  }
  // 这里是搜索框筛选判断，
  resultList.value = tableData.value.filter(
    (data) => data.name.toLowerCase().includes(inputValue.value.toLowerCase()),
    // 搜索名字
  );
  // tableData.value = resultList.value //搜索是根据最初的数据去筛选的
};
watch(
  () => resultList.value,
  (val) => {
    tableData.value = val;
  },
  { deep: true, immediate: true },
);
onMounted(() => {
  getSpanArr(tableData.value);
});
</script>
<style lang="less" scoped>
.membershipEnquiry {
  width: 1000px;
  // display: flex;
  // flex-wrap: wrap;
  // flex-direction: column;
  .cellName {
    color: red;
  }
  .member-search {
    height: 45px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 43px 0 23px 0;
    .member-inp {
      width: 740px;
      height: 45px;
      background: #ededed;
      border-radius: 23px 23px 23px 23px;
      opacity: 1;
    }
    .member-but {
      width: 176px;
      height: 45px;
      background: #2070ad;
      border-radius: 21px 21px 21px 21px;
      opacity: 1;
    }
  }
  .member-img {
    width: 1000px;

    margin-bottom: 84px;
  }
  // height: 300px;
}
</style>
<style lang="less">
.el-input__wrapper {
  border-radius: 23px 23px 23px 23px;
  background: #ededed;
}
.el-table .cell {
  white-space: pre-line;
}
</style>
