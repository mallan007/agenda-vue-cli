<script lang="ts">
import UpdatePage from '@/components/UpdatePage.vue';

export default {
    name: 'UpdateView',
    components: {
        UpdatePage,
    }
}   
</script>

<template>
    <div class="update_view">
        <UpdatePage />
    </div>
</template>

<style>
.update_view {
  padding: 2rem;
}
</style>