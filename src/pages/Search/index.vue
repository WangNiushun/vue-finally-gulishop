<template>
  <div>
    
    <h1>Search页面</h1> 
    两种路由参数的获取<br>
    params参数:{{this.$route.params}}  --- query参数的获取: {{this.$route.query}}
    <br>
    <br>
    <br>
    通过路由传递props数据
    params参数:{{keyword}}  --- query参数的获取: {{keyword1}}
    </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword','keyword1']
}
</script>

<style lang="less" scoped>

</style>
