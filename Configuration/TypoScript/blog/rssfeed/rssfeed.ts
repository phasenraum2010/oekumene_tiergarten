[globalVar = TSFE:type = 9818]
	lib.stdheader >
	tt_content.stdWrap.innerWrap >
	tt_content.stdWrap.wrap >
	tt_content.stdWrap.editPanel = 0
	# get away <div class="feEditAdvanced-firstWrapper" ...> if your logged into the backend
	styles.content.get.stdWrap >

	pageNewsRSS = PAGE
	pageNewsRSS.typeNum = 9818
	pageNewsRSS.10 < styles.content.get
	pageNewsRSS.10.select.where = colPos=0 AND list_type = "news_pi1"
	pageNewsRSS.10.select {
		orderBy = sorting ASC
		max = 1
	}

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
	}

	# set the format
	plugin.tx_news {
		settings {
			format = xml
			#domain.data = getEnv:HTTP_HOST
			#useStdWrap = domain
			detail {
				errorHandling = 30,404
				showPrevNext = 1
			}
			cropMaxCharacters = 200
			includeSubCategories = 1
			categoryConjunction = 1
			startingpoint = 22
			recursive = 4
			detailPid = 6
			listPid = 5
			backPid = 5
			detailPidDetermination = default
			overrideFlexformSettingsIfEmpty = backPid,listPid,startingpoint,recursive,cropMaxCharacters
			enablePreviewOfHiddenRecords = 0
		}
		rss.channel {
			title = Ökumene Tiergarten
			description = Der Ökumenische Arbeitskreis Tiergarten. Aus Freude am Glauben für eine gute Nachbarschaft
			link = http://oekumene-tiergarten-test.thomas-woehlke.de/feed.rss
			language = de-de
			copyright = Der Ökumenische Arbeitskreis Tiergarten
			category =
			generator = TYPO3 EXT:news
		}
	}

	# delete content wrap
	tt_content.stdWrap >
[global]
