<template>
      <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <BrandLogo />
    <Sidebar>
      <SidebarUser :icon="iconSidebarUser">Alexander</SidebarUser>
      <SidebarSearchForm />
      <SidebarMenu>
        <NavItemWithTree :icon="iconNavItemTree">
          <template v-slot:header>Справочники</template>
          <template v-slot:simple-nav-items>
            <NavItemSimple link="/directory1">Справочник 1</NavItemSimple>
            <NavItemSimple link="/directory2">Справочник 2</NavItemSimple>
            <NavItemSimple link="/directory3">Справочник 3</NavItemSimple>
          </template>
        </NavItemWithTree>
      </SidebarMenu>
    </Sidebar>
  </aside>
</template>

<script>
import BrandLogo from "@/components/Sidebars/MainSidebar/BrandLogo.vue";
import Sidebar from "@/components/Sidebars/MainSidebar/Sidebar.vue";
import SidebarUser from "@/components/Sidebars/MainSidebar/SidebarUser.vue";
import SidebarSearchForm from "@/components/Sidebars/MainSidebar/SidebarSearchForm.vue";
import SidebarMenu from "@/components/Sidebars/MainSidebar/SidebarMenu/SidebarMenu.vue";
import NavItemWithTree from "@/components/Sidebars/MainSidebar/SidebarMenu/NavItemWithTree.vue";
import NavItemSimple from "@/components/Sidebars/MainSidebar/SidebarMenu/NavItemSimple.vue";
export default {
    name: "MainSidebar",
    components: {
      BrandLogo,
      Sidebar,
      SidebarUser,
      SidebarSearchForm,
      SidebarMenu,
      NavItemWithTree,
      NavItemSimple
    },
    data() {
      return {
        iconNavItemTree: "fas fa-book",
        iconSidebarUser: "user2-160x160",
      }
    }
}
</script>

<style>

</style>