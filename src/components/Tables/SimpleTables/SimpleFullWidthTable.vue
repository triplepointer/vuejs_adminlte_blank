<template>
    <table class="table">
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
    name: "SimpleFullWidthTable",
}
</script>

<style>

</style>