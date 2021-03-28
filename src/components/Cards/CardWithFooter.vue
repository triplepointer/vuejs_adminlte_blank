<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
        <div class="card-footer clearfix">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardWithFooter",
}
</script>

<style>

</style>