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
	/*
	tx_felogin_pi1 {
		templateFile = {$plugin.tx_felogin_pi1.templateFile}
		email_from = newsletter@oekumene-tiergarten.de
		email_fromName = Thomas Wöhlke
		replyTo = newsletter@oekumene-tiergarten.de
		_CSS_DEFAULT_STYLE >
	}
	*/
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
	/*
	tx_cal_controller {
		#subscribeFeUser = 1
		activateFluid = 1
		subscribeWithCaptcha = 1
		dateConfig {
			splitSymbol = .
			dayPosition = 0
			yearPosition = 2
		}
		view {
			allowedViews = month,day,week,year,list,event,search_all,search_event,search_location,search_organizer,organizer,location,admin,create_event,confirm_event,save_event,edit_event,delete_event,remove_event,create_location,confirm_location,save_location,edit_loaction,delete_location,remove_location,create_organizer,confirm_organizer,save_organizer,edit_organizer,delete_organizer,remove_organizer
			event {
				eventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				createEventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				editEventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				deleteEventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				event {
					defaultEventLength = 3600
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			day {
				dayViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			week {
				weekViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			month {
				monthViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				showListInMonthView = 1
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			year {
				yearViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			location {
				locationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				createLocationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				editLocationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				deleteLocationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
			}
			organizer {
				organizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				createOrganizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				editOrganizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
				deleteOrganizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
			}
			list {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			subscription {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			ics {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			single_ics {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			freeAndBusy {
				enable = 0
			}
			search_event {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			create_event {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			edit_event {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			confirm_event {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
			create_location {

			}
			edit_location {

			}
			confirm_location{

			}
			delete_location{

			}
			create_organizer {

			}
			edit_organizer {

			}
			confirm_organizer{

			}
			delete_organizer {

			}
			translation {

			}
		}
		lib {
			list {
				event {
					attachment =< tt_content.uploads
					attachment {
						dataProcessing.10.references >
						dataProcessing.10.references {
							table = tx_cal_event
							uid.data = field:uid
							fieldName = attachment
						}
					}
				}
			}
		}
	}
	*/
}



