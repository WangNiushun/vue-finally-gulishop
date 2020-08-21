
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default  [
  {
    path:'/home',
    component:Home 
  },
  {
    path:'/search/:keyword?', // ? 代表params参数可传可不传, 如果不写,必须要传,否则报错
    component:Search,
    name:'search', // 只有name 才可以配合params参数 使用, 否侧params参数不生效
    

    //  路由组件可以传递props数据,并且有三种方式
    // (1)
    // props:true // 路由当中需要配置 props:true,
              //  注意: 这里只能接收  params 参数，它会把路由当中接收的参数，置为子组件的属性   
    // (2)
    // props: {keyword:'静态的属性',keyword1:'只能是静态属性,没有多大意义'}
    // (3)  函数方式,工作中经常用到
    props: route =>({keyword:route.params.keyword,keyword1:route.query.keyword}) 
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  // 重定向路由的配置 
  { 
    path:'/', 
    redirect:'/home'
  }
]


