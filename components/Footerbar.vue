<template>
  <div class="footer row">
    <div class="text-center pt-3">
      copyright Ⓒ Allenplay {{ copyrightYear }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyrightYear: "2021",
    };
  },
  mounted() {
    this.copyrightDate = new Date().toLocaleString().substr(0, 4);
  },
};
</script>