<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card row" v-for="meetup in meetups" :key="meetup.id">
      <img :src="meetup.imgUrl" class="col-4" />

      <q-card-section class="col-8">
        <div class="text-h6">{{ meetup.title }}</div>
        <div class="text-subtitle2">{{ meetup.date }}</div>
        <q-btn :to="'/meetups/' + meetup.id" color="primary">Ver MeetUp</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  },
  computed: {
      meetups() {
          return this.$store.getters.loadedMeetups
      }
  }
};
</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 750px
    background-color: #fff
.q-btn
    margin-top: 50px
</style>
