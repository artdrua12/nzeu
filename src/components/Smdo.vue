<template>
  <div
    class="smdo"
    v-loading="loading"
    element-loading-text="Загрузка..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.9)"
  >
    <ul>
      <li v-for="(item, i) in filterData" :key="i">{{item}}</li>
    </ul>
    <el-input placeholder="Поиск" v-model="input" suffix-icon="el-icon-search"></el-input>
    <el-button type="primary" icon="el-icon-search" @click="load">Search</el-button>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="3"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      loading: false,
      smdoData: ["a", "b", "c", "a", "b", "c", "a", "b", "c"]
    };
  },
  computed: {
    total() {
      return this.smdoData.length;
    },
    filterData() {
      return this.smdoData.filter(item => {
        return item.indexOf(this.input) != -1;
      });
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
};
</script>

<style>
.smdo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 30px;
  z-index: 2;
}
</style>