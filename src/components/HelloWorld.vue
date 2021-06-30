<template>


  <button type="button" @click="add()">count is: {{ state.count }} </button>
  
  <div>{{msg}}</div> 
  <div>{{obj}}</div> 
  <div> {{ state.count2 }}</div>
  <!-- <div> {{ states }}</div> -->
  <button @click="changeMsg()"> 改变字符</button>
   <router-link to='/home'>home</router-link>
   <router-link to='/about'>about</router-link>
</template>

<script >
import { reactive ,ref,onMounted,onUpdated,onUnmounted,toRef} from 'vue'


export default {
  setup () {
      // let {count} = ref(count)
      let msg = ref('test')
      let state = reactive({ count: 0 ,count2:1})
      let obj = toRef(state,'count')

      onMounted(() => {
        console.log('mounted!')
      }),
       onMounted(() => {
        console.log('mounted2!')
      })
      onUpdated(() => {
        console.log('updated!')
      })
      onUpdated(() => {
        console.log('updated2!')
      })
      onUnmounted(() => {
        console.log('unmounted!')
      })
      function changeMsg() {
        console.log(11)
          msg.value ='test2'
          // msg = ref('test2')
      }
      function add(){
        state.count ++
        state.count2 ++
      }
      return {
        state,
        msg,
        changeMsg,
        add,
        obj
      }
  },
  created(){
    console.log('cr')
  },
  mounted(){
    console.log('mo')
  },
  mounted(){
    console.log('mo1')
  },
  updated(){
    console.log('up')
  },
  updated(){
    console.log('up2')
  }
  // setup (){
  //   console.log(11)
  //   // let states = reactive({
  //   //   counter:0,
  //   //   counter1:0,
  //   // })
  //   // let states = ref('aaa')
  //   // return {
  //   //   // states
  //   // }
  // }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
