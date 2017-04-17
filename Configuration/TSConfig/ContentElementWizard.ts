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
