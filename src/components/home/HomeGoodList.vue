
<template>
    <div class="app-home-good-list">
        <el-container>
            <el-header>
                <h1>推荐商品</h1>
            </el-header>
            <el-main>
                <el-row>
                    <el-col :span='6' v-for = 'o in lists' :key = 'o.id'>
                        <app-home-good-item :info= 'o'></app-home-good-item>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import AppHomeGoodItem from '@/components/home/HomeGoodItem.vue'
export default {
    async beforeCreate () {
        let results = await this.$jsonp({
            url: 'http://mbrand.xiu.com/brand/brandGoodsSearchByParams',
            params: {
                bId: 1308,
                sort: 11,
                p: 1,
            }
        })      
        this.lists = results.goodsItems
    },
    data () {
        return {
            lists: []
        }
    },
    components: {
        AppHomeGoodItem    
    }
}
</script>

<style lang="scss">

</style>