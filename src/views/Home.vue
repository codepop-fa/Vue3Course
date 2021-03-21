<template>
  <div class="events">
    <EventCard>
      <template v-slot:title>
        <h4>روز درختکاری</h4>
      </template>
      <template v-slot:default>
        <span>راس ساعت 12:00 در تاریخ 1400/01/13</span>
      </template>
    </EventCard>
    <BaseIcon />
    <BaseButton>ثبت</BaseButton>
    <BaseButton>ویرایش</BaseButton>
    <BaseButton>حذف</BaseButton>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'


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
