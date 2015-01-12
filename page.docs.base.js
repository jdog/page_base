PAGE.add("Docs.base", {

	"jDog" : "version 1.0"

	, "Methods" : [
		{
			"Name" : "loadScript"
			, "Usage" : [
					[ "string pathToFile" ]
					, [ "string pathToFile", "string pathToFile", "..." ]
					, [ "string pathToFile", "boolean allowCache" ]
				]
			, "Tags" : [ "utility", "synchronous", "loading" ]
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Examples" : [
				"PAGE.loadScript('/Content/css/buttons.js')"
				, "PAGE.loadScript('/Content/css/buttons.js', true)"
				, " PAGE.loadScript( \n  '/Scripts/page.constructors.dataService.js' \n  , '/Scripts/page.constructors.dataService.read.js' \n  , '/Scripts/page.constructors.dataService.write.js' \n  , '/Scripts/page.modules.dataService.write.js' \n  , '/Scripts/page.modules.dataService.read.js' \n  , true)"
				, " PAGE.loadScript( \n  '~/Scripts/page.constructors.dataService.js' \n  , '~/Scripts/page.constructors.dataService.read.js' \n  , '~/Scripts/page.constructors.dataService.write.js' \n  , '~/Scripts/page.modules.dataService.write.js' \n  , '~/Scripts/page.modules.dataService.read.js' \n  , true)"
			]
			, "Description" : "Though it is discouraged to load production code in none bundled single files, there are times when you need to conditionally load javascript onto a page. Also, it can be a helpful practice when first building out code to have full access to add or remove scripts needed. Load one or many files.<br><br>Note for C# developers, since .NET uses the ~ character for file paths, you are free to use it, the code will ignore it"
			, "Definitions" : {
				"pathToFile" : "Absolute or relative path file script file. Relative paths are relative to URL of current source page"
				, "allowCache" : "If not true the browser will naturally cache the file"
			}
		}

		, {
			"Name" : "loadStyle"
			, "Usage" : [
					[ "pathToFile" ]
					, [ "pathToFile", "pathToFile", "pathToFile", "pathToFile" ]
					, [ "pathToFile", "allowCache" ]
					, [ "String", "Boolean" ]
				]
			, "Tags" : [ "utility", "synchronous", "loading" ]
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Examples" : [
				"PAGE.loadStyle('/Content/css/buttons.css')"
				, "PAGE.loadStyle('/Content/css/buttons.css', true)"

				, " PAGE.loadStyle( \n  '~/Content/Home/Header.css' \n  , '~/Content/Home/footer.css' \n  , '~/Content/Login.css' \n  , '~/Content/style.css' \n  , '~/Content/bootstrap.css')"

			]
			, "Description" : "This is the cousin of loadScript which basically does the same thing. Though it is discouraged to load production code in none bundled single files, there are times when you need to conditionally load css onto a page. Also, it can be a helpful practice when first building out code to have full access to add or remove stylesheets. Loads one or many files."
			, "Definitions" : {
				"pathToFile" : "Absolute or relative path file css file. Relative paths are relative to URL of current source page"
				, "allowCache" : "If not true the browser will naturally cache the file"
			}
		}

		, {
			"Name" : "addExternalLibrary"
			, "Usage" : [
					[ "pathToFile", "globalVariableName", "callback" ]
					, [ "String", "String", "Function" ]
				]
			, "Tags" : [ "utility", "asynchronous", "loading" ]
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Examples" : [

				"PAGE.addExternalLibrary( \n  '/Scripts/SpecialDropDown.js' \n  , 'jQuery.fn.dropDrop' \n  , function() { \n \n   $('#Droper').dropDrop() \n \n })"

			]
			, "Description" : "This is useful for loading some 3rd party library, waiting for the results, and then triggering a callback onces it has fully instantiated."

			, "Definitions" : {
				"pathToFile" : "Absolute or relative path file css file. Relative paths are relative to URL of current source page"
				, "globalVariableName" : "This is the path of the loaded script relative to the window object. For example, if the script is the select2 library, which is actually a jQuery extension. then the globalVariableName would be 'jQuery.fn.select2'. However, many times third party libraries are added directly to the window object."
				, "Callback" : "Function to call the globalVariablePath has a value"
			}
		}

		, {
			"Name" : "remove"
			, "Usage" : [
					[ "Path" ]
					, [ "Path", "Base" ]
					, [ "Path", "Base", "swap" ]
					, [ "String", "Object", "Boolean" ]
				]
			, "Tags" : [ "swap", "delete", "remove", "synchronous", "testing", "mocking" ]
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Examples" : [
				"var old = PAGE.remove('Modules.dataService.read.getAll')"
				, "PAGE.remove('Modules.dataService.read.getAll', PAGE, function(){})"
			]
			, "Description" : "This is a specialized utility helpful in testing to remove an item from the PAGE object (or window object). Also can be used to swap out one library for another. It returns the thing being removed, so it could be used to store the removed item somewhere else"
			, "Definitions" : {
				"Path" : "Path of the item to be removed, example 'Constructors.YourConstructor'"
				, "Base" : "optional - Object to search in, defaults to PAGE"
				, "Swap" : "optional - if true then swap the target with this thing, still returns old removed version"
			}
			, "Returns" : "object being removed"
		}

		, {
			"Name" : "SwapLib"
			, "Usage" : [
					[ "hash" ]
					, [ "hash", "Base" ]
					, [ "Object", "Object" ]
				]
			, "Tags" : [ "swap", "delete", "remove", "synchronous", "testing", "mocking" ]
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Examples" : [
			]
			, "Description" : "This is a specialized utility for swapping out many different library items with the ability to restore them later. Used for testing code then returning it back to it's original state."
			, "Definitions" : {
				"hash" : "This is key value pair object, where the key is the original path, and the value is the new thing which replaces it"
				, "Base" : "optional - Object to search in, defaults to PAGE"
			}
			, "Returns" : "new module with restore method"
		}
		, {
			"Name" : "stash"
			, "Usage" : [
					[ "key" ]
				]
			, "Tags" : [ "hiding", "hacking" ]
			, "Source" : [ "page.base.js" ]
			, "Parent" : [ "Base" ]
			, "Examples" : [
			]
			, "Description" : "This is an experimental method of hiding the PAGE variable."
			, "Definitions" : {
				"key" : "new place to put the PAGE object"
			}
			, "Returns" : "the PAGE variable"
		}
	]
})
