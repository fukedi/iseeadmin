@extends('admin.layouts.app')
@section('isee_title')
    {{$title}}
    @endsection
@section('isee_content')
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
      var vm = new Vue({
        el: '#app',
        data: {
          tableData: Array(10).fill(item),
            @include('admin.layouts.data')
        },
        methods: {
            @include('admin.layouts.methods')
            test() {
              console.log(9999999999)
            }
        },
        beforeMount() {
            @include('admin.layouts.beforeMount')
        },
        mounted() {
          this.test()
        }
      })
    </script>
@endsection

