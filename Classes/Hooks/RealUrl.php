<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 18.04.17
 * Time: 11:50
 */

namespace ThomasWoehlke\OekumeneTiergarten\Hooks;

class RealUrl
{

    /**
     * Main hook function.
     * Generates an entire RealURL configuration.
     *
     * @param
     *        	array		Main parameters. Typically, 'config' is the
     *        	existing RealURL configuration thas has been
     *        	generated to this point and 'extKey' is unique
     *        	that this hook used when it was registered.
     */
    function addRealURLConfig(&$params, $parentObj)
    {
        $config = &$params ['config'];

        /*
        if (! is_array ( $config ['postVarSets'] ['_DEFAULT'] )) {
            $config ['postVarSets'] ['_DEFAULT'] = Array ();
        }
        $config ['postVarSets'] ['_DEFAULT'] = array_merge ( $config ['postVarSets'] ['_DEFAULT'], $this->addPostVarSets () );
        */

        if (! is_array ( $config ['fileName'] ['index'] )) {
            $config ['fileName'] ['index'] = Array ();
        }
        $config ['fileName'] ['index'] = array_merge ( $config ['fileName'] ['index'], $this->addFilenameSet () );

        return $config;
    }

    function addFilenameSet() {
        $calendarRSS = Array ();
        $calendarRSS ['sitemap.xml'] = array(
            'keyValues' => array(
                'type' => 841132,
            ),
        );
        $calendarRSS ['sitemap.txt'] = array(
            'keyValues' => array(
                'type' => 841131,
            ),
        );
        $calendarRSS ['robots.txt'] = array(
            'keyValues' => array(
                'type' => 841133,
            ),
        );
        $calendarRSS ['_DEFAULT'] = array(
            'keyValues' => array(
                'type' => 0,
            ),
        );
        return $calendarRSS;
    }

    /**
     * Adds the postVarSets (not specific to a page) to the RealURL config.
     *
     * @return array configuration element.
     */
    function addPostVarSets() {
        $postVarSets = Array ();

        return $postVarSets;
    }


    /**
     * ***********************************************************************
     *
     * Helper functions for generating common RealURL config elements.
     *
     * **********************************************************************
     */

    /**
     * Adds a RealURL config element for simple GET variables.
     *
     * array( 'GETvar' => 'tx_calendar_pi1[f1]' ),
     *
     * @param
     *        	string		The GET variable.
     * @return array config element.
     */
    function addSimple($key) {
        return Array (
            'GETvar' => $key
        );
    }

    /**
     * Adds RealURL config element for table lookups.
     *
     * array(
     * 'GETvar' => 'tx_ttnews[tt_news]',
     * 'lookUpTable' => array(
     * 'table' => 'tt_news',
     * 'id_field' => 'uid',
     * 'alias_field' => 'title',
     * 'addWhereClause' => ' AND NOT deleted',
     * 'useUniqueCache' => 1,
     * 'useUniqueCache_conf' => array(
     * 'strtolower' => 1,
     * 'spaceCharacter' => '_',
     * )
     * )
     * )
     *
     * @param
     *        	string		The GET variable.
     * @param
     *        	string		The name of the table.
     * @param
     *        	string		The field in the table to be used in the URL.
     * @param
     *        	string		Previous GET variable that must be present for
     *        	this rule to be evaluated.
     * @return array config element.
     */
    function addTable($key, $table, $aliasField = 'title', $condForPrevious = false, $where = ' AND NOT deleted') {
        $configArray = Array ();

        if ($condForPrevious) {
            $configArray ['cond'] = Array (
                'prevValueInList' => $condForPrevious
            );
        }

        $configArray ['GETvar'] = $key;
        $configArray ['lookUpTable'] = Array (
            'table' => $table,
            'id_field' => 'uid',
            'alias_field' => $aliasField,
            'addWhereClause' => $where,
            'useUniqueCache' => 1,
            'useUniqueCache_conf' => Array (
                'strtolower' => 1,
                'spaceCharacter' => '_'
            )
        );

        return $configArray;
    }

    /**
     * Adds RealURL config element for value map.
     * array(
     * 'GETvar' => 'sub',
     * 'valueMap' => array(
     * 'subscribe' => '1',
     * 'unsubscribe' => '2',
     * ),
     * 'noMatch' => 'bypass',
     * )
     *
     * @param
     *        	string		The GET variable.
     * @param
     *        	array		Associative array with label and value.
     * @param
     *        	string		noMatch behavior.
     * @return array config element.
     */
    function addValueMap($key, $valueMapArray, $noMatch = 'bypass') {
        $configArray = Array ();
        $configArray ['GETvar'] = $key;

        if (is_array ( $valueMapArray )) {
            foreach ( $valueMapArray as $key => $value ) {
                $configArray ['valueMap'] [$key] = $value;
            }
        }

        $configArray ['noMatch'] = $noMatch;
        return $configArray;
    }

    /**
     * Adds RealURL config element for single type.
     *
     * array(
     * 'type' => 'single',
     * 'keyValues' => array(
     * 'tx_newloginbox_pi1[forgot]' => 1,
     * )
     * )
     *
     * @param
     *        	array		Associative array of GET variables and values.
     *        	All values must be matched.
     * @return array config element.
     */
    function addSingle($keyValueArray) {
        $configArray = Array ();
        $configArray ['type'] = 'single';

        if (is_array ( $keyValueArray )) {
            foreach ( $keyValueArray as $key => $value ) {
                $configArray ['keyValues'] [$key] = $value;
            }
        }

        return $configArray;
    }
}

?>
