<script lang="ts">
import UpdatePage from '@/components/UpdatePage.vue';
import FooTer from '@/components/FooTer.vue';

export default {
    name: 'UpdateView',
    components: {
        UpdatePage,
        FooTer
    }
}   
</script>

<template>
    <div class="update_view">
        <UpdatePage />
        <FooTer />
    </div>
</template>

<style>
.update_view {
  padding: 2rem;
}
</style>