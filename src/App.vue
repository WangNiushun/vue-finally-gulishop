<template>
    <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// 引入非路由组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
