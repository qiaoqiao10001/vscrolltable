/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.directive('myscroll', {
  bind (el, bind, vnode) {

    /*
   const self = vnode.context; // self是组件实例
   const target = el.querySelector('.el-table__body-wrapper');
   target.addEventListener('scroll',() => {
     if(target.scrollTop + target.clientHeight +10 >= target.scrollHeight){// 说明滚动到底部了
       // 当over数大于总的data数就不滚动了
        if(self.over >= self.dataList.length){
         return;
        }
        self.over += 15 // 触底之后+15条
     }
     // dom还是会全部放到table中
   }) */


    setTimeout(() => {

      const target = el.querySelector('.el-table__body-wrapper');
      const self = vnode.context;
      target.addEventListener('scroll', () => {

        self.tableHeight = target.clientHeight
        self.scrollTop = target.scrollTop
        // 随着滚动不断设置这个padding
        const _table = target.querySelector('table');
        _table.style.paddingTop = self.padding[1] + 'px'
        _table.style.paddingBottom = self.padding[0] + 'px'
      })
    }, 200)


  }
})

Vue.mixin({
  data () {
    return {
      // start: 0,
      // over: 15, 
      scrollTop: 0,
      tableHeight: 300,
    }
  },
  computed: {
    start () { // 通过高度算出需要截取的start位置和over位置
      return Math.max(this.scrollTop / 50 - 5, 0)
    },
    over () { // 通过高度算出需要截取的start位置和over位置
      return Math.min((this.scrollTop + this.tableHeight) / 50 + 5, this.dataList.length)
    },
    padding () {
      let paddingBottom = (this.dataList.length - this.over) * 50;
      let paddingTop = this.start * 50;
      return [paddingBottom, paddingTop]
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
