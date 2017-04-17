<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 18.04.17
 * Time: 00:12
 */

namespace ThomasWoehlke\OekumeneTiergarten\Domain\Model;

use TYPO3\TtAddress\Domain\Model\Address;


/**
 * The domain model of a TtAddress
 *
 * @entity
 */
class TtAddress extends Address
{

    /**
     * Wikipedia
     * @var string
     */
    protected $wikipedia;

    /**
     * sets the Wikipedia attribute
     *
     * @param string $wikipedia
     * @return void
     */
    public function setWikipedia($wikipedia)
    {
        $this->wikipedia = $wikipedia;
    }

    /**
     * returns the Wikipedia attribute
     *
     * @return string
     */
    public function getWikipedia()
    {
        return $this->wikipedia;
    }
}
