<template>
  <div>
    <h1>Dashboard page</h1>
    <nav  >
        <router-link class="bg" active-class="active" to="/admin">Dashoard</router-link>
        <router-link class="bg" active-class="active" to="/admin/manager-category">Manager Category</router-link>
        <router-link class="bg" active-class="active" to="/admin/manager-Product">Manager Product</router-link>
    </nav>
    <router-view></router-view>
   
  </div>
</template>

<script  setup>

</script>

<style scoped>
.bg{
    border: 1px solid red;
    background-color: rgb(230, 215, 215);
    color: white;
}
.active{
    background-color: pink;
    color:rgb(254, 135, 155);
   
}
</style>