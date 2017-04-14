tt_content {
	kirche < lib.fluidContent
	kirche {
		templateName = Kirche
		dataProcessing {
			10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
			10 {
				references.fieldName = assets
			}
			20 = TYPO3\CMS\Frontend\DataProcessing\GalleryProcessor
			20 {
				maxGalleryWidth = {$styles.content.textmedia.maxW}
				maxGalleryWidthInText = {$styles.content.textmedia.maxWInText}
				columnSpacing = {$styles.content.textmedia.columnSpacing}
				borderWidth = {$styles.content.textmedia.borderWidth}
				borderPadding = {$styles.content.textmedia.borderPadding}
			}
			30 = ThomasWoehlke\OekumeneTiergarten\DataProcessing\ChurchProcessor
		}
		stdWrap {
			# Setup the edit icon for content element "textmedia"
			editIcons = tt_content: header [header_layout], bodytext, assets [imageorient|imagewidth|imageheight], [imagecols|imageborder], image_zoom
			editIcons {
				iconTitle.data = LLL:EXT:fluid_styled_content/Resources/Private/Language/FrontendEditing.xlf:editIcon.textmedia
			}
		}
	}
}

styles {
	content {
		loginform {
			pid = {$plugin.tx_oekumene_tiergarten.settings.feUserLoginDataPageId}
		}
	}
}
