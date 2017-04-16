plugin {
	tx_oekumene_tiergarten {
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
			list.media.dummyImage = typo3conf/ext/oekumene_tiergarten/Resources/Public/Images/logo_oekumene.jpg
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
}



plugin.tx_cal_controller.allowSubscribe = 0
plugin.tx_cal_controller.activateFluid = 0
plugin.tx_cal_controller.view.event.event.title.dataWrap = <h2>%%%TITLE_LABEL%%%:&nbsp; |</h2>
plugin.tx_cal_controller.view.event.event.title.dataWrap = <h2>|</h2>
plugin.tx_cal_controller.view.event.event.alldayTitle.dataWrap = <h2>|</h2>
plugin.tx_cal_controller.view.event.event.startdate.dataWrap = <div class="tx-kirche-cal-event-datetime"><span class="tx-kirche-cal-event-startdate">|</span></div>
plugin.tx_cal_controller.view.event.event.enddate.dataWrap = <span class="tx-kirche-cal-event-enddate">|</span>
plugin.tx_cal_controller.view.event.event.description.dataWrap = <div class="tx-kirche-cal-event-description">|</div>
plugin.tx_cal_controller.view.event.event.image.stdWrap.dataWrap = <div class="tx-kirche-cal-event-image">|</div>
plugin.tx_cal_controller.view.event.event.starttime.dataWrap = <div class="tx-kirche-cal-event-starttime">|</div>
plugin.tx_cal_controller.view.event.event.startdate.dataWrap = <span class="tx-kirche-cal-event-startdate">|</span>
plugin.tx_cal_controller.view.event.event.endtime.dataWrap = <span class="tx-kirche-cal-event-endtime">|</span>
plugin.tx_cal_controller.view.event.event.starttime.dataWrap = <span class="tx-kirche-cal-event-starttime">|</span>
plugin.tx_cal_controller.view.event.event.category.dataWrap = <span class="tx-kirche-cal-event-category">|</div>
plugin.tx_cal_controller.view.event.event.category.dataWrap = <span class="tx-kirche-cal-event-category">|</span>
plugin.tx_cal_controller.view.event.event.category.dataWrap = <span class="tx-kirche-cal-event-category">|</span>
plugin.tx_cal_controller.view.event.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.event.event.organizer.dataWrap = <span class="cal-event-organizer">|</span>
plugin.tx_cal_controller.view.event.event.location.dataWrap = <span class="location">|</span>
plugin.tx_cal_controller.view.event.event.location.dataWrap = <span class="cal-event-location"><span class="map-icon map-icon-postal-code"></span>|</span>
plugin.tx_cal_controller.view.event.event.organizer.dataWrap = <span class="cal-event-organizer"><i class="fa fa-user-circle" aria-hidden="true"></i>|</span>
plugin.tx_cal_controller.view.location.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.organizer.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.organizer.organizer.name.dataWrap = <span class="tx-kirche-cal-organizer-name"></span>
plugin.tx_cal_controller.view.organizer.organizer.name.dataWrap = <span class="tx-kirche-cal-organizer-name">|</span>
plugin.tx_cal_controller.view.organizer.organizer.street.dataWrap = <span class="tx-kirche-cal-organizer-street">|</span>
plugin.tx_cal_controller.view.organizer.organizer.city.dataWrap = <span class="tx-kirche-cal-organizer-city">|</span>
plugin.tx_cal_controller.view.organizer.organizer.zip.dataWrap = <span class="tx-kirche-cal-organizer-zip">|</span>
plugin.tx_cal_controller.view.organizer.organizer.phone.dataWrap = <span class="tx-kirche-cal-organizer-phone">|</span>
plugin.tx_cal_controller.view.organizer.organizer.fax.dataWrap = <span class="tx-kirche-cal-organizer-fax">|</span>
plugin.tx_cal_controller.view.organizer.organizer.country.dataWrap = <span class="tx-kirche-cal--organizer-country">|</span>
plugin.tx_cal_controller.view.organizer.organizer.country.dataWrap = <span class="tx-kirche-cal-organizer-country">|</span>
plugin.tx_cal_controller.view.organizer.organizer.description.dataWrap = <span class="tx-kirche-cal-organizer.description">|</span>
plugin.tx_cal_controller.view.organizer.organizer.email.dataWrap = <span class="tx-kirche-cal-organizer-email">|</span>
plugin.tx_cal_controller.view.organizer.organizer.link.dataWrap = <span class="tx-kirche-cal-organizer-link">|</span>
plugin.tx_cal_controller.view.location.location.link.dataWrap = <div class="tx-kirche-cal-location-link">|</span>
plugin.tx_cal_controller.view.location.location.email.dataWrap = <div class="tx-kirche-cal-location-email">|</div>
plugin.tx_cal_controller.view.location.location.email.dataWrap = <span class="tx-kirche-cal-location-email">|</span>
plugin.tx_cal_controller.view.location.location.description.dataWrap = <span class="tx-kirche-cal-location-description">|</span>
plugin.tx_cal_controller.view.location.location.country.dataWrap = <span class="tx-kirche-cal-location-country">|</span>
plugin.tx_cal_controller.view.location.location.fax.dataWrap = <span class="tx-kirche-cal-location-fax">|</span>
plugin.tx_cal_controller.view.location.location.phone.dataWrap = <span class="tx-kirche-cal-location-phone">|</span>
plugin.tx_cal_controller.view.location.location.zip.dataWrap = <span class="tx-kirche-cal-location-zip">|</span>
plugin.tx_cal_controller.view.location.location.city.dataWrap = <span class="tx-kirche-cal-location-city">|</span>
plugin.tx_cal_controller.view.backLink.value = <a href="javascript:history.back()"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>%%%BACK%%%</a>
plugin.tx_cal_controller.view.location.location.street.dataWrap = <span class="tx-kirche-cal-location-street">|</span>
plugin.tx_cal_controller.view.location.location.name.dataWrap = <span class="tx-kirche-cal-location-name">|</span>
plugin.tx_cal_controller.view.location.location.link.dataWrap = <span class="tx-kirche-cal-location-link">|</span>
plugin.tx_cal_controller.view.location.location.phone.dataWrap = <div><i class="fa fa-phone" aria-hidden="true"></i><span class="tx-kirche-cal-location-phone">|</span></div>
plugin.tx_cal_controller.view.location.location.email.dataWrap = <div><i class="tx-kirche-icon-email fa fa-envelope"></i><span class="tx-kirche-cal-location-email">|</span></div>
plugin.tx_cal_controller.view.location.location.link.dataWrap = <div><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class="tx-kirche-cal-location-link">|</span></div>
plugin.tx_cal_controller.view.location.location.fax.dataWrap = <div><i class="fa fa-fax" aria-hidden="true"></i><span class="tx-kirche-cal-location-fax">|</span></div>
plugin.tx_cal_controller.view.location.location.description.dataWrap = <div class="tx-kirche-cal-description"><span class="tx-kirche-cal-location-description">|</span></div>
plugin.tx_cal_controller.view.organizer.organizer.phone.dataWrap = <div><i class="fa fa-phone" aria-hidden="true"></i><span class="tx-kirche-cal-organizer-phone">|</span></div>
plugin.tx_cal_controller.view.organizer.organizer.link.dataWrap = <div><span class="glyphicon glyphicon-link" aria-hidden="true"></span><span class="tx-kirche-cal-organizer-link">|</span></div>
plugin.tx_cal_controller.view.organizer.organizer.email.dataWrap = <div><i class="tx-kirche-icon-email fa fa-envelope"></i><span class="tx-kirche-cal-organizer-email">|</span></div>
plugin.tx_cal_controller.view.organizer.organizer.fax.dataWrap = <div><i class="fa fa-fax" aria-hidden="true"></i><span class="tx-kirche-cal-organizer-fax">|</span></div>
plugin.tx_cal_controller.view.organizer.organizer.description.dataWrap = <div class="tx-kirche-cal-description"><span class="tx-kirche-cal-organizer.description">|</span></div>


plugin.tx_cal_controller.view.day.displayDate.strftime = %d.%m.%Y
plugin.tx_cal_controller.view.week.displayDate.1.strftime = %d.%m.
plugin.tx_cal_controller.view.week.displayDate.2.strftime = %d.%m.%Y
plugin.tx_cal_controller.view.day.displayDate.strftime = %d.%m.%Y
plugin.tx_cal_controller.view.day.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.week.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.week.dateFormatWeek = %d.%m.%Y
plugin.tx_cal_controller.view.event.notify.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.event.remind.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.year.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.event.todo.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.list.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.title.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.notification.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.todo.todo.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.todo.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.month.heading.1.strftime = %d.%m.
plugin.tx_cal_controller.view.month.heading.2.strftime = %d.%m.%Y
plugin.tx_cal_controller.lib.list.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.week.dateFormatWeekList = %a<br/>%d.%m.
plugin.tx_cal_controller.view.week.dayViewLink.strftime = %a %d.%m.

plugin.tx_cal_controller.view.week.timeFormatDay = %H:%M
plugin.tx_cal_controller.view.day.timeFormatDay = %H:%M

plugin.tx_directmail_pi1.siteUrl = http://oekumene-tiergarten-test.thomas-woehlke.de

plugin.feadmin.dmailsubscription.setfixed.approve._FIELDLIST = uid,pid
plugin.feadmin.dmailsubscription.setfixed.DELETE._FIELDLIST = uid,pid
