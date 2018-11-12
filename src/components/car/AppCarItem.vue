<template>
    <div class="app-car-item">
        <el-card class="box-card" shadow="hover">
            <div class="info">
                <img :src="info.imgUrl" alt="">
                <div class="content">
                    <h3>{{info.name}}</h3>
                    <p>单价: ￥{{info.price}}</p>
                </div>
            </div>
            <div class="control">
                <el-input-number :value="info.num"  @change = "change" ></el-input-number>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    props: ['info'],
    methods: {
       change (val, oldval) {
           this.$store.dispatch ({
               type: 'car/controlGoodNumber',
               id: this.info.id,
               control_type: oldval < val
           })
       }
    }
}
</script>
<style lang="scss">
.app-car-item {
    width: 700px;
    margin: 0px auto 20px;

    .el-card__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info {
            img {
                width: 150px;
                height: 150px;
                margin-right: 15px;
            }
            display: flex;align-items: center;
        }
    }
    
}
</style>
