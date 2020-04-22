<template>
   <q-page>
    <div class="text-center q-mb-lg">
		<q-btn class="q-mr-md q-mt-lg" large router to="/meetup/new" color="primary">Explorar Meetup</q-btn>
        <q-btn class="q-mt-lg" large router to="/meetup/new" color="primary">Organizar Meetup</q-btn>
	</div>

    <q-carousel
      arrows
      animated
      navigation
      infinite
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide style="cursor: pointer" v-for="meetup in meetups" :key="meetup.id" :name="meetup.q" :img-src="meetup.imgUrl" @click="onLoadMeetup(meetup.id)">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{ meetup.title }}</div>
          <div class="text-subtitle1">{{ meetup.subtitle }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

  </q-page>
</template>

<script> 
export default {
    data() {
        return {
            slide: 'first',
        }
    },
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        }
    },
    methods: {
        onLoadMeetup (id) {
            this.$router.push('/meetups/' + id)

        }
    }
    
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  bottom: 50px
  
</style>
