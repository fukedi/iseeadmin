<?php

    namespace app\index\controller;

    use think\Controller;

    class Index extends Controller {
        public function index() {
            $this->assign('title','iseeAdmin 【首页】');

            return view();
        }

        public function hello($name = 'ThinkPHP5') {
            return 'hello,' . $name;
        }

        public function goodsIndex() {
            $this->assign('title','iseeAdmin 【商品列表】');
            return view();
        }
        public function goodsUnit12() {
            $this->assign('title','iseeAdmin 【商品单位12】');
            return view();
        }
        public function goodsUnit22() {
            $this->assign('title','iseeAdmin 【商品单位22】');
            return view();
        }
        public function goodsCategory() {
            $this->assign('title','iseeAdmin 【商品分类】');
            return view();
        }
        public function manageProfile() {
            $this->assign('title','iseeAdmin 【基本资料】');
            return view();
        }
        public function manageModify() {
            $this->assign('title','iseeAdmin 【修改密码】');
            return view();
        }
        public function manageLogout() {
            $this->assign('title','iseeAdmin 【安全退出】');
            return view();
        }
    }
