<template>
            <li class="nav-item">
                <router-link :to="link" class="nav-link">
                  <i class="nav-icon" :class="[icon]"></i>
                  <p><slot></slot></p>
                </router-link>
              </li>
</template>

<script>
export default {
    name: "NavItemSimple",
    props: [
        'link',
        'icon',
    ],
}
</script>

<style>
    
</style>