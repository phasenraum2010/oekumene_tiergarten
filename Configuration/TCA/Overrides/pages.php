<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 08.04.17
 * Time: 11:17
 */

defined('TYPO3_MODE') or die();
call_user_func(
    function ($extKey) {

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

    }, 'oekumene_tiergarten'
);
