<template>
    <li class="nav-item">
    <a href="#" class="nav-link">
              <i class="nav-icon" :class="[icon]"></i>
              <p>
                <slot name="header"></slot>
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
        <ul class="nav nav-treeview">
            <slot name="simple-nav-items"></slot>
        </ul>
    </li>
</template>

<script>
export default {
    name: "NavItemWithTree",
    props: [
      'icon',
    ],
}
</script>

<style lang="">
    
</style>