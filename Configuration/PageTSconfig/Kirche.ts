# **************************************************
# Add kirche to the "New Content Element Wizard"
# **************************************************

mod.wizards.newContentElement.wizardItems.common {
	elements {
		kirche {
			iconIdentifier = content-image
			title = LLL:EXT:oekumene_tiergarten/Resources/Private/Language/Tca.xlf:oekumene_tiergarten_kirche.wizard.title
			description = LLL:EXT:oekumene_tiergarten/Resources/Private/Language/Tca.xlf:oekumene_tiergarten_kirche.wizard.description
			tt_content_defValues {
				CType = kirche
			}
		}
	}
	show := addToList(kirche)
}

TCEFORM.tt_content.bodytext.RTEfullScreenWidth = 100%

RTE.default.contentCSS = typo3conf/ext/oekumene_tiergarten/Resources/Public/css/rte.css
RTE.classes {
	tx-kirche-icon-email {
		name = Icon: Email
		value = color: red;
	}
	tx-kirche-icon-standort {
		name = Icon: Standort
		value = color: red;
	}
	tx-kirche-icon-telefon {
		name = Icon: Telefon
		value = color: red;
	}
	tx-kirche-icon-kalender {
		name = Icon: Kalender
		value = color: red;
	}
	tx-kirche-icon-webseite {
		name = Icon: Webseite
		value = color: red;
	}
}
RTE.default.userElements.30 {
	26 = Icon: Email
	26.description = <div class="tx-kirche-icon-email"><i class="fa fa-envelope" aria-hidden="true"></i>|</div>
	26.mode = wrap
	26.content = <div class="tx-kirche-icon-email"><i class="fa fa-envelope" aria-hidden="true"></i>|</div>
	27 = Icon: Standort
	27.description = <div class="tx-kirche-icon-standort"><span class="map-icon map-icon-postal-code"></span>|</div>
	27.mode = wrap
	27.content = <div class="tx-kirche-icon-standort"><span class="map-icon map-icon-postal-code"></span>|</div>
	28 = Icon: Telefon
	28.description = <div class="tx-kirche-icon-telefon"><i class="fa fa-phone" aria-hidden="true"></i>|</div>
	28.mode = wrap
	28.content = <div class="tx-kirche-icon-telefon"><i class="fa fa-phone" aria-hidden="true"></i>|</div>
	29 = Icon: Kalender
	29.description = <div class="tx-kirche-icon-kalender"><i class="fa fa-calendar" aria-hidden="true"></i>|</div>
	29.mode = wrap
	29.content = <div class="tx-kirche-icon-kalender"><i class="fa fa-calendar" aria-hidden="true"></i>|</div>
	30 = Icon: Webseite
	30.description = <div class="tx-kirche-icon-webseite"><i class="fa fa-sitemap" aria-hidden="true"></i>|</div>
	30.mode = wrap
	30.content = <div class="tx-kirche-icon-webseite"><i class="fa fa-sitemap" aria-hidden="true"></i>|</div>
}

RTE.default.proc.entryHTMLparser_db.tags.i.allowedAttribs := addToList(aria-hidden)
RTE.default.proc.allowedClasses := addToList(tx-kirche-icon-email,tx-kirche-icon-standort,tx-kirche-icon-telefon,tx-kirche-icon-kalender,tx-kirche-icon-webseite,map-icon,map-icon-postal-code,fa,fa-envelope,fa-phone,fa-calendar,fa-sitemap)

RTE.allowTags < RTE.default.proc.allowTags

RTE.buttons.textstyle.tags.div.allowedClasses := addToList(tx-kirche-icon-email,tx-kirche-icon-standort,tx-kirche-icon-telefon,tx-kirche-icon-kalender,tx-kirche-icon-webseite)
RTE.buttons.textstyle.tags.span.allowedClasses := addToList(map-icon,map-icon-postal-code)
RTE.buttons.textstyle.tags.i.allowedClasses := addToList(fa,fa-envelope,fa-phone,fa-calendar,fa-sitemap)

RTE.mutuallyExclusiveClasses {
	70 = tx-kirche-icon-email,tx-kirche-icon-standort,tx-kirche-icon-telefon,tx-kirche-icon-kalender,tx-kirche-icon-webseite
}

RTE.config.tt_content.bodytext.types.kirche.proc.overruleMode = ts_css

RTE.default.FE < RTE.default

TCEFORM.tt_content.bodytext.RTEfullScreenWidth = 100%

options.clearCache.clearRTECache = 1

