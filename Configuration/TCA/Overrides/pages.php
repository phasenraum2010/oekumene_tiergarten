<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 08.04.17
 * Time: 11:17
 */

defined('TYPO3_MODE') or die();
call_user_func(
    function () {

        /*
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
            $extKey,
            'Configuration/PageTSConfig/Kirche.ts',
            'Adds new Content Types - Oekumene Tiergarten'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
            $extKey,
            'Configuration/PageTSConfig/RTE.ts',
            'Adds RTE Config - Oekumene Tiergarten'
        );
        */


        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('oekumene_tiergarten', 'Configuration/TypoScript',
            'Oekumene Tiergarten'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('oekumene_tiergarten', 'Configuration/TypoScript/test',
            'Oekumene Tiergarten Test'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('oekumene_tiergarten', 'Configuration/TypoScript/live',
            'Oekumene Tiergarten Live'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('oekumene_tiergarten', 'Configuration/TypoScript/newsletter',
            'Oekumene Tiergarten Newsletter'
        );


        /*
        // Include RTE Config
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:oekumene_tiergarten/Configuration/PageTSConfig/RTE.ts">'
        );


        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
            'oekumene_tiergarten',
            'Configuration/PageTSConfig/RTE.ts',
            'Adds RTE Config - Oekumene Tiergarten'
        );
        */

    }
);
