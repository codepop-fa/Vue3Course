<template>
  <div class="events">
    <EventCard />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';

export default {
  name: "Home",
  components: {
    EventCard
  }
};
</script>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
