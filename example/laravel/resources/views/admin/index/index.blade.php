@extends('admin.layouts.app')
@section('isee_title')
    {{$title}}
    @endsection
@section('isee_content')
<<<<<<< HEAD
    <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table>
@endsection
@section('isee_script')
    <script>
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      const userName = 'admin'
      const avatarUrl = '/static/images/avatar01.gif'
      var vm = new Vue({
        el: '#app',
        data: {
          tableData: Array(10).fill(item),
=======
    <el-card class="box-card" style="margin-bottom: 10px">
        <div slot="header" class="clearfix">
            <span>简介</span>
        </div>
        <div style="padding-left: 40px">
            iseeAdmin是一个基于vue和element UI实现的后台前端解决方案，特别针对后端人员设计的一款后台前端产品，让后端人员更注重业务逻辑开发，项目开发更快。本项目免费开源，欢迎使用！
        </div>
    </el-card>
    <el-card class="box-card" style="margin-bottom: 10px">
        <div slot="header" class="clearfix">
            <span>基本情况</span>
        </div>

        <ul class="isee-drawer-ul">
            <li>
                1. iseeAdmin基于vue和element UI开发
            </li>
            <li>
                2. 使用对象：主要是后端人员，要求掌握vue基本技能和了解element ui
            </li>
            <li>
                3. iseeAdmin参考了
                <el-link type="primary" :underline="false"
                         href="https://panjiachen.github.io/vue-element-admin-site/zh/" target="_blank">
                    vue-element-admin
                </el-link>
                和
                <el-link type="primary" :underline="false" href="https://www.layui.com/admin/std/dist/views"
                         target="_blank">layuiAdmin
                </el-link>
                页面布局
            </li>
            <li>
                4. 下载地址：
                <el-link type="primary" :underline="false" href="https://gitee.com/youge/iseeadmin"
                         target="_blank">https://gitee.com/youge/iseeadmin
                </el-link>
            </li>
            <li>
                5. demo：
                <el-link type="primary" :underline="false" href="http://56c.net.cn"
                         target="_blank">56c.net.cn
                </el-link>
            </li>
            <li>
                6.
                <el-link type="primary" :underline="false" href="https://www.kancloud.cn/ghzz789/iseeadmin"
                         target="_blank">使用文档
                </el-link>
            </li>
            <li>
                7. 交流QQ群：927049524
            </li>
        </ul>
    </el-card>

    <el-card class="box-card" style="margin-bottom: 10px">
        <div slot="header" class="clearfix">
            <span>特点对比</span>
        </div>
        <div style="padding-left: 40px">
            <p>上手难度 vue-element-admin > iseeAdmin > layuiAdmin</p>
            <p>vue-element-admin和iseeAdmin都是基于vue和element
                UI开发，但vue-element-admin是用vue-cli脚手架（采用脚手架开发是主流）开发的，这要求使用者需要比较专业的前端技能知识，但很多后端人员并不具备。iseeAdmin是直接引入式开发，使用者只需要掌握vue或MVVM模式的基本知识，就能快速开发，相对来说，难度低很多。
            </p>
            <p>
                layuiAdmin和iseeAdmin都是采用直接引入式开发的，layuiAdmin只需要使用者掌握传统的javascript知识就能开发，但iseeAdmin除此之外，还要求掌握vue或MVVM模式的知识，所以难度增加。</p>
            <p>那么问题来了！既然layuiAdmin上手难度是最低的，为什么还要使用vue-element-admin和iseeAdmin？</p>
            <p>1. 使用MVVM模式进行前端开发的快乐是传统前端开发无法比拟的<br>
                2. layuiAdmin是收费的，vue-element-admin和iseeAdmin都开源，可免费使用</p>
        </div>

    </el-card>
@endsection
@section('isee_script')
    <script>
      var vm = new Vue({
        el: '#app',
        data: {
>>>>>>> dev
            @include('admin.layouts.data')
        },
        methods: {
            @include('admin.layouts.methods')
<<<<<<< HEAD
            test3() {
=======
            test() {
>>>>>>> dev
              console.log(9999999999)
            }
        },
        beforeMount() {
            @include('admin.layouts.beforeMount')
        },
        mounted() {
<<<<<<< HEAD

=======
          this.test()
>>>>>>> dev
        }
      })
    </script>
@endsection

