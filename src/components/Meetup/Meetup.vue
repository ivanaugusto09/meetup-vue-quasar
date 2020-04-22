<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card row">
      <q-card-section class="col-12">
        <div class="text-h6 q-mb-lg">{{ meetup.title }}</div>
        <q-img :src="meetup.imgUrl" height="400px" />
        <div class="text-subtitle2 q-mt-lg">{{ meetup.date }}</div>
      </q-card-section>
      <q-card-section
        class="q-pt-none"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q-card-section>

      <q-card-actions class="q-px-md">
        <q-btn color="primary">Registrar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 750px
    background-color: #fff

.text-h6
    color: purple
.text-subtitle2
    color: #31CCEC
</style>
