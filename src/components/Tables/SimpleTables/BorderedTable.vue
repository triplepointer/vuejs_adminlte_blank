<template>
    <table class="table table-bordered">
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
    name: "BorderedTable",
}
</script>

<style>

</style>