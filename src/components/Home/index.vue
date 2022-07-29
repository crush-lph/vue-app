<template>
  <el-container class="home-container">
    <el-header class="home-header">
      <div>
        <span>电商后台管理系统</span>
      </div>
      <div>
        <el-button type='info'
                   @click="logout">
          退出
        </el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
        <!-- 菜单开关 -->
        <div class="toggle-button"
             @click="toggleCollapse">
          <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']"></i>
        </div>
        <!-- 渲染左侧菜单 -->
        <el-menu default-active="2"
                 background-color='#d3dce6'
                 unique-opened
                 :collapse="isCollapse"
                 :collapse-transition="false">
          <el-submenu v-for="item in menuList"
                      :index="item.path"
                      :key="item.id">
            <template slot="title">
              <i :class="iconsList[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item v-for="subItem in item.children"
                          :key="subItem.id"
                          :index="subItem.path">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主要内容 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created () {
    // 获取菜单列表
    this.getMenuList()
  },
  data () {
    return {
      menuList: [],
      iconsList: {
        125: 'el-icon-user-solid',//用户管理
        103: 'el-icon-s-check',//权限管理
        101: 'el-icon-s-goods',//商品
        102: 'el-icon-s-order',//订单
        145: 'el-icon-s-marketing'//数据
      },
      isCollapse: false,
    }
  },
  methods: {
    // 退出登录
    logout () {
      console.log('退出');
      window.localStorage.removeItem('myToken')
      this.$router.push('login')
    },

    // 获取菜单列表
    async getMenuList () {
      const res = await this.$axios.get('menus')
      res.meta.status !== 200 ?
        this.$message.error(res.meta.msg) :
        this.menuList = res.data || []
    },

    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse ^= 1
    }
  }
}
</script>

<style scoped lang ="less">
.home-container {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 20px;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
  transition: all 0.3s;

  .el-menu {
    border-right: none;
  }
  .toggle-button {
    font-size: 24px;
    background-color: #ccc;
    text-align: center;
    color: white;
    cursor: pointer;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>