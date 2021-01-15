<template>
  <view>
    <u-card :title="title" :sub-title="subTitle" :thumb="thumb">
      <view class="" slot="body">
        <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
          <view class="u-body-item-title u-line-2"
            >瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view
          >
          <image
            src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
            mode="aspectFill"
          ></image>
        </view>
      </view>
      <view class="" slot="foot"
        ><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon
      ></view>
    </u-card>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '素胚勾勒出青花，笔锋浓转淡',
			subTitle: '2020-05-15',
			thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
    };
  },
  props: {
  
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
