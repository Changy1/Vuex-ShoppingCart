
import _ from 'lodash'

const api = {
    addGoods({id, name, price, num = 1, imgUrl}) {
        return new Promise(resolve => {
            setTimeout(async () => {
                let { goods } = await this.getCarGoods() 
                //判断有没有这个物品
                let good = _.find(goods, item => item.id === id)

                if ( good ) {
                    good.num += num
                } else {
                    goods.push({
                        id, name, price, num, imgUrl
                    })
                }

                this.changeCarGoods(goods)
                
                resolve({ status: 200, goods})

            }, 200) 
        })
    },
    getCarGoods() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200, 
                    goods: localStorage.goods ? JSON.parse(localStorage.goods) : []
                })
            }, 200)
        })
    },
    changeCarGoods(goods) {
        localStorage.goods = JSON.stringify(goods)
    },
    controlGoodNumber({id, control_type}) {
        return new Promise( resolve => {
            setTimeout ( async () => {
                let { goods } = await this.getCarGoods()
                let good = _.find(goods, item => item.id === id)
                good.num += control_type ? 1 : -1

                if ( good.num <= 0) {
                    _.remove(goods, item => item.id === id)
                }
                this.changeCarGoods(goods)
                resolve({
                    status: 200,
                    goods
                })
            },200)
        })
    }
}

export default api