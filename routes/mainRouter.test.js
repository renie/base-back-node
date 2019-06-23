import assert from 'assert'

import { setRoute } from './mainRouter'

describe('Main Router', () => {

	describe('setRoute', () => {

		let returnTest = false

		let route = {
			method: 'get',
			url: 'users',
			fn: () => { returnTest = true }
		}

		let mockExpressInstance = {
			routes: [],
			get: (url, fn, errFn) => {
				mockExpressInstance.routes.push({url, fn})
			}
		}

		it('should add route to instance', () => {
			setRoute(route, mockExpressInstance)
			
			assert.notDeepEqual(mockExpressInstance.routes, [])
			mockExpressInstance.routes[0].fn()

			assert.equal(mockExpressInstance.routes[0].url, route.url)
			assert.ok(returnTest)
		})

	})

})
