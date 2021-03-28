<template>
    <table class="table table-sm">
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
    name: "CondensedFullWidthTable",
}
</script>

<style>

</style>