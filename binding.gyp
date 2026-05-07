{
	"targets": [
		{
			"target_name": "PaymoWinShutdownHandler",
			"cflags_cc": [
				"-std=c++17"
			],
			"xcode_settings": {
				"CLANG_CXX_LANGUAGE_STANDARD": "c++17",
				"CLANG_CXX_LIBRARY": "libc++"
			},
			"conditions": [
				["OS=='win'", {
					"sources": [
						"module/main.cpp",
						"module/WinShutdownHandler.cpp"
					],
					"libraries": [
						"User32.lib"
					],
					"msvs_settings": {
						"VCCLCompilerTool": {
							"AdditionalOptions": [
								"/std:c++17"
							]
						}
					}
				}]
			],
			"include_dirs": [
				"<!@(node -p \"require('node-addon-api').include\")"
			],
			"libraries": [],
			"dependencies": [
				"<!(node -p \"require('node-addon-api').gyp\")"
			],
			"defines": [
				"NAPI_DISABLE_CPP_EXCEPTIONS",
				"NAPI_VERSION=<(napi_build_version)"
			]
		}
	]
}
