<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

call_user_func(function () {

    // Include new content elements to modWizards
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/PageTSconfig/Kirche.ts">'
    );

    /*
    // Include RTE Config
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/PageTSconfig/RTE.ts">'
    );
    */

});






