/**
 * 初始化数据
 * @author youge
 * @email 46914685@qq.com
 * @git https://gitee.com/youge/iseeadmin.git
 * @date 20190930
 * @type {*[]}
 */
// localStorage.removeItem('iseeTagList')
var iseeTagList =JSON.parse( localStorage.getItem('iseeTagList'))
const iseeHomeUrl='/'
var isseHomeTag = {
  title: '首页',
  url: iseeHomeUrl,
  closable: false,
  show: true,
  effect: 'dark',
  type: '',
}
if (iseeTagList == null) {
  iseeTagList = []
  iseeTagList.push(isseHomeTag)

}

var iseeDefaultActive = localStorage.getItem('iseeDefaultActive')
if (iseeDefaultActive == null) {
  iseeDefaultActive = iseeHomeUrl
}
