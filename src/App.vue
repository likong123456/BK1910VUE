<template>
    <div id="app">
        <router-view></router-view>
        <TabBar/>
    </div>
</template>

<script>
import TabBar from"common/tabBar"
import http from "utils/http.js"
export default {
  name:"App",
  components:{
    TabBar,
  },
  created(){
    http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
      console.log(data);
    })
  }
}

</script>

<style lang="scss">

</style>
