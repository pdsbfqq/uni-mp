<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      {{ count }}
      <button class="btn" @click="onClick"> on click</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  onLoad() {
    console.log(process.env);
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
.btn {
  border: 10px solid #8f8f94;
  padding: 10px 14px;
  background-color: #ffffff;
}
</style>
