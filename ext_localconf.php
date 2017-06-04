<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

call_user_func(function () {

    // Include RTE Config
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/TSConfig/Page/RTE.ts">'
    );

    // Include TCEMAIN Config
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/TSConfig/Page/TCEMAIN.ts">'
    );

    // Include new content elements to modWizards
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/TSConfig/ContentElementWizard.ts">'
    );

    // Include useful User Configs
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/TSConfig/User/TSUserConfig.ts">'
    );

    /*
    unset($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration']['news']);

    // Register the RealUrl Autoconfig Hook
    if (! isset ($confArr ['enableRealURLAutoConfiguration']) || $confArr ['enableRealURLAutoConfiguration']) {
        $GLOBALS ['TYPO3_CONF_VARS'] ['SC_OPTIONS'] ['ext/realurl/class.tx_realurl_autoconfgen.php'] ['extensionConfiguration'] ['oekumene_tiergarten'] = 'ThomasWoehlke\\OekumeneTiergarten\\Hooks\\RealUrl->addRealURLConfig';
    }
    */

});






