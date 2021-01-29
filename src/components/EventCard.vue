<template>
  <div class="event-card">
    <span>راس ساعت 12:00 در تاریخ 1400/01/13</span>
    <h4>روز درختکاری</h4>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card span {
 font-size: 12px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>