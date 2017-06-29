<template>
  <div>
    <button
      class="btn"
      type="submit"
      @click="toggleShare()"
    >{{ shareText }}</button>
    <input
      class="share-url"
      onclick="this.select()"
      v-if="showUrl"
      v-bind:value="currentUrl">
  </div>
</template>

<script>
export default {
  name: 'share-button',
  data: function () {
    return {
      showUrl: false,
      shareText: 'Share URL'
    }
  },
  computed: {
    currentUrl: function () {
      return window.location.origin + '/#' + this.$route.fullPath
    }
  },
  methods: {
    toggleShare: function () {
      this.showUrl = !this.showUrl
      this.shareText = this.showUrl ? 'Hide URL' : 'Share URL'
    }
  }
}
</script>

<style>
.share-url {
  width: 500px;
}
</style>
