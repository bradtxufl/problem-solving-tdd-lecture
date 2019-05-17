var objLib = {
    deepEqual: function (obj1, obj2) {
        let obj1Keys = Object.keys(obj1)
        let obj2Keys = Object.keys(obj2)

        // should return true if provided two empty objects
        if (!obj1Keys.length && !obj2Keys.length) {
            return true
        }

        // should return false if objs have different amounts of keys
        if (obj1Keys.length !== obj2Keys.length) {
            return false
        }

        let sortedObj1Keys = obj1Keys.sort()
        let sortedObj2Keys = obj2Keys.sort()

        // should return false if any of the keynames are different

        for (let index = 0; index < sortedObj1Keys.length; index++) {
            const key = sortedObj1Keys[index]
            if (sortedObj2Keys[index] !== key) {
                return false
            }
            let obj1Val = obj1[key]
            let obj2Val = obj2[key]

            if (typeof obj1Val === 'object' || typeof obj1Val === 'function' || typeof obj2Val === 'object' || obj2Val === 'function') {
                // console.log(obj1Val)
                return false
            }
        }


        return true




    },
}

const res = objLib.deepEqual(
    {
        foo: 'bar',
        asdf: {}
    },
    {
        alph: 'olimar',
        foo: 'bar'
    }
)

console.log(res)