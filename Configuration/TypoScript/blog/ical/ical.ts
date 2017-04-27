lib.stdheader >
tt_content.stdWrap.innerWrap >
tt_content.stdWrap.wrap >
# get away <div class="feEditAdvanced-firstWrapper" ...> if your logged into the backend
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

pageNewsICalendar = PAGE
pageNewsICalendar.10 < lib.content.main

config {
	# deactivate Standard-Header
	disableAllHeaderCode = 1
	# no xhtml tags
	xhtml_cleaning = none
	admPanel = 0
	metaCharset = utf-8
	# you need an english locale to get correct rfc values for <lastBuildDate>, ...
	locale_all = de_DE
	# define charset
	additionalHeaders = Content-Type:text/calendar;charset=utf-8
	disablePrefixComment = 1
}

# set the format
plugin.tx_news {
	settings {
		format = ical
		domain.data = getEnv:HTTP_HOST
		detail {
			errorHandling = 30,404
			showPrevNext = 0
		}
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
	}
	rss.channel {
		title = Ökumene Tiergarten
		description = Der Ökumenische Arbeitskreis Tiergarten. Aus Freude am Glauben für eine gute Nachbarschaft
		link = http://oekumene-tiergarten-test.thomas-woehlke.de/feed.rss
		language = de-de
		copyright = Der Ökumenische Arbeitskreis Tiergarten
		category = assdf
		generator = TYPO3 EXT:news
	}
}

# delete content wrap
tt_content.stdWrap >