/*

plugin {
tx_cal_controller {
subscribeFeUser = 1
#activateFluid = 1
subscribeWithCaptcha = 1
dateConfig {
splitSymbol = .
dayPosition = 0
yearPosition = 2
}
view {
allowedViews = month,day,week,year,list,event,search_all,search_event,search_location,search_organizer,organizer,location,admin,create_event,confirm_event,save_event,edit_event,delete_event,remove_event,create_location,confirm_location,save_location,edit_loaction,delete_location,remove_location,create_organizer,confirm_organizer,save_organizer,edit_organizer,delete_organizer,remove_organizer

# @description  Content object, that defines how a link is rendered by default
defaultLinkSetup = TEXT
defaultLinkSetup {
current = 1
typolink {
parameter.field = link_parameter
ATagParams.field = link_ATagParams
additionalParams.field = link_additionalParams
#section.field = link_section
title.current = 1
title.htmlSpecialChars = 1
title.override {
field = title
required = 1
}
no_cache.field = link_no_cache
useCacheHash = 1
}
}

# @description  Content object, that defines how a link to a different view type is rendered by default
defaultViewLinkSetup < .defaultLinkSetup
defaultViewLinkSetup {
typolink.title.override.override.cObject = TEXT
typolink.title.override.override.cObject {
field = view
wrap = %%%|_VIEW%%%
case = upper
required = 1
}
}

# @description  The content object used for back links
backLink = TEXT
backLink {
value = <a href="javascript:history.back()">%%%BACK%%%</a>
}

# @description  Displays only events a current user is allowed to edit or delete
showEditableEventsOnly = 0

event {
eventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
createEventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
editEventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
deleteEventViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
event {
defaultEventLength = 3600
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
day {
dayViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
week {
weekViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
month {
monthViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
showListInMonthView = 1
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
year {
yearViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
location {
locationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
createLocationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
editLocationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
deleteLocationViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
}
organizer {
organizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
createOrganizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
editOrganizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
deleteOrganizerViewPid = {$plugin.tx_oekumene_tiergarten.settings.calenderPluginPageId}
}
list {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
subscription {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
ics {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
single_ics {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
freeAndBusy {
enable = 0
}
search_event {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
create_event {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
edit_event {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
confirm_event {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
}
lib {
list {
event {
attachment =< tt_content.uploads
attachment {
dataProcessing.10.references >
dataProcessing.10.references {
table = tx_cal_event
uid.data = field:uid
fieldName = attachment
}
}
}
}
}
}
}

plugin.tx_cal_controller.view.other.showLogin = 1
plugin.tx_cal_controller.view.other.loginPageId = 26
plugin.tx_cal_controller.view.other.userFolderId = 28
plugin.tx_cal_controller.view.other.showSearch = 1
plugin.tx_cal_controller.view.other.showGoto = 1
plugin.tx_cal_controller.view.other.showJumps = 1
plugin.tx_cal_controller.view.delete_location.locationViewPid = 25
plugin.tx_cal_controller.view.delete_location.createLocationViewPid = 25
plugin.tx_cal_controller.view.delete_location.editLocationViewPid = 25
plugin.tx_cal_controller.view.delete_location.deleteLocationViewPid = 25
plugin.tx_cal_controller.view.delete_organizer.locationViewPid = 25
plugin.tx_cal_controller.view.delete_organizer.createLocationViewPid = 25
plugin.tx_cal_controller.view.delete_organizer.editLocationViewPid = 25
plugin.tx_cal_controller.view.delete_organizer.deleteLocationViewPid = 25
plugin.tx_cal_controller.rights.create.event.notifyUsersOnPublicCreate = 1
plugin.tx_cal_controller.rights.create.event.publicEvents.group = 1
plugin.tx_cal_controller.rights.create.organizer.group = 1
plugin.tx_cal_controller.rights.create.location.group = 1
plugin.tx_cal_controller.rights.create.exceptionEvent.group = 1
plugin.tx_cal_controller.rights.create.event.forTodayAndFuture.group = 1
plugin.tx_cal_controller.rights.create.event.inPast.group = 1
plugin.tx_cal_controller.rights.admin.user = 1
plugin.tx_cal_controller.rights.allowedGroups = 1
plugin.tx_cal_controller.rights.create.event.group = 1
plugin.tx_cal_controller.rights.create.organizer.addFeGroupToShared = 1
plugin.tx_cal_controller.rights.create.location.addFeGroupToShared = 1
plugin.tx_cal_controller.rights.create.location.addFeUserToShared = 1
plugin.tx_cal_controller.rights.create.event.addFeGroupToShared = 1
plugin.tx_cal_controller.rights.create.event.addFeUserToNotify = 1
plugin.tx_cal_controller.rights.edit.event.group = 1
plugin.tx_cal_controller.rights.edit.event.addFeGroupToShared = 1
plugin.tx_cal_controller.rights.edit.event.startedEvents.group = 1
plugin.tx_cal_controller.rights.delete.organizer.user = 1
plugin.tx_cal_controller.rights.delete.location.user = 1
plugin.tx_cal_controller.rights.delete.event.group = 1
plugin.tx_cal_controller.rights.delete.exceptionEvent.group = 1
plugin.tx_cal_controller.calendarName = Termine der Ökumene in Berlin Tiergarten
plugin.tx_cal_controller.subscribeFeUser = 1
plugin.tx_cal_controller.rights.edit.event.public = 1
plugin.tx_cal_controller.useNewTemplatesAndRendering = 1
plugin.tx_cal_controller.pidList = 28
plugin.tx_cal_controller.view.defaultLinkSetup.typolink.title.section.field = link_section


*/


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
plugin.tx_cal_controller.view.month.heading.1.strftime = %d.%m.%Y
plugin.tx_cal_controller.lib.list.event.dateFormat = %d.%m.%Y
plugin.tx_cal_controller.view.week.dateFormatWeekList = %a<br/>%d.%m.
plugin.tx_cal_controller.view.week.dayViewLink.strftime = %a %d.%m.
