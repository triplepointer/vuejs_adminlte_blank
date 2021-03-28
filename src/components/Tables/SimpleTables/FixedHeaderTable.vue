<template>
    <table class="table table-head-fixed text-nowrap">
        <thead>
        <slot name="head"></slot>
        </thead>
        <tbody>
        <slot name="body"></slot>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "FixedHeaderTable",
}
</script>

<style>

</style>