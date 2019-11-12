//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    if (e.detail.value) {
      // qq.showToast({
      //  title: "登陆成功",
      //  icon: "success",
      //  duration: 2000
      // });

      const requestTask = qq.request({
        url: 'http://yewenshu.top',
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log(res.data)
        }
      })
      //requestTask();
      qq.showLoading({
        title: '加载中',
      })

      setTimeout(function () {
        qq.hideLoading();
        qq.redirectTo({
        url:'../schedule/schedule'
      })
      }, 2000)

      //获取定位
      qq.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          console.log(latitude);
          console.log(longitude);
          console.log(speed);
          console.log(accuracy);
        }
      })
      
    }
  }
})
