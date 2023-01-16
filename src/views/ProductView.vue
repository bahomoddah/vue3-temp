<template>
<div>
  {{ product }}
</div>
</template>

<script>
export default {
  name: 'ProductView',
  props: {
    product: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style></style>
