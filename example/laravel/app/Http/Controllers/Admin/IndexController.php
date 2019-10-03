<?php

    namespace App\Http\Controllers\Admin;

    use Illuminate\Http\Request;
    use App\Http\Controllers\Controller;

    class IndexController extends Controller {
        //首页
        public function index() {
            $title = 'iseeAdmin 【首页】';
            return view('admin.index.index', [
                'title' => $title
            ]);
        }

        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function profile() {
            $title = 'iseeAdmin 【基本资料】';
            return view('admin.index.profile', [
                'title' => $title
            ]);
        }
        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function modify() {
            $title = 'iseeAdmin 【修改密码】';
            return view('admin.index.modify', [
                'title' => $title
            ]);
        }
        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function logout() {
            $title = 'iseeAdmin 【安全退出】';
            return view('admin.index.logout', [
                'title' => $title
            ]);
        }
        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function goodsIndex() {
            $title = 'iseeAdmin 【商品列表】';
            return view('admin.index.goodsIndex', [
                'title' => $title
            ]);
        }
        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function goodsCategory() {
            $title = 'iseeAdmin 【商品分类】';
            return view('admin.index.goodsCategory', [
                'title' => $title
            ]);
        }
        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function goodsUnit12() {
            $title = 'iseeAdmin 【商品单位12】';
            return view('admin.index.goodsUnit12', [
                'title' => $title
            ]);
        }
        /**
         * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
         */
        public function goodsUnit22() {
            $title = 'iseeAdmin 【商品单位22】';
            return view('admin.index.goodsUnit22', [
                'title' => $title
            ]);
        }


    }
