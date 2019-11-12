<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>

  <form class="login-form" bindsubmit="formSubmit" bindreset="formResult">
    <input class="input" placeholder="请输入你的学号" name="stuNo"/>
    <input class="input" placeholder="初始密码为身份证后六位" name="password"/>
    <button class="button" form-type="submit">确认绑定</button>
  </form>
</view>