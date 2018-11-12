<template>
  <div class="home">
    <app-home-good-list></app-home-good-list>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHomeGoodList from '@/components/home/HomeGoodList'
export default {
  name: 'home',
  components: {
    AppHomeGoodList
  }
}
</script>
