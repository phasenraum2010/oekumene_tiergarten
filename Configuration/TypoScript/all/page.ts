page {
	includeCSS {
		cssFileGoogleFontTitilliumWeb = https://fonts.googleapis.com/css?family=Titillium+Web
		cssFileMapIcons = EXT:oekumene_tiergarten/Resources/Public/Contrib/map-icons/css/map-icons.min.css
		mmenu1 = EXT:oekumene_tiergarten/Resources/Public/Contrib/mmenu/css/jquery.mmenu.all.css
		mmenu2 = EXT:oekumene_tiergarten/Resources/Public/Contrib/mmenu/wrappers/bootstrap/jquery.mmenu.bootstrap.css
		cssFileMyOwn = EXT:oekumene_tiergarten/Resources/Public/css/my.css
	}
	includeJSFooter {
		jsFileMapIcons = EXT:oekumene_tiergarten/Resources/Public/Contrib/map-icons/js/map-icons.min.js
		mmenu1 = EXT:oekumene_tiergarten/Resources/Public/Contrib/mmenu/js/jquery.mmenu.all.min.js
		mmenu2 = EXT:oekumene_tiergarten/Resources/Public/Contrib/mmenu/wrappers/bootstrap/jquery.mmenu.bootstrap.min.js
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


# mmenu main/left config
page.jsFooterInline.5.26.value (
 if(winWidth < 768 && $menuLeft.length) {
 $('#menu-left').mmenu({
 'extensions': [
 'pagedim-black',
 'theme-dark',
 'effect-slide-menu',
 'shadow-page',
 'shadow-panels'
 ],
 'keyboardNavigation': true,
 'screenReader': true,
 'counters': false,
 'navbar': {
	'title': 'Oekumene Tiergarten'
  },
 'navbars': [{
	'position': 'top',
	'content': [
		'prev',
		'title',
		'close'
	]
  },{
 'position': 'bottom',
 'content': [
 '<a class="glyphicon glyphicon-search" href="/information/suche/"></a>',
 '<a class="fa fa-envelope" href="/kontakt/"></a>',
 '<a class="fa fa-twitter" href="https://twitter.com/OekumeneMoabit\" target="_blank"></a>',
 '<a class="fa fa-facebook-official" href="https://www.facebook.com/Ökumene-in-Berlin-Tiergarten-107187572947095/" target="_blank"></a>'
 ]
 }]
 });
 }
)

# mmenu right config
page.jsFooterInline.5.27.value (
 if(winWidth < 768 && $menuRight.length) {
 $('#lml')
 .after('<a id=\'rml\' href=\'#menu-right\'><i class=\'fa fa-chevron-circle-down fa-lg pull-right navbar-toggle\' aria-hidden=\'true\'></i></a>');
 $('#menu-right').mmenu({
 'offCanvas': {
 'position': 'right'
 },
 'extensions': [
 'pagedim-black',
 'theme-dark',
 'effect-slide-menu',
 'shadow-page',
 'shadow-panels'
 ],
 'keyboardNavigation': true,
 'screenReader': true,
 'counters': false,
 'navbar': {
	'title': 'Oekumene Tiergarten'
  },
 });
 }
)
