<template>
  <div
    class="smdo"
    v-loading="loading"
    element-loading-text="Загрузка..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(250, 250, 250, 0.8)"
  >
    <div class="smdo-title">
      <el-input class="smdo-input" placeholder="Поиск" v-model="input" suffix-icon="el-icon-search"></el-input>
      <el-button type="primary" icon="el-icon-delete" @click="remove"></el-button>
      <el-divider direction="vertical"></el-divider>
      <el-button type="primary" icon="el-icon-refresh" @click="refresh"></el-button>
      <el-divider direction="vertical"></el-divider>
    </div>

    <el-divider></el-divider>

    <ul class="smdo-content">
      <li v-for="(item, i) in paginationData" :key="i">{{item}}</li>
    </ul>

    <el-divider class="app-fullWidth"></el-divider>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page.sync="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      loading: false,
      pageSize: 16,
      currentPage: 1,
      smdoData: [
        "Абонемент 1",
        "Абонемент 2",
        "Абонемент 3",
        "Абонемент 4",
        "Абонемент 5",
        "Абонемент 6",
        "Абонемент 7",
        "Абонемент 8",
        "Абонемент 9",
        "Абонемент 10",
        "Абонемент 11",
        "Абонемент 12",
        "Абонемент 13",
        "Абонемент 14",
        "Абонемент 15",
        "Абонемент 16",
        "Абонемент 17",
        "Абонемент 18",
        "Абонемент 19",
        "Абонемент 20",
        "Абонемент 21",
        "Абонемент 22",
        "Абонемент 23",
        "Абонемент 24",
        "Абонемент 25",
        "Абонемент 26",
        "Абонемент 27",
        "Абонемент 28",
        "Абонемент 29",
        "Абонемент 30",
        "Абонемент 31",
        "Абонемент 32",
        "Абонемент 33",
        "Абонемент 34",
        "Абонемент 35",
        "Абонемент 36",
        "Абонемент 1.1",
        "Абонемент 2.1",
        "Абонемент 3.1",
        "Абонемент 4.1",
        "Абонемент 5.1",
        "Абонемент 6.1",
        "Абонемент 7.1"
      ]
    };
  },
  computed: {
    total() {
      return this.filterData.length;
    },
    filterData() {
      return this.smdoData.filter(item => {
        return item.indexOf(this.input) != -1;
      });
    },
    paginationData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filterData.slice(start, end);
    }
  },
  methods: {
    refresh() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    remove() {
      this.input = "";
    }
  }
};
</script>

<style scoped>
.smdo {
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 30px;
  z-index: 2;
}
.smdo-title {
  display: flex;
  align-items: center;
}
.smdo-content {
  height: 290px;
}
.el-divider--horizontal{
  margin: 20px 0px;
}
.el-divider--vertical{
  height: 2em;
}
.el-input{
  margin-right: 10px;
}

</style>