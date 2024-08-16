<script lang="ts">
import DetailsPage from '@/components/DetailsPage.vue';

export default {
    name: 'DetailsView',
    components: {
        DetailsPage,
    }
}   
</script>

<template>
    <div class="details_view">
        <DetailsPage />
    </div>
</template>

<style>
.details_view {
  padding: 2rem;
}
</style>