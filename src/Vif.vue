<script>
import { ref } from 'vue'

export default {
  name: 'VifComp',
  setup() {
    const people = ref('女')
    function isBoy() {
      return people.value === '男'
    }
    return {
      people,
      isBoy
    }
  }
}
</script>
<template>
  <div v-if="isBoy()">男</div>
  <div v-if="people !== '男'">女</div>
  <div v-show="people === '男'">男</div>
  <div v-show="people !== '男'">女</div>
</template>