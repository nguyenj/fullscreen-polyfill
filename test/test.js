describe('Fullscreen API', function () {
	describe('#fullscreen', function () {
		it('should be a boolean', function () {
			assert.equal(typeof(document.fullscreen), 'boolean')
		})
		it('should be false by default', function () {
			assert.equal(document.fullscreen, false)
		})
	})
	describe('#fullscreenEnabled', function () {
		it('should be a boolean', function () {
			assert.equal(typeof(document.fullscreenEnabled), 'boolean')
		})
	})
	describe('#fullscreenElement', function () {
		it('should be null', function () {
			assert.equal(typeof(document.fullscreenElement), 'object')
			assert.equal(document.fullscreenElement, null)
		})
	})
	describe('#exitFullscreen', function () {
		it('should be a function', function () {
			assert.equal(typeof(document.exitFullscreen), 'function')
		})
	})
	describe('#requestFullscreen', function () {
		it('should be a function', function () {
			assert.equal(typeof(document.body.requestFullscreen), 'function')
		})
	})
})
