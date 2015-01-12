PAGE.addWait(
	"Modules.localAPI"
	, [
		"Modules.remoteAPI" // local inherits from this
	]

	, function(ref) {

		var dog = ref.remoteAPI

		PAGE.loadScript(
			"page.docs.base_info.js"
			, "page.docs.base.js"
			, true)

		dog.buildAllSections([
			"Docs.base_info"
			, "Docs.base"
		])

		return dog

	})
