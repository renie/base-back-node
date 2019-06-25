import assert from 'assert'

import { genericErrorFunction } from './generalRoutes'

describe('General Routes', () => {

    describe('genericErrorFunction', () => {

        const shouldReturn = {
            msg: "Error: Last error layer. Cause: Pfffff, I dunno. Ask your programmer.",
            code: "500"
        }

        let returnTest = {
            msg: null,
            code: null
        }

        const res = {
            status: code => ({
                send: msg => {
                    returnTest = { code, msg }
                }
            })
        }

        it('should add route to express instance', () => {
            genericErrorFunction({}, res)

            assert.deepEqual(returnTest, shouldReturn)
        })

    })

})
