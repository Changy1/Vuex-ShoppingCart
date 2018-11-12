<template>
    <div class="app-allinfo">
        <el-card class="box-card" shadow="hover">
            <h1>总价钱：{{allInfo.allPrice}} ；总数量: {{allInfo.allNumber}}</h1>
        </el-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            allInfo: 'car/allInfo'
        })
    }
}
</script>
<style lang="scss">
.app-allinfo{
   
    
}
</style>