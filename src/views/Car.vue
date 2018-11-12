<template>
  <div class="app-car">

      <template v-if = "car.goods.length > 0">
        <app-car-item
          v-for = "good in car.goods"
          :key  = "good.id"
          :info = "good"
        ></app-car-item>
        <app-all-info></app-all-info>
      </template>
      <el-alert
        v-else
        title="没有更多数据"
        type="warning">
      </el-alert>
  </div>
</template>
<script>
import AppCarItem from '@/components/car/AppCarItem'
import AppAllInfo from '@/components/car/AppAllInfo'
import { mapState } from 'vuex'
export default {
   components: {
    AppCarItem,
    AppAllInfo
  },
  computed : {
    ...mapState(['car'])
  }
}
</script>
