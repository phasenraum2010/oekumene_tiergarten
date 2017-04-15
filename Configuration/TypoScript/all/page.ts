page {
	includeCSS {
		cssFileGoogleFontTitilliumWeb = https://fonts.googleapis.com/css?family=Titillium+Web
		cssFileMapIcons = EXT:oekumene_tiergarten/Resources/Public/Contrib/map-icons/css/map-icons.min.css
		cssFileMyOwn = EXT:oekumene_tiergarten/Resources/Public/css/my.css
	}
	includeJSFooter {
		/*
		jsFileWecMapInfoBubble = EXT:wec_map/Resources/Public/JavaScript/ContribJS/infobubble.js
		jsFileWecMapNarkerManager = EXT:wec_map/Resources/Public/JavaScript/ContribJS/markermanager.js
		jsFileWecMapOms = EXT:wec_map/Resources/Public/JavaScript/ContribJS/oms.min.js
		jsFileWecMapCopyrights = EXT:wec_map/Resources/Public/JavaScript/copyrights.js
		jsFileWecMapWecMap = EXT:wec_map/Resources/Public/JavaScript/wecmap.js
		*/
		jsFileMapIcons = EXT:oekumene_tiergarten/Resources/Public/Contrib/map-icons/js/map-icons.min.js
		jsFileMyOwn = EXT:oekumene_tiergarten/Resources/Public/js/my.js
	}
	10 {
		templateRootPaths {
			310 = {$plugin.tx_oekumene_tiergarten.view.templateRootPath}
			305 = EXT:oekumene_tiergarten/Resources/Private/Templates/
		}
		partialRootPaths {
			310 = {$plugin.tx_oekumene_tiergarten.view.partialRootPath}
			300 = EXT:oekumene_tiergarten/Resources/Private/Partials/
		}
		layoutRootPaths {
			310 = {$plugin.tx_oekumene_tiergarten.view.layoutRootPath}
			300 = EXT:oekumene_tiergarten/Resources/Private/Layouts/
		}
	}
}

page.config {
	headerComment (
--------------------------------------------------
|                                                |
|  TYPO3 Website - Development by                |
|                                                |
|  Thomas Woehlke | 2017 | www.thomas-woehlke.de |
|                                                |
--------------------------------------------------
	)
	index_enable = 1
	# Wenn gesetzt, werden externe Medien, auf die auf Seiten verlinkt wird, ebenfalls indiziert.
	index_externals = 1
}
