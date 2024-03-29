<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>
        @section('isee_title')
            iseeadmin 【app】
        @show
    </title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
{{--    <link rel="stylesheet" href="{{ asset('static/element/index.css') }}">--}}
    <link href="https://cdn.staticfile.org/element-ui/2.12.0/theme-chalk/index.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('static/iconfont/iconfont.css') }}">
    <link rel="stylesheet" href="{{ asset('static/css/common.css') }}">
{{--    <script src="{{ asset('/static/js/iseeadmin.js') }}"></script>--}}
    <script src="{{ asset('/static/js/iseeadmin.min.js') }}"></script>
    <script src="{{ asset('static/js/menu.js') }}"></script>
{{--    <script src="{{ asset('static/js/vue.js') }}"></script>--}}
{{--    <script src="{{ asset('static/js/vue.min.js') }}"></script>--}}
    <script src="https://cdn.staticfile.org/vue/2.6.10/vue.min.js"></script>
    <!--    <script src="static/js/axios.min.js"></script>-->
{{--    <script src="{{ asset('static/element/index.js') }}"></script>--}}
    <script src="https://cdn.staticfile.org/element-ui/2.12.0/index.js"></script>

    @section('isee_asset_head')
    @show
</head>
<body>
<div id="app" v-cloak>
    <el-container style="height: 100%;min-height:100vh;">
        <el-aside v-show="iseeData.asideShow" width="210px">
            <div class="aside-logo">
                <img class="aside-logo-img" src="{{ asset('static/images/logo.png') }}"
                     alt=""> ISeeAdmin
            </div>
            <el-menu @select="iseeMenuOpen" style="width: 210px;"
                     unique-opened
                     :default-active="iseeData.defaultActive"
                     background-color="#304156"
                     text-color="#bfcbd9"
                     active-text-color="#409eff">
                <iseemenu :menu="iseeData.menu"></iseemenu>
            </el-menu>
        </el-aside>

        <el-container>

            <el-header height="83px">
                <div class="isee-header-div">
                    <div style="width: 100%;display: inherit;">
                        <span class="aside-show" @click="iseeAsideShow">
                            <i :class="iseeData.asideShowIcon"></i>
                        </span>

                        <el-breadcrumb style="line-height: 50px" separator="/">
                            <el-breadcrumb-item v-for="(item,index) in iseeData.breadcrumb" :key="index">@{{item.title}}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>

                    <div>
                        <ul class="isee-ul">
                            <li class="isee-li">
                                <i style="font-size: 20px" class="el-icon-bell"></i>
                            </li>
                            <li @click="iseeFullScreen" class="isee-li">
                                <span class="iconfont" style="font-size: 20px" v-html="iseeData.fullscreenIcon"></span>
                            </li>
                            <li class="isee-li" @click="iseeData.drawer = true">
                                <span class="iconfont" style="font-size: 20px">&#xe602;</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <el-dropdown @command="iseeOpenUrl">
                              <span class="el-dropdown-link">
                                  <el-avatar style="margin-top: 9px" :size="iseeData.avatar.size"
                                             :src="iseeData.avatar.url"></el-avatar>
                              </span>

                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item,index) in iseeData.avatar.list" :icon="item.icon"
                                                  :key="index" :command="index">@{{item.title}}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div style="display: flex">
                    <span @click="iseeTagDivMove(1)" class="isee-tag-span">
                        <i class="el-icon-d-arrow-left"></i>
                    </span>
                    <div ref="iseeTagDiv" class="isee-tag-div">
                        <el-tag style="cursor:pointer;margin-right: 5px;" v-for="(item,index) in iseeData.tagList"
                                :key="index"
                                @click="iseeTagSwitch(item.url,item.index,item.breadcrumb)"
                                :effect="item.effect"
                                :type="item.type"
                                @close="iseeTagClose(item.url,index)"
                                size="medium"
                                :closable="item.closable"><i v-show="item.show" class="el-icon-view"></i> @{{item.title}}
                        </el-tag>
                    </div>
                    <span @click="iseeTagDivMove(2)" class="isee-tag-span">
                        <i class="el-icon-d-arrow-right"></i>
                    </span>
                    <div style="float: right;">
                        <el-dropdown @command="iseeTagCommandClose">
                          <span class="el-dropdown-link">
                              <i class="el-icon-arrow-down isee-el-icon-arrow-down"></i>
                          </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">关闭当前标签页</el-dropdown-item>
                                <el-dropdown-item command="2">关闭其它标签页</el-dropdown-item>
                                <el-dropdown-item command="3">关闭全部标签页</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>


                <el-drawer
                    title="iseeAdmin"
                    :visible.sync="iseeData.drawer"
                    :direction="iseeData.direction"
                    :show-close="iseeData.showClose"
                    custom-class="isee-drawer-info"
                >
                    <el-divider></el-divider>
                    <div style="font-size: 14px">
                        <p class="isee-title">版本信息</p>
                        <ul class="isee-drawer-ul">
                            <li>
                                当前版本：iseeAdmin-v@{{iseeData.version}}
                            </li>
                            <li>
                                基于框架：vue v2.6.10，element v2.12.0
                            </li>
                            <li>
                                下载地址：
                                <el-link type="primary" :underline="false" href="https://gitee.com/youge/iseeadmin"
                                         target="_blank">https://gitee.com/youge/iseeadmin
                                </el-link>
                            </li>
                        </ul>
                    </div>
                    <el-divider></el-divider>
                    <div style="font-size: 14px">
                        <p class="isee-title">关于版权</p>
                        <ul class="isee-drawer-ul">
                            <li>
                                iseeAdmin完全开源，可免费使用
                            </li>
                            <li>
                                QQ交流群：927049524
                            </li>
                        </ul>
                    </div>
                </el-drawer>
            </el-header>

            <el-main>
                @yield('isee_content')
            </el-main>
        </el-container>
    </el-container>
</div>

<script>
  const iseeAvatar = {
    url: '/static/images/avatar01.gif',
    size: 32,
    list: [
      {
        index: '',
        indexPath: [],
        icon: 'el-icon-user-solid',
        url: '',
        target: '_self',
        title: 'admin',
      }, {
        index: '6-1-0',
        indexPath: ["6", "6-1", "6-1-0"],
        icon: 'el-icon-tickets',
        url: '/pages/sets/myset/profile.html',
        target: '_self',
        title: '基本资料',
      }, {
        index: '6-1-1',
        indexPath: ["6", "6-1", "6-1-1"],
        icon: 'el-icon-edit-outline',
        url: '/pages/sets/myset/password.html',
        target: '_self',
        title: '修改密码',
      }, {
        index: '',
        indexPath: [],
        icon: 'el-icon-switch-button',
        url: '',
        target: '_self',
        title: '安全退出',
      },
    ]
  }
  var iseemenu = {
    props: ['menu'],
    name: 'iseemenu',
    template: `
    <div>
        <template v-for="item in menu">
            <el-submenu :index="item.index" v-if="item.children.length">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">@{{item.title}}</span>
                </template>
                <iseemenu :menu="item.children"></iseemenu>
            </el-submenu>
            <el-menu-item :index="item.index" v-else>
                <i :class="item.icon"></i>
                <span slot="title">@{{item.title}}</span>
            </el-menu-item>
        </template>
    </div>`,
  }
</script>

@section('isee_script')

@show

</body>
</html>
