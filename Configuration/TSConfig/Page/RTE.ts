RTE.default.contentCSS >
RTE.default.contentCSS = typo3conf/ext/oekumene_tiergarten/Resources/Public/css/rte.css
RTE.classes {
	tx-kirche-icon-email {
		name = Icon: Email
		value = color: red;
	}
	tx-kirche-icon-webseite {
		name = Icon: Webseite
		value = color: red;
	}
	tx-kirche-icon-kalender {
		name = Icon: Kalender
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
	tx-kirche-icon-fax {
		name = Icon: Telefon
		value = color: red;
	}
	tx-kirche-icon-person {
		name = Icon: Person
		value = color: red;
	}
}
RTE.default.userElements.30 {
	26 = Icon: Email
	26.description = <i class="tx-kirche-icon-email fa fa-envelope" aria-hidden="true"></i>
	26.content = <i class="tx-kirche-icon-email fa fa-envelope" aria-hidden="true"></i>

	27 = Icon: Webseite
	27.description = <span class="tx-kirche-icon-webseite glyphicon glyphicon-link" aria-hidden="true"></span>
	27.content = <span class="tx-kirche-icon-webseite glyphicon glyphicon-link" aria-hidden="true"></span>

	28 = Icon: Kalender
	28.description = <i class="tx-kirche-icon-kalender fa fa-calendar" aria-hidden="true"></i>
	28.content = <i class="tx-kirche-icon-kalender fa fa-calendar" aria-hidden="true"></i>

	29 = Icon: Standort
	29.description = <span class="tx-kirche-icon-standort map-icon map-icon-postal-code"></span>
	29.content = <span class="tx-kirche-icon-standort map-icon map-icon-postal-code"></span>

	30 = Icon: Telefon
	30.description = <i class="tx-kirche-icon-telefon fa fa-phone" aria-hidden="true"></i>
	30.content = <i class="tx-kirche-icon-telefon fa fa-phone" aria-hidden="true"></i>

	31 = Icon: Fax
	31.description = <i class="tx-kirche-icon-fax fa fa-fax" aria-hidden="true"></i>
	31.content = <i class="tx-kirche-icon-fax fa fa-fax" aria-hidden="true"></i>

	32 = Icon: Person
	32.description = <i class="tx-kirche-icon-person fa fa-user-circle" aria-hidden="true"></i>
	32.content = <i class="tx-kirche-icon-person fa fa-user-circle" aria-hidden="true"></i>
}

RTE.default.proc.entryHTMLparser_db.tags.i.allowedAttribs := addToList(aria-hidden)
RTE.default.proc.entryHTMLparser_db.tags.span.allowedAttribs := addToList(aria-hidden)
RTE.default.proc.allowedClasses := addToList(tx-kirche-icon-email, tx-kirche-icon-standort, tx-kirche-icon-telefon, tx-kirche-icon-kalender, tx-kirche-icon-webseite, tx-kirche-icon-person, tx-kirche-icon-fax, map-icon, map-icon-postal-code, fa, fa-envelope, fa-phone, fa-calendar, fa-user-circle, fa-fax, glyphicon, glyphicon-link)

RTE.allowTags < RTE.default.proc.allowTags

RTE.default.buttons.textstyle.tags.span.allowedClasses := addToList(map-icon, map-icon-postal-code, tx-kirche-icon-standort, tx-kirche-icon-webseite, glyphicon, glyphicon-link)
RTE.default.buttons.textstyle.tags.i.allowedClasses := addToList(tx-kirche-icon-email, tx-kirche-icon-telefon, tx-kirche-icon-kalender, tx-kirche-icon-person, tx-kirche-icon-fax, fa, fa-envelope, fa-phone, fa-calendar, fa-user-circle, fa-fax)

RTE.default.buttons.blockstyle.tags.span.allowedClasses := addToList(map-icon, map-icon-postal-code, tx-kirche-icon-standort, tx-kirche-icon-webseite, glyphicon, glyphicon-link)
RTE.default.buttons.blockstyle.tags.i.allowedClasses := addToList(tx-kirche-icon-email, tx-kirche-icon-telefon, tx-kirche-icon-kalender, tx-kirche-icon-person, tx-kirche-icon-fax, fa, fa-envelope, fa-phone, fa-calendar, fa-user-circle, fa-fax)

RTE.mutuallyExclusiveClasses {
	70 = tx-kirche-icon-email, tx-kirche-icon-standort, tx-kirche-icon-telefon, tx-kirche-icon-kalender, tx-kirche-icon-webseite, tx-kirche-icon-person, tx-kirche-icon-fax
}

RTE.config.tt_content.bodytext.types.kirche.proc.overruleMode = ts_css

RTE.default.FE < RTE.default

TCEFORM.tt_content.bodytext.RTEfullScreenWidth = 100%

options.clearCache.clearRTECache = 1



# add the microdata and “edit element” button to RTE
RTE.default.showButtons := addToList(showmicrodata,editelement)

RTE.default {
	schema {
		sources {
			schemaOrg = EXT:rtehtmlarea/extensions/MicrodataSchema/res/schemaOrgAll.rdf
		}
	}

	proc {
		keepPDIVattribs := addToList(itemscope, itemtype, itemprop)
		entryHTMLparser_db {
			tags {
				span.allowedAttribs := addToList(itemscope, itemtype, itemprop)
			}
		}
	}
}


