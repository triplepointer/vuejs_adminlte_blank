<template>
    <table class="table table-bordered" :id="id">
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
    props: ['id'],
}
</script>

<style>

</style>