var objLib = {
    deepEqual: function (obj1, obj2) {
        if (arguments.length > 2) {
            throw new Error("Only two arguments should be provided.")
        }

        if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
            throw new Error("Both arguments should be an object")
        }

        const obj1Keys = Object.keys(obj1)
        const obj2Keys = Object.keys(obj2)

        if (obj1Keys.length !== obj2Keys.length) {
            return false
        }

        const sortedObj1keys = obj1Keys.sort()
        const sortedObj2Keys = obj2Keys.sort()

        for (let i = 0; i < sortedObj1keys.length; i++) {
            if (sortedObj1keys[i] !== sortedObj2Keys[i]) {
                return false
            }
            if ((typeof sortedObj1keys[i] === 'object') || (typeof sortedObj1keys[i] === 'function')) {
                return objLib.deepEqual(sortedObj1keys[i] , sortedObj2Keys[i])
            } else {
              return true;
            }
        }
        return true
    }
}
