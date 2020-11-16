<template>
  <demo-section>
    <demo-block title="基础用法">
      <demo-button type="primary" style="margin-left: 15px;">按钮</demo-button>
    </demo-block>
    <div style="width: 50px; height: 50px;">
      <test-svt />
    </div>

    <demo-block title="自定义颜色">
      <!-- <demo-button color="#03a9f4" style="margin-left: 15px;">按钮</demo-button> -->
      <PocketFilled />
    </demo-block>
  </demo-section>
</template>

<script>
import TestSvt from './pocket-filled.svg';
import PocketFilled from './PocketFilled';

export default {
  components: {
    'test-svt': TestSvt,
    'PocketFilled': PocketFilled
  },
};
</script>

