<?php
defined('TYPO3_MODE') or die();
call_user_func(function () {

    //$frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
    //$customLanguageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';
    //$languageFilePrefix = 'LLL:EXT:oekumene_tiergarten/Resources/Private/Language/locallang_be.xlf:';
    $dbFilePrefix = 'LLL:EXT:oekumene_tiergarten/Resources/Private/Language/locallang_db.xlf:';
    $tcaFilePrefix = 'LLL:EXT:oekumene_tiergarten/Resources/Private/Language/Tca.xlf:';

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
        'tt_content',
        'CType',
        [
            'LLL:EXT:oekumene_tiergarten/Resources/Private/Language/locallang_be.xlf:wizard.title',
            'kirche',
            'content-image'
        ],
        'textmedia',
        'after'
    );

    $tempContentColumns = [
        'tx_kirche_street_address' => [
            'label' => $tcaFilePrefix . 'tx_kirche_street_address.config',
            'config' => [
                'type' => 'input',
                'size' => '50',
                'maxlength' => '1024'
            ]
        ],
        'bodytext' => [
            'label' => $tcaFilePrefix . 'bodytext.config',
            'config' => [
                'type' => 'text',
                'enableRichtext' => true,
            ]
        ],
        'tx_kirche_address_street' => [
            'label' => $tcaFilePrefix . 'tx_kirche_address_street.config',
            'config' => [
                'type' => 'input',
                'size' => '50',
                'maxlength' => '100'
            ],
        ],
        'tx_kirche_address_city' => [
            'label' => $tcaFilePrefix . 'tx_kirche_address_city.config',
            'config' => [
                'type' => 'input',
                'size' => '50',
                'maxlength' => '100'
            ],
        ],
        'tx_kirche_address_zip' => [
            'label' => $tcaFilePrefix . 'tx_kirche_address_zip.config',
            'config' => [
                'type' => 'input',
                'size' => '50',
                'maxlength' => '100'
            ],
        ],
        'tx_kirche_address_state' => [
            'label' => $tcaFilePrefix . 'tx_kirche_address_state.config',
            'config' => [
                'type' => 'input',
                'size' => '50',
                'maxlength' => '100'
            ]
        ],
        'tx_kirche_address_country' => [
            'label' => $tcaFilePrefix . 'tx_kirche_address_country.config',
            'config' => [
                'type' => 'input',
                'size' => '50',
                'maxlength' => '100'
            ]
        ],
        'tt_address_uid' => [
            'exclude' => 1,
            'label' => 'LLL:EXT:tt_address/locallang_tca.xml:pi_tt_address',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'foreign_table' => 'tt_address',
                'minitems' => 0,
                'maxitems' => 1,
            ]
        ],
    ];

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempContentColumns);
    unset($tempContentColumns);


    $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['kirche'] = $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['textmedia'];


    $GLOBALS['TCA']['tt_content']['types']['kirche'] = $GLOBALS['TCA']['tt_content']['types']['textmedia'];


    $tmpPaletteKircheaddress = 'tx_kirche_address_street;' . $dbFilePrefix . 'tx_kirche_address_street_formlabel,
	 --linebreak--, tx_kirche_address_city;' . $dbFilePrefix . 'tx_kirche_address_city_formlabel,
	 --linebreak--, tx_kirche_address_zip;' . $dbFilePrefix . 'tx_kirche_address_zip_formlabel,
	 --linebreak--, tx_kirche_address_state;' . $dbFilePrefix . 'tx_kirche_address_state,
	 --linebreak--, tx_kirche_address_country;' . $dbFilePrefix . 'tx_kirche_address_country_formlabel';

    $kircheShowItem = '
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.header;header,rowDescription,
    --palette--;' . $dbFilePrefix . 'palette.kircheaddress;kircheaddress,tt_address_uid,bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.media,assets,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.imagelinks;imagelinks,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,layout;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:layout_formlabel,
    --palette--;Animation;animate,tx_t3sbootstrap_content_slide,
    --palette--;LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:tt_content.palette.mediaAdjustments;mediaAdjustments,
    --palette--;LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:tt_content.palette.gallerySettings;gallerySettings,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access,hidden;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:field.default.hidden,
    --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
    --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.extended,
    --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,categories,module_sys_dmail_category,
    --div--;LLL:EXT:gridelements/Resources/Private/Language/locallang_db.xlf:gridElements,tx_gridelements_container,tx_gridelements_columns,
    --div--;Bootstrap,tx_t3sbootstrap_flexform';

    $GLOBALS['TCA']['tt_content']['palettes']['kircheaddress']['showitem'] = $tmpPaletteKircheaddress;
    unset($tmpPaletteKircheaddress);

    $GLOBALS['TCA']['tt_content']['types']['kirche']['showitem'] = $kircheShowItem;
    unset($kircheShowItem);

},'oekumene_tiergarten');
