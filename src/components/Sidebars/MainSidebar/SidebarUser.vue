<template>
          <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="getImgUrl(icon)" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block"><slot></slot></a>
        </div>
      </div>
</template>

<script>
export default {
    name: "SidebarUser",
    props: [
        'icon',
    ],
    methods: {
      getImgUrl(pet) {
    var images = require.context('@/../node_modules/admin-lte/dist/img/', false, /\.jpg$/)
    return images('./' + pet + ".jpg")
  }
    }

}
</script>

<style>

</style>