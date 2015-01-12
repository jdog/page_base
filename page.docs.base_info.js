PAGE.add("Docs.base_info", {
	"jDog" : "version 1.0"
	, "Methods" : [
		{
			"Name" : "base"
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Tags" : ["about", "base"]
			, "Description" : [
				"page.base.js adds common functionaity to PAGE. Originally it was included as part of the same file, but to tighten the library and speed up initial page loading time, it was split so it could load later. Unless your code depends upon methods in base, it is technically optional to include it."
			]
			, "Examples" : [
				"&#x3c;html&#x3e;\n&#x3c;head&#x3e;\n  // put this towards the top of the page, in the head\n  &#x3c;script src=\"page.loader.js\"&#x3e;&#x3c;/script&#x3e;\n  // jQuery if you got it\n&#x3c;/head&#x3e;\n&#x3c;body&#x3e;\n  ...\n  lots of your code here\n  ...\n&#x3c;/body&#x3e;\n&#x3c;script src=\"page.base.js\"&#x3e;&#x3c;/script&#x3e;\n  // Properties (so they load before being called)\n  // Constructors\n  // Functions\n  // Modules\n&#x3c;/html&#x3e;"
			]
		}
	]
})
