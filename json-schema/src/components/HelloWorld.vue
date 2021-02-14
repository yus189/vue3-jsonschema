<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="item in features" :key="item.key">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type FeatureType = {
  name: string;
  key: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  public features: FeatureType [] = [{ name: '类型注解', key: '0' }, { name: '编译型语言', key: '1' }];
}
</script>

<style scoped>

</style>
