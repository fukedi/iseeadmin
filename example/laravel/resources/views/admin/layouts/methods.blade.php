iseeTagSwitch(url, index, breadcrumb) {
iseeAdmin.iseeTagSwitch(url, index, breadcrumb, this.iseeData)
},

iseeTagClose(url, index) {
iseeAdmin.iseeTagClose(url, index, this.iseeData)
},

iseeTagCommandClose(command) {
iseeAdmin.iseeTagCommandClose(command, this.iseeData)
},

iseeMenuOpen(key, keyPath) {
iseeAdmin.iseeMenuOpen(key, keyPath, this.iseeData)
},

iseeFullScreen() {
iseeAdmin.iseeFullScreen(this.iseeData)
},

iseeAsideShow() {
iseeAdmin.iseeAsideShow(this.iseeData)
},
iseeOpenUrl(command) {
iseeAdmin.iseeMenuOpen(this.iseeData.avatar.list[command].index, this.iseeData.avatar.list[command].indexPath, this.iseeData)
},
iseeTagDivMove(flag) {
flag == 1 ? this.$refs.iseeTagDiv.scrollLeft += 80 : this.$refs.iseeTagDiv.scrollLeft -= 80
},
