<template>
  <el-table v-myscroll :data="dataList.slice(start,over)" :height="500">
    <el-table-column prop="name" label="日期" width="180"> </el-table-column>
    <el-table-column prop="price" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="count" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      dataList: [  ],
    }
  },
  mounted(){
    
    setTimeout(() => {
      let _arr  = []
      for (let i = 0; i < 500; i++) {
        _arr.push({
          name: '电脑'+i,
          price: 1000+10*i,
          count: i+1
        })
      }
      this.dataList = _arr
      console.log(this.start,'11-$$$---')
    console.log(this.over,'-$$$---')
    },1000)

  },
 
}
</script>

<style>
.el-table__cell{
  height: 50px;
}
</style>