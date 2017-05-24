<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "oekumene_tiergarten".
 * Auto generated 22-03-2017 06:43
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
    'title' => 'Oekumene Tiergarten',
    'description' => 'Site Packge for www.oekumene-tiergarten.de',
    'category' => 'templates',
    'version' => '0.0.22',
    'state' => 'stable',
    'uploadfolder' => true,
    'createDirs' => 'uploads/tx_oekumene-tiergarten',
    'clearcacheonload' => true,
    'author' => 'Thomas Woehlke',
    'author_email' => 'thomas@woehlke.org',
    'author_company' => ']init[ AG',
    'constraints' => array(
        'depends' => array(
            'typo3' => '7.6.0-7.6.99',
            'php' => '7.0.0-7.0.999',
            /* System-Extensions: */
            'info' => '7.6.0-7.6.99',
            'fluid' => '7.6.0-7.6.99',
            'extbase' => '7.6.0-7.6.99',
            'scheduler' => '7.6.0-7.6.99',
            'indexed_search' => '7.6.0-7.6.99',
            'fluid_styled_content' => '7.6.0-7.6.99',
            'rtehtmlarea' => '7.0.0-7.6.99',
            'form' => '7.0.0-8.9.99',
            /* TER-Extensions: */
            'gridelements' => '7.0.0-8.9.99',
            'realurl' => '2.2.1-2.2.99',
            'crawler' => '5.1.2-5.1.99',
            'wec_map' => '3.3.0-3.5.99',
            'tt_address' => '3.2.1-3.2.99',
            'cal' => '1.10.3-1.11.99',
            'powermail' => '3.14.0-3.99.99',
            'rx_shariff' => '7.0.0-10.99.99',
            'news' => '5.3.2-6.0.99',
            'jumpurl' => '7.6.0-8.9.99',
            'direct_mail' => '5.1.1-5.99.99',
            'direct_mail_subscription' => '2.0.4-2.99.99',
            'dyncss' => '0.7.9-0.8.99',
            'dyncss_less' => '0.7.7-0.7.99',
            't3sbootstrap' => '3.2.3-3.2.99',
            'metaseo' => '2.0.3-2.0.99',
            'evangtermine' => '2.0.6-2.0.99',
            'fl_realurl_image' => '4.1.4-4.1.99',
            'mindshape_cookie_hint' => '1.0.9-1.0.99',
            'typo3_console' => '4.5.3-4.5.99',
            'devtools' => '0.2.4-0.2.99',
            'web2pdf' => '1.1.5-1.1.99',
        ),
        'conflicts' => array(
            'fluidpages' => '0.0.0-99.99.99',
            'cooluri' => '0.0.0-99.99.99',
            'simulatestatic' => '0.0.0-99.99.99',
        ),
        'suggests' => array(
            /* wegen news */
            'dd_googlesitemap' => '2.0.5-2.99.99',
        ),
    ),
    'autoload' => array(
        'psr-4' => array(
            'ThomasWoehlke\\OekumeneTiergarten\\' => 'Classes',
        ),
    ),
);

