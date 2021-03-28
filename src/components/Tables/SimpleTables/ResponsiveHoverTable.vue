<template>
    <table class="table table-hover text-nowrap">
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
    name: "ResponsiveHoverTable",
}
</script>

<style>

</style>