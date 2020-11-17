<template>
  <demo-section>
    <demo-block title="基础用法">
    </demo-block>
    <div style="padding-left: 20px">
      <icon
        :rotate="23"
        :tabindex="0"
        class-name="test"
        @click="onClick"
        :component="PocketFilled"
      />
    </div>

    <demo-block title="icon 列表">
      <div style="padding-left: 20px">
        <icon-list />
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import PocketFilled from './pocket-filled.svg';
import IconList from './icon-list';

export default {
  components: {
    'icon-list': IconList
  },

  data(){
    return ({
      PocketFilled
    })
  },

  methods: {
    onClick(){
      console.log('----')
    }
  }
};
</script>

