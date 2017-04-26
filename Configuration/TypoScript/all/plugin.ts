plugin {
	tx_oekumene_tiergarten {
		view {
			templateRootPaths {
				10 = EXT:oekumene_tiergarten/Resources/Private/Templates/
				20 = {$plugin.tx_oekumene_tiergarten.view.templateRootPath}
			}
			content.templateRootPaths {
				10 = EXT:oekumene_tiergarten/Resources/Private/Templates/Content/
				20 = {$plugin.tx_oekumene_tiergarten.view.content.templateRootPath}
			}
			partialRootPaths {
				10 = EXT:oekumene_tiergarten/Resources/Private/Partials/
				20 = {$plugin.tx_oekumene_tiergarten.view.partialRootPath}
			}
			layoutRootPaths {
				10 = EXT:oekumene_tiergarten/Resources/Private/Layouts/
				20 = {$plugin.tx_oekumene_tiergarten.view.layoutRootPath}
			}
		}
		settings {
			ttAdressPageId = {$plugin.tx_oekumene_tiergarten.settings.ttAdressPageId}
			feUserLoginDataPageId = {$plugin.tx_oekumene_tiergarten.settings.feUserLoginDataPageId}
			calenderDataPageId = {$plugin.tx_oekumene_tiergarten.settings.calenderDataPageId}
			calenderPluginPageId = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
			txNewsDataPageId = {$plugin.tx_oekumene_tiergarten.settings.txNewsDataPageId}
			powermailDataPageId = {$plugin.tx_oekumene_tiergarten.settings.powermailDataPageId}
			powermailPluginPageId = {$plugin.tx_oekumene_tiergarten.settings.powermailPluginPageId}
			directMailFolderPageId = {$plugin.tx_oekumene_tiergarten.settings.directMailFolderPageId}
			directMailSubscriptionPageId = {$plugin.tx_oekumene_tiergarten.settings.directMailSubscriptionPageId}
			googleMapsApiBrowserKey =  {$plugin.tx_oekumene_tiergarten.settings.googleMapsApiBrowserKey}
		}
	}
	tx_indexedsearch {
		_CSS_DEFAULT_STYLE >
	}
	tx_powermail {
		view {
			templateRootPaths {
				300 = EXT:oekumene_tiergarten/Resources/Private/Extensions/powermail/Templates/
			}
			partialRootPaths {
				300 = EXT:oekumene_tiergarten/Resources/Private/Extensions/powermail/Partials/
			}
			layoutRootPaths {
				300 = EXT:oekumene_tiergarten/Resources/Private/Extensions/powermail/Layouts/
			}
		}
	}
	tx_news {
		view {
			templateRootPaths {
				10 = {$plugin.tx_news.view.twb.templateRootPath}
			}
			partialRootPaths {
				10 = {$plugin.tx_news.view.twb.partialRootPath}
			}
			layoutRootPaths {
				10 = {$plugin.tx_news.view.twb.layoutRootPath}
			}
		}
		settings {
			facebookLocale = de_DE
			googlePlusLocale = de
			disqusLocale = de
			includeSubCategories = 1
			categoryConjunction = 1
			startingpoint = 22
			recursive = 4
			detailPid = 6
			listPid = 5
			backPid = 5
			detailPidDetermination = default
			cropMaxCharacters = 200
			overrideFlexformSettingsIfEmpty = backPid,listPid,startingpoint,recursive,list.paginate.itemsPerPage,cropMaxCharacters
			enablePreviewOfHiddenRecords = 1
			list {
				media.dummyImage = typo3conf/ext/oekumene_tiergarten/Resources/Public/Images/logo_oekumene.jpg
				paginate {
					itemsPerPage = 5
					insertAbove = 1
					insertBelow = 1
					prevNextHeaderTags = 1
					maximumNumberOfLinks = 3
				}
			}
			detail {
				errorHandling = 30,404
				showPrevNext = 1
				disqusShortname = oekumene-tiergarten
			}
			link {
				hrDate = 1
				hrDate {
					day = d
					month = m
					year = Y
				}
			}
			facebookLocale = de_DE
			disqusLocale = de_DE
			googlePlusLocale = de_DE
		}
	}
	feadmin.dmailsubscription {
		templateFile ={$plugin.feadmin.dmailsubscription.file.templateFile}
		cObjects {
			CATLIST {
				templateFile = {$plugin.feadmin.dmailsubscription.file.templateFile}
				pid = {$plugin.tx_oekumene_tiergarten.settings.directMailFolderPageId}
			}
		}
		# Global wraps
		wrap1.wrap = {$plugin.feadmin.dmailsubscription.wrap1}
		wrap2.wrap = {$plugin.feadmin.dmailsubscription.wrap2}
		color1.wrap = {$plugin.feadmin.dmailsubscription.color1}
		color2.wrap = {$plugin.feadmin.dmailsubscription.color2}
		color3.wrap = {$plugin.feadmin.dmailsubscription.color3}
		setfixed {
			approve._FIELDLIST = uid,pid
			DELETE._FIELDLIST = uid,pid
		}
	}
	tx_indexedsearch {
		templateFile = {$plugin.tx_indexedsearch.templateFile}
	}
	tx_mindshapecookiehint {
		settings {
			#choose style between "dark" or "light" (optional, default: dark)
			style = dark
			#position on "top" or "bottom" of your website (optional, default: bottom)
			position = top
			#page-id for more details about your cookies (optional, default: - )
			readmore = 18
			#append the cookie to the bottom of your page so it doesn't overlap footer-content
			appendToBottom = 0
		}
		_LOCAL_LANG.default {
			hint.learnMore = Weitere Informationen.
			hint.dismiss = OK
			hint.message = Diese Webseite verwendet Cookies, um die Bedienfreundlichkeit zu erhöhen.
		}
		_LOCAL_LANG.en {
			hint.learnMore = More info.
			hint.dismiss = Got it
			hint.message = This website uses cookies to ensure you get the best experience on our website.
		}
	}
	tx_evangtermine {
		view {
			templateRootPaths {
				20 = EXT:oekumene_tiergarten/Resources/Private/Extensions/evangtermine/Templates/
			}
			partialRootPaths {
				20 = EXT:oekumene_tiergarten/Resources/Private/Extensions/evangtermine/Partials/
			}
			layoutRootPaths {
				20 = EXT:oekumene_tiergarten/Resources/Private/Extensions/evangtermine/Layouts/
			}
		}
		persistence {
			storagePid = {$plugin.tx_oekumene_tiergarten.settings.txEvangterminePersistenceStoragePid}
		}
		settings {

			# Default jQuery UI CSS
			jQueryUICSS = Resources/Public/jquery-ui-1.11.4.custom/jquery-ui.min.css

			# Default CSS
			CSSFile = ../oekumene_tiergarten/Resources/Public/Contrib/evangtermine/default.css

			# Default jQuery
			jQuery = Resources/Public/jquery-1.11.1.min.js
			#jQuery =

			# Default jQuery UI
			jQueryUI = Resources/Public/jquery-ui-1.11.4.custom/jquery-ui.min.js

			# additional JavaScript
			customJS = Resources/Public/evangtermine.js
		}
	}
	tx_cal_controller {
		allowSubscribe = 0
		activateFluid = 0
		view {
			event {
				event {
					title.dataWrap = <h2>%%%TITLE_LABEL%%%:&nbsp; |</h2>
					title.dataWrap = <h2>|</h2>
					alldayTitle.dataWrap = <h2>|</h2>
					startdate.dataWrap = <div class="tx-kirche-cal-event-datetime"><span class="tx-kirche-cal-event-startdate">|</span></div>
					enddate.dataWrap = <span class="tx-kirche-cal-event-enddate">|</span>
					description.dataWrap = <div class="tx-kirche-cal-event-description">|</div>
					image.stdWrap.dataWrap = <div class="tx-kirche-cal-event-image">|</div>
					starttime.dataWrap = <div class="tx-kirche-cal-event-starttime">|</div>
					startdate.dataWrap = <span class="tx-kirche-cal-event-startdate">|</span>
					endtime.dataWrap = <span class="tx-kirche-cal-event-endtime">|</span>
					starttime.dataWrap = <span class="tx-kirche-cal-event-starttime">|</span>
					category.dataWrap = <span class="tx-kirche-cal-event-category">|</div>
					category.dataWrap = <span class="tx-kirche-cal-event-category">|</span>
					category.dataWrap = <span class="tx-kirche-cal-event-category">|</span>
					dateFormat = %d.%m.%Y
					organizer.dataWrap = <span class="cal-event-organizer">|</span>
					location.dataWrap = <span class="location">|</span>
					location.dataWrap = <span class="cal-event-location"><span class="map-icon map-icon-postal-code"></span>|</span>
					organizer.dataWrap = <span class="cal-event-organizer"><i class="fa fa-user-circle" aria-hidden="true"></i>|</span>
				}
				notify.dateFormat = %d.%m.%Y
				remind.dateFormat = %d.%m.%Y
				todo.dateFormat = %d.%m.%Y
			}
			organizer {
				event.dateFormat = %d.%m.%Y
				organizer {
					name.dataWrap = <span class="tx-kirche-cal-organizer-name">|</span>
					street.dataWrap = <span class="tx-kirche-cal-organizer-street">|</span>
					city.dataWrap = <span class="tx-kirche-cal-organizer-city">|</span>
					zip.dataWrap = <span class="tx-kirche-cal-organizer-zip">|</span>
					phone.dataWrap = <div><i class="fa fa-phone" aria-hidden="true"></i><span class="tx-kirche-cal-organizer-phone">|</span></div>
					fax.dataWrap = <div><i class="fa fa-fax" aria-hidden="true"></i><span class="tx-kirche-cal-organizer-fax">|</span></div>
					country.dataWrap = <span class="tx-kirche-cal-organizer-country">|</span>
					email.dataWrap = <div><i class="tx-kirche-icon-email fa fa-envelope"></i><span class="tx-kirche-cal-organizer-email">|</span></div>
					link.dataWrap = <div><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class="tx-kirche-cal-organizer-link">|</span></div>
				}
			}
			location {
				event {
					dateFormat = %d.%m.%Y
				}
				location {
					link.dataWrap = <div><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class="tx-kirche-cal-location-link">|</span></div>
					email.dataWrap = <div><i class="tx-kirche-icon-email fa fa-envelope"></i><span class="tx-kirche-cal-location-email">|</span></div>
					description.dataWrap = <div class="tx-kirche-cal-description"><span class="tx-kirche-cal-location-description">|</span></div>
					country.dataWrap = <span class="tx-kirche-cal-location-country">|</span>
					fax.dataWrap = <div><i class="fa fa-fax" aria-hidden="true"></i><span class="tx-kirche-cal-location-fax">|</span></div>
					phone.dataWrap = <div><i class="fa fa-phone" aria-hidden="true"></i><span class="tx-kirche-cal-location-phone">|</span></div>
					zip.dataWrap = <span class="tx-kirche-cal-location-zip">|</span>
					city.dataWrap = <span class="tx-kirche-cal-location-city">|</span>
					street.dataWrap = <span class="tx-kirche-cal-location-street">|</span>
					name.dataWrap = <span class="tx-kirche-cal-location-name">|</span>
				}
			}
			day {
				displayDate.strftime = %d.%m.%Y
				event.dateFormat = %d.%m.%Y
				timeFormatDay = %H:%M
			}
			week {
				displayDate {
					1.strftime = %d.%m.
					2.strftime = %d.%m.%Y
				}
				event.dateFormat = %d.%m.%Y
				dateFormatWeek = %d.%m.%Y
				dateFormatWeekList = %a<br/>%d.%m.
				dayViewLink.strftime = %a %d.%m.
				timeFormatDay = %H:%M
			}
			month {
				heading.1.strftime = %d.%m.
				heading.2.strftime = %d.%m.%Y
			}
			year.event.dateFormat = %d.%m.%Y
			list.event.dateFormat = %d.%m.%Y
			title.event.dateFormat = %d.%m.%Y
			notification.event.dateFormat = %d.%m.%Y
			todo {
				todo.dateFormat = %d.%m.%Y
				event.dateFormat = %d.%m.%Y
			}
			backLink.value = <a href="javascript:history.back()"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>%%%BACK%%%</a>
			lib.list.event.dateFormat = %d.%m.%Y
		}
	}
}


















