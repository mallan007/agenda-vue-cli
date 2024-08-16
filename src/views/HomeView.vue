<script lang="ts">
import HomePage from '@/components/HomePage.vue';


export default {
    name: 'HomeView',
    components: {
        HomePage,
    }
}   
</script>

<template>
    <div class="home_view">
        <HomePage />
    </div>
</template>

<style>
.home_view {
  padding: 2rem;
}
</style>