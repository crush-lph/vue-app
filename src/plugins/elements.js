import Vue from 'vue'
import { Form, FormItem, Input, Button, Message, Aside, Main, Header, Container, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'


Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)




Vue.prototype.$message = Message

export default { Message }