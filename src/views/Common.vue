<template>
  <div class="bos">
  <top></top>
  
    <div style = "display:flex">
    <router-view style="flex:3"></router-view>
    <sidebar style="flex:1"></sidebar>
    </div>
  
   <under></under>

 </div>
</template>

<script>
 import top from "../components/content/top"
 import pagecontent from "../components/content/pagecontent"
 import sidebar  from "../components/content/sidebar"
 import under  from "../components/content/under"

 export default {
   data () {
     return {

     }
   },
   components: {
       top,
       pagecontent,
       sidebar,
       under,
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>
<style scoped lang='scss'>
.bos{
  background: #E1E1E1;
}
</style>