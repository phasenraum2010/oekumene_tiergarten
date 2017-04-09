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
#config.tt_content.bodytext.types.kirche.proc.overruleMode = ts_css
RTE.default.userElements.30 {
	26 = Icon: Email
	26.description = <i class="tx-kirche-icon-email fa fa-envelope" aria-hidden="true"></i>|&nbsp;
	26.mode = wrap
	26.content = <i class="tx-kirche-icon-email fa fa-envelope" aria-hidden="true"></i>|&nbsp;
	27 = Icon: Standort
	27.description = <span class="tx-kirche-icon-standort map-icon map-icon-postal-code"></span>|&nbsp;
	27.mode = wrap
	27.content = <span class=tx-kirche-icon-standort map-icon map-icon-postal-code"></span>|&nbsp;
	28 = Icon: Telefon
	28.description = <i class="tx-kirche-icon-telefon fa fa-phone" aria-hidden="true"></i>|&nbsp;
	28.mode = wrap
	28.content = <i class="tx-kirche-icon-telefon fa fa-phone" aria-hidden="true"></i>|&nbsp;
	29 = Icon: Kalender
	29.description = <i class="tx-kirche-icon-kalender fa fa-calendar" aria-hidden="true"></i>|&nbsp;
	29.mode = wrap
	29.content = <i class="tx-kirche-icon-kalender fa fa-calendar" aria-hidden="true"></i>|&nbsp;
	30 = Icon: Webseite
	30.description = <i class="tx-kirche-icon-webseite fa fa-sitemap" aria-hidden="true"></i>|&nbsp;
	30.mode = wrap
	30.content = <i class="tx-kirche-icon-webseite fa fa-sitemap" aria-hidden="true"></i>|&nbsp;
}
RTE.allowTags < RTE.default.proc.allowTags
RTE.proc.entryHTMLparser_db.tags.i.allowedAttribs := addToList(aria-hidden)
RTE.proc.allowedClasses := addToList(tx-kirche-icon-sign,fa,tx-kirche-icon-email,fa-envelope,tx-kirche-icon-standort,map-icon,map-icon-postal-code,tx-kirche-icon-telefon,fa-phone, tx-kirche-icon-kalender, fa-calendar, tx-kirche-icon-webseite, fa-sitemap)

RTE.buttons.textstyle.tags.span.allowedClasses := addToList(tx-kirche-icon-standort,tx-kirche-icon-sign,map-icon,map-icon-postal-code)
RTE.buttons.textstyle.tags.i.allowedClasses := addToList(tx-kirche-icon-email,tx-kirche-icon-telefon,tx-kirche-icon-kalender,tx-kirche-icon-webseite,tx-kirche-icon-sign,fa,fa-envelope,fa-phone,fa-calendar,fa-sitemap)

RTE.mutuallyExclusiveClasses.70 = tx-kirche-icon-email,tx-kirche-icon-standort,tx-kirche-icon-telefon,tx-kirche-icon-kalender,tx-kirche-icon-webseite

RTE.default.FE < RTE.default

TCEFORM.tt_content.bodytext.RTEfullScreenWidth = 100%
