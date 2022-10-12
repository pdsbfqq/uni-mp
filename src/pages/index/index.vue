<template>
  <view>
    <view class="status_bar"> </view>
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
    console.log(`process.env`, process.env);
  },
  methods: {
    onClick() {
      this.count++;
    }
  }
};
</script>

<style>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  background-color: #f5f6f7;
}

.btn {
  border: 10px solid #8f8f94;
  padding: 10px 14px;
  background-color: #ffffff;
}
</style>
