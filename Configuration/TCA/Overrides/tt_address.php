<?php

defined('TYPO3_MODE') or die();
call_user_func(function () {

    $dbFilePrefix = 'LLL:EXT:oekumene_tiergarten/Resources/Private/Language/locallang_db.xlf:';

    $tempContentColumns = [
        'wikipedia' => array(
            'exclude' => 1,
            'label' => $dbFilePrefix . 'tt_address.wikipedia',
            'config' => array(
                'type' => 'input',
                'size' => '20',
                'eval' => 'trim',
                'max' => '255',
                'placeholder' => 'wikipedia'
            )
        ),
    ];

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_address', $tempContentColumns);
    unset($tempContentColumns);

    $socialPalette = 'skype, --linebreak--,
							twitter, --linebreak--,
							facebook, --linebreak--,
							wikipedia, --linebreak--,
							linkedin';

    $GLOBALS['TCA']['tt_address']['palettes']['social']['showitem'] = $socialPalette;
    unset($socialPalette);

},'oekumene_tiergarten');
