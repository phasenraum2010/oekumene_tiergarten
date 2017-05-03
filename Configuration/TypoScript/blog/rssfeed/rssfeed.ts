lib.fluidContent {
	templateRootPaths {
		310 = {$plugin.tx_oekumene_tiergarten.view.content.templateRootPath}
		300 = EXT:oekumene_tiergarten/Resources/Private/Templates/Content/
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

lib.stdheader >
tt_content.stdWrap.innerWrap >
tt_content.stdWrap.wrap >
tt_content.stdWrap.editPanel = 0
# get away <div class="feEditAdvanced-firstWrapper" ...> if your logged into the backend
styles.content.get.stdWrap.innerWrap >
styles.content.get.stdWrap.editPanel = 0
styles.content.get.stdWrap >


lib.content.main >
lib.content.main = COA
lib.content.main {
	10 = CONTENT
	10 {
		table = tt_content
		select.orderBy = sorting ASC
		select.where = colPos=0  AND list_type = "news_pi1"
		select.max = 1
	}
}

pageNewsRSS = PAGE
pageNewsRSS.10 < lib.content.main

config {
	# deactivate Standard-Header
	disableAllHeaderCode = 1
	# no xhtml tags
	xhtml_cleaning = none
	admPanel = 0
	# define charset
	metaCharset = utf-8
	# you need an english locale to get correct rfc values for <lastBuildDate>, ...
	locale_all = de_DE
	# before CMS 8 (adjust if using ATOM)
	additionalHeaders = Content-Type:application/xml;charset=utf-8
	# CMS 8 (adjust if using ATOM)
	additionalHeaders.10.header = Content-Type:application/xml;charset=utf-8
	disablePrefixComment = 1
	index_metatags = 0
	debug = 0
	prefixLocalAnchors = all
	absRelPath = /
	tx_realurl_enable = 1
	index_enable = 0
	index_externals = 0
	#spamProtectEmailAddresses = 2
	#spamProtectEmailAddresses_atSubst = (at)
}

# set the format
plugin.tx_news {
	view {
		templateRootPaths {
			310 = {$plugin.tx_oekumene_tiergarten.view.content.templateRootPath}
			300 = EXT:oekumene_tiergarten/Resources/Private/Templates/Content/
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
	settings {
		format = xml
		#domain.data = getEnv:HTTP_HOST
		detail {
			errorHandling = 30,404
			showPrevNext = 0
			showSocialShareButtons = 0
		}
		list {
			media.dummyImage = typo3conf/ext/oekumene_tiergarten/Resources/Public/Images/logo_oekumene.jpg
			paginate {
				itemsPerPage = 5
				insertAbove = 1
				insertBelow = 1
				prevNextHeaderTags = 1
				maximumNumberOfLinks = 3
			}
			rss.channel {
				title = Ökumene Tiergarten
				description = Der Ökumenische Arbeitskreis Tiergarten. Aus Freude am Glauben für eine gute Nachbarschaft
				link = http://oekumene-tiergarten-test.thomas-woehlke.de
				language = de-de
				copyright = Der Ökumenische Arbeitskreis Tiergarten
				category = asdf
				generator = TYPO3 EXT:news
			}
		}
		link {
			hrDate = 1
			hrDate {
				day = d
				month = m
				year = Y
			}
		}
		defaultDetailPid = 6
		cropMaxCharacters = 200
		includeSubCategories = 1
		categoryConjunction = 1
		startingpoint = 22
		recursive = 4
		detailPid = 6
		listPid = 46
		backPid = 46
		detailPidDetermination = default
		overrideFlexformSettingsIfEmpty = backPid,listPid,startingpoint,recursive,cropMaxCharacters
		enablePreviewOfHiddenRecords = 0
		overrideFlexformSettingsIfEmpty = backPid,listPid,startingpoint,recursive,list.paginate.itemsPerPage,cropMaxCharacters
		enablePreviewOfHiddenRecords = 0
		facebookLocale = de_DE
		disqusLocale = de_DE
		googlePlusLocale = de_DE
	}

}

# delete content wrap
tt_content.list.20.stdWrap.editIcons.iconTitle.data >
tt_content.list.20.stdWrap.editIcons.iconTitle >
tt_content.list.20.stdWrap.editIcons >
tt_content.list.20.stdWrap >
