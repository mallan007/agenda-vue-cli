<script lang="ts">
import AddPage from '@/components/AddPage.vue';

export default {
    name: 'AddView',
    components: {
        AddPage,
    }
}   
</script>

<template>
    <div class="add_view">
        <AddPage />
    </div>
</template>

<style>
.add_view {
  padding: 2rem;
}
</style>