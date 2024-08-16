<script lang="ts">
import AddPage from '@/components/AddPage.vue';
import FooTer from '@/components/FooTer.vue';

export default {
    name: 'AddView',
    components: {
        AddPage,
        FooTer
    }
}   
</script>

<template>
    <div class="add_view">
        <AddPage />
        <FooTer />
    </div>
</template>

<style>
.add_view {
  padding: 2rem;
}
</style>