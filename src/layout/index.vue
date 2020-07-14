
<template>
  <div class="wrapper">
    <sidebar class="v-left" :class="isCollapse ? 'change' : ''"></sidebar>
    <div class="v-right" :class="isCollapse ? 'change' : ''">
      <navbar></navbar>
      <appmain></appmain>
    </div>
  </div>
</template>

<script>
import sidebar from "@/layout/components/Sidebar"
import navbar from '@/layout/components/Navbar'
import appmain from '@/layout/components/AppMain'

export default {
  name: "Home",
  components: {
    sidebar,
    navbar,
    appmain
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  mounted() {
    // this.$api.article.articleDetail(id, {        
    //         api: 123      
    //     }).then(res=> {
    //         // 执行某些操作      
    //     })
    this.$api.article.test()
    .then(res => {
      console.log(res);
    })
  }
};
</script>

<style lang="scss">
.v-left{
  -webkit-transition: width 0.28s;
    transition: width 0.28s;
    width: 200px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}
.v-left.change {
  width: 64px !important;
}
.v-right{
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 200px;
    position: relative;
}
.v-right.change {
  margin-left: 64px !important;
}

</style>
