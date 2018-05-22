const spec = [
	'fullscreen',
	'fullscreenEnabled',
	'fullscreenElement',
	'fullscreenchange',
	'fullscreenerror',
	'exitFullscreen',
	'requestFullscreen'
]

const webkit = [
	'webkitIsFullScreen',
	'webkitFullscreenEnabled',
	'webkitFullscreenElement',
	'webkitfullscreenchange',
	'webkitfullscreenerror',
	'webkitExitFullscreen',
	'webkitRequestFullscreen'
]

const moz = [
	'mozFullScreen',
	'mozFullScreenEnabled',
	'mozFullScreenElement',
	'mozfullscreenchange',
	'mozfullscreenerror',
	'mozCancelFullScreen',
	'mozRequestFullScreen'
]

const ms = [
	'',
	'msFullscreenEnabled',
	'msFullscreenElement',
	'MSFullscreenChange',
	'MSFullscreenError',
	'msExitFullscreen',
	'msRequestFullscreen'
]

// Make sure document exist, if it doesn't make it a dumb object
document ? document : (document = {})

// Get the vendor fullscreen prefixed api
const fsVendorKeywords = (function getFullscreenApi () {
	const fullscreenEnabled = [spec[1], webkit[1], moz[1], ms[1]].find((prefix) => document[prefix])
	return [spec, webkit, moz, ms].find((vendor) => {
		return vendor.find((prefix) => prefix === fullscreenEnabled)
	})
})()

function handleEvent (eventType, event) {
	document[spec[0]] = document[fsVendorKeywords[0]] ||
		!!document[fsVendorKeywords[2]] || false
	document[spec[1]] = document[fsVendorKeywords[1]]
	document[spec[2]] = document[fsVendorKeywords[2]]
	document.dispatchEvent(new Event(eventType), event.target)
}

function setupShim () {
	// fullscreen
	// Defaults to false for cases like MS where they do not have this
	// attribute. Another way to check whether fullscreen is active is to look
	// at the fullscreenElement attribute.
	document[spec[0]] = document[fsVendorKeywords[0]] || 
		!!document[fsVendorKeywords[2]] || false

	// fullscreenEnabled
	document[spec[1]] = document[fsVendorKeywords[1]]

	// fullscreenElement
	document[spec[2]] = document[fsVendorKeywords[2]]

	// onfullscreenchange
	document.addEventListener(fsVendorKeywords[3], handleEvent.bind(document, spec[3]), false)

	// onfullscreenerror
	document.addEventListener(fsVendorKeywords[4], handleEvent.bind(document, spec[4]), false)

	// exitFullscreen
	document[spec[5]] = function () { return document[fsVendorKeywords[5]]() }

	// requestFullscreen
	Element.prototype[spec[6]] = function () {
		return this[fsVendorKeywords[6]].apply(this, arguments)
	}
}

// Don't polyfill if it already exist
export default document[spec[1]] ? {} : setupShim()
