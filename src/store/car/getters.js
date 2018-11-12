

const getters = {
    allInfo (state) {
        let allNumber = 0
        let allPrice = 0
        if ( state.goods.length ) {
            state.goods.forEach(good => {
                allNumber += good.num
                allPrice += good.num * good.price
            })
        }

        return { allNumber, allPrice}
    }
}

export default getters