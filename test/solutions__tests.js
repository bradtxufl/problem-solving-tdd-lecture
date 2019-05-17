const expect = chai.expect

describe('objLib', function () {

    describe('#deepEqual', function () {


        it('should throw an error if not given an object', function () {
            expect(objLib.keys.bind(null, [1, 2, 3])).to.throw(TypeError, "objLib.keys() must be called on an object.")
        })
    })

})