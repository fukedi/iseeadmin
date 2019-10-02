/**
 * 核心属性和方法
 * @author youge
 * @email 46914685@qq.com
 * @git https://gitee.com/youge/iseeadmin.git
 * @date 20191001
 * @type {{iseeFullScreen: iseeAdmin.iseeFullScreen}}
 */

// localStorage.removeItem('iseeTagList')
// localStorage.removeItem('iseeBreadcrumb')

const iseeVersion = '1.0.0'
const iseeIndex = '0'
const iseeTitle = '首页'
const iseeUrl = '/'

var iseeTagList = JSON.parse(localStorage.getItem('iseeTagList'))
var iseeHomeTag = {
  index: iseeIndex,
  title: iseeTitle,
  url: iseeUrl,
  closable: false,
  show: true,
  effect: 'dark',
  type: '',
  breadcrumb: [{
    index: '',
    title: '面板',
    url: ''
  }, {
    index: iseeIndex,
    title: iseeTitle,
    url: iseeUrl
  }]
}
if (iseeTagList == null) {
  iseeTagList = [iseeHomeTag]
}

var iseeDefaultActive = localStorage.getItem('iseeDefaultActive')
if (iseeDefaultActive == null || iseeDefaultActive == 'undefined') {

  iseeDefaultActive = iseeHomeTag.index
}


var iseeAsideShow = localStorage.getItem('asideShow')
if (iseeAsideShow == null || iseeAsideShow == 'undefined') {
  iseeAsideShow = true
} else {
  iseeAsideShow = iseeAsideShow == 'true' ? true : false
}


var iseeAsideShowIcon = localStorage.getItem('asideShowIcon')
iseeAsideShowIcon = iseeAsideShowIcon == null ? 'el-icon-s-fold' : iseeAsideShowIcon

var iseeBreadcrumb = localStorage.getItem('iseeBreadcrumb')
if (iseeBreadcrumb == 'undefined') {
  iseeBreadcrumb = iseeHomeTag.breadcrumb
} else {
  iseeBreadcrumb = JSON.parse(iseeBreadcrumb)
}

var iseeAdmin = {
  version: iseeVersion,
  tagList: iseeTagList,
  homeTag: iseeHomeTag,
  defaultActive: iseeDefaultActive,
  asideShow: iseeAsideShow,
  asideShowIcon: iseeAsideShowIcon,
  breadcrumb: iseeBreadcrumb,

  /**
   * 初始化
   * @param o
   */
  init(o) {
    o.tagList.forEach((obj) => {
      if (obj.index == o.defaultActive) {
        obj.show = true
        obj.effect = 'dark'
        obj.type = ''
        this.cacheSet('iseeTagList', o.tagList, 2)
      } else {
        obj.show = false
        obj.effect = 'plain'
        obj.type = 'info'
      }
    })
  },

  /**
   * 写入缓存
   * @param key  键
   * @param val  值
   * @param mode 模式,1:直接写入;2:序列化后写入
   */
  cacheSet(key, val, mode = 1) {
    mode == 2 ? val = JSON.stringify(val) : ''
    localStorage.setItem(key, val)
  },

  /**
   * 从缓存获取数据
   * @param key 键
   * @param mode 模式,1:直接获取;2:获取后反序列化
   * @returns {*}
   */
  cacheGet(key, mode = 1) {
    let val = localStorage.getItem(key)
    mode == 2 ? val = JSON.parse(val) : ''
    return val
  },

  /**
   * 全屏切换
   * @param obj
   */
  iseeFullScreen(obj) {
    let el = document.documentElement;
    // 如果是全屏，退出
    if (obj.fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      obj.fullscreenIcon = '&#xe610;'
    } else {    // 否则，进入全屏
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.msRequestFullscreen) {
        // IE11
        el.msRequestFullscreen();
      }
      obj.fullscreenIcon = '&#xe61a;'
    }
    obj.fullscreen = !obj.fullscreen;
  },

  /**
   * 显示隐藏侧边栏
   * @param obj
   */
  iseeAsideShow(obj) {
    obj.asideShow = !obj.asideShow
    obj.asideShowIcon = obj.asideShow ? 'el-icon-s-fold' : 'el-icon-s-unfold'
    this.cacheSet('asideShow', obj.asideShow)
    this.cacheSet('asideShowIcon', obj.asideShowIcon)
  },

  /**
   *  打开菜单
   * @param k
   * @param p
   * @param o
   */
  iseeMenuOpen(k, p, o) {
    if (k == '' || p == '') {
      return
    }
    let b = this.iseeGetBreadcrumb(o.menu, p)
    let b_=b[b.length-1]
    // k存在iseeTagList中,则iseeTagList无需再push
    o.tagList.forEach((o_) => {
      if (o_.index == k) {
        o.status = true
        return
      }
    })

    if (o.status == false) {
      let issTag = {
        index: k,
        title: b_.title,
        url: b_.url,
        closable: true,
        show: true,
        effect: 'dark',
        type: '',
        breadcrumb: b
      }
      o.tagList.push(issTag)
      this.cacheSet('iseeTagList', o.tagList, 2)
    }
    o.breadcrumb = b
    this.cacheSet('iseeBreadcrumb', o.breadcrumb, 2)
    this.cacheSet('iseeDefaultActive', k)
    window.open(b_.url, '_self')
  },

  /**
   * 右侧关闭标签页操作
   * @param c
   * @param o
   */
  iseeTagCommandClose(c, o) {
    switch (c) {
      //关闭当前tag
      case '1':
        if (this.homeTag.index != o.defaultActive) {
          o.tagList.forEach((obj, index) => {
            if (obj.index == o.defaultActive) {
              o.tagList.splice(index, 1);
              this.cacheSet('iseeDefaultActive', o.tagList[index - 1].index)
              this.cacheSet('iseeBreadcrumb', o.tagList[index - 1].breadcrumb, 2)
              this.cacheSet('iseeTagList', o.tagList, 2)
              window.open(o.tagList[index - 1].url, '_self')
            }
          })
        }
        break
      //关闭其它tag
      case '2':
        //当前tag在首页上
        let tagListTemp = [this.homeTag]
        if (this.homeTag.index == o.defaultActive) {
          o.tagList = tagListTemp
        } else {
          tagListTemp[0].show = false
          tagListTemp[0].effect = 'plain'
          tagListTemp[0].type = 'info'
          o.tagList.forEach((obj) => {
            if (obj.index == o.defaultActive && obj.url != this.homeTag.url) {
              tagListTemp.push(obj)
              return
            }
          })
          o.tagList = tagListTemp
        }
        this.cacheSet('iseeTagList', o.tagList, 2)
        break
      //关闭全部tag
      case '3':
        o.tagList = [this.homeTag]
        this.cacheSet('iseeTagList', o.tagList, 2)
        // 当前tag不是首页
        if (this.homeTag.index != o.defaultActive) {
          this.cacheSet('iseeDefaultActive', this.homeTag.index)
          this.cacheSet('iseeBreadcrumb', this.homeTag.breadcrumb, 2)
          window.open(this.homeTag.url, '_self')
        }
        break
    }
  },

  /**
   * 关闭tag页
   * @param u url路径
   * @param i index 索引
   * @param o obj 对象
   */
  iseeTagClose(u, i, o) {
    let t = o.tagList.splice(i, 1);
    this.cacheSet('iseeTagList', o.tagList, 2)
    // 关闭当前tag,跳转到前一个tag
    if (t[0].index == o.defaultActive) {
      this.cacheSet('iseeDefaultActive', o.tagList[i - 1].index)
      window.open(o.tagList[i - 1].url, '_self')
    }
  },

  /**
   * 标签页切换
   * @param u url
   * @param o obj
   */
  iseeTagSwitch(u, i, b, o) {
    if (i == o.defaultActive) {
      return;
    }
    this.cacheSet('iseeDefaultActive', i)
    o.breadcrumb = b
    this.cacheSet('iseeBreadcrumb', b, 2)
    window.open(u, '_self')
  },

  /**
   * 通过 keyPath 层层查找对应的菜单 返回面包屑
   * @param m
   * @param k keyPath
   */
  iseeGetBreadcrumb(m, k) {
    let b = [{
      index: '',
      title: '面板',
      url: ''
    }]
    let m_ = []
    this.cacheSet('iseeMenuTemp', m_, 2)
    k.forEach((k_) => {
      m_ = this.cacheGet('iseeMenuTemp', 2)
      m_.length > 0 ? m = m_ : ''
      m.forEach((o, i) => {
        if (k_ == o.index) {
          b.push({
            index: o.index,
            title: o.title,
            url: o.url
          })
          this.cacheSet('iseeMenuTemp', m[i].children, 2)
        }
      })
    })
    return b
  }

}
