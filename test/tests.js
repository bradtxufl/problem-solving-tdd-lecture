const expect = chai.expect

// const json = 

describe('objLib', function () {

    describe('#deepEqual', function () {

        // is it a function
        it('should be a function', function () {
            expect(objLib.deepEqual).to.be.a('function')
        })

        // check if keys are all the same

        // check if values are all the same

        // if we run into another reference type, call the function again (recursion)

        // inputs?

        // verify that both inputs are objects
        it('should throw an error if not given two objects', function () {
            // expect to throw
            expect(objLib.deepEqual.bind(null, {}, "")).to.throw()
        })

        // only two arguments
        it('should throw an error if given more than two arguments', function () {
            // expect to throw
            expect(objLib.deepEqual.bind(null, {}, {}, "", {})).to.throw()
        })

        // outputs?

        // output a boolean
        it('should return a boolean', function () {
            // expect to throw
            expect(typeof objLib.deepEqual({}, {})).to.equal("boolean")
        })

        // errors?

        // what are some easy wins?

        it('should return false if given objects with different numbers of', function () {
            // expect to throw
            expect(objLib.deepEqual({ foo: 'bar' }, {})).to.equal(false)
        })

        it('should return false if all the keys are not the same', function () {
            const obj1 = {
                foo: 'bar',
                baz: 'baz'
            }
            const obj2 = {
                bar: 'baz',
                foo: 'bar'
            }
            // expect to throw
            expect(objLib.deepEqual(obj1, obj2)).to.equal(false)
        })

        it('should return true if all the keys are the same and all the values are the same and are primitive types', function () {
            const obj1 = {
                foo: 8,
                bar: false
            }
            const obj2 = {
                foo: 8,
                bar: false
            }
            // expect to throw
            expect(objLib.deepEqual(obj1, obj2)).to.equal(true)
        })






    })

})