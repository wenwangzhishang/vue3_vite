import { resolveComponent } from '@vue/runtime-core'
import {createRouter,createWebHashHistory} from 'vue-router'
import home from './../components/home.vue'
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: [
    {
      path:'/home',
      component:() => import('./../components/home.vue')
    }
  ]
})
// 单独加一个
router.addRoute(
  {
    path:'/about',
    component:() => import('./../components/about.vue')
  }
)
router.addRoute(
  'about',
  {
    path:'/about',
    component:() => import('./../components/about.vue')
  }
)


export default router