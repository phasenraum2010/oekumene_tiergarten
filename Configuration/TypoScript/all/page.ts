page {
	includeCSS {
		file1 = https://fonts.googleapis.com/css?family=Titillium+Web
		file2 = EXT:oekumene_tiergarten/Resources/Public/Contrib/map-icons/css/map-icons.min.css
		file3 = EXT:oekumene_tiergarten/Resources/Public/css/my.css
	}
	includeJS {
		file1 = EXT:oekumene_tiergarten/Resources/Public/Contrib/map-icons/js/map-icons.min.js
		file2 = EXT:oekumene_tiergarten/Resources/Public/js/my.js
	}
	config {
		index_enable = 1
		# Wenn gesetzt, werden externe Medien, auf die auf Seiten verlinkt wird, ebenfalls indiziert.
		index_externals = 1
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
