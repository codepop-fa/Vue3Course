<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: "Home",
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          title: 'روز طبیعت',
          date: '1400/01/13',
          time: '12:00'
        },
         {
          id: 5928202,
          title: 'روز نیکوکاری',
          date: '1400/07/01',
          time: '18:00'
        },
           {
          id: 5928549,
          title: 'جشن تولد',
          date: '1400/08/20',
          time: '16:00'
        }
      ]
    }
  },
};
</script>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
