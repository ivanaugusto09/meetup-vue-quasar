
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('components/Home.vue') },
      { path: '/meetups', component: () => import('components/Meetup/Meetups.vue') },
      { path: '/meetups/new', component: () => import('components/Meetup/CreateMeetup.vue') },
      { path: '/meetups/:id', props: true, component: () => import('components/Meetup/Meetup.vue') },
      { path: '/profile', component: () => import('components/User/Profile.vue') },
      { path: '/sigin', component: () => import('components/User/Sigin.vue') },
      { path: '/signup', component: () => import('components/User/Signup.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
