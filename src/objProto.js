var objLib = {
    deepEqual: function (obj1, obj2) {
      console.log(obj1, obj2);
        if (arguments.length > 2) {
            throw new Error("Only two arguments should be provided.")
        }

        if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
            throw new Error("Both arguments should be an object")
        }

        let obj1Keys = Object.keys(obj1)
        let obj2Keys = Object.keys(obj2)

        if (obj1Keys.length !== obj2Keys.length) {
            return false
        }

        let sortedObj1keys = obj1Keys.sort()
        let sortedObj2Keys = obj2Keys.sort()
        // console.log(obj1[sortedObj2Keys])
        //
        // console.log(obj2[sortedObj2Keys])

        for (let i = 0; i < sortedObj1keys.length; i++) {
          // console.log(sortedObj1keys, sortedObj2Keys)
          var ob1key = sortedObj1keys[i]
          var ob2key = sortedObj2Keys[i]
          if ((typeof obj1[ob1key] === 'object')) {
              // console.log('test')
              return objLib.deepEqual(obj1[ob1key] , obj2[ob2key])
            } else {
                if (sortedObj1keys[i] !== sortedObj2Keys[i]) {
                return false;
              } else {
                return true;
              }
          }
        }
        return true
    }
}
