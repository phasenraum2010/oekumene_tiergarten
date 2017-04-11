<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 22.03.17
 * Time: 13:17
 */

namespace ThomasWoehlke\OekumeneTiergarten\DataProcessing;

use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\ContentObject\DataProcessorInterface;
use JBartels\WecMap\MapService\Google\Map;
use TYPO3\TtAddress\Domain\Repository\AddressRepository;
use TYPO3\TtAddress\Domain\Model\Address;


class ChurchProcessor implements DataProcessorInterface
{

    /**
     * Process data for the content element "My new content element"
     *
     * @param ContentObjectRenderer $cObj The data of the content element or page
     * @param array $contentObjectConfiguration The configuration of Content Object
     * @param array $processorConfiguration The configuration of this processor
     * @param array $processedData Key/value store of processed data (e.g. to be passed to a Fluid View)
     * @return array the processed data as key/value store
     */
    public function process(
        ContentObjectRenderer $cObj,
        array $contentObjectConfiguration,
        array $processorConfiguration,
        array $processedData
    )
    {
        $ttAddressPageId = $processedData['data']['tt_address_uid'];

        /** @var $extbaseObjectManager \TYPO3\CMS\Extbase\Object\ObjectManager */
        $extbaseObjectManager = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\\ObjectManager');
        /** @var $addressRepository \TYPO3\TtAddress\Domain\Repository\AddressRepository */
        $addressRepository = $extbaseObjectManager->get('TYPO3\\TtAddress\\Domain\\Repository\\AddressRepository');
        /** @var $ttAddress \TYPO3\TtAddress\Domain\Model\Address */
        $ttAddress = $addressRepository->findByUid($ttAddressPageId);

        $myWWW = explode(" ",$ttAddress->getWww());

        $processedData['data']['ttAddress'] = [
            'gender' => $ttAddress->getGender(),
            'name' => $ttAddress->getName(),
            'firstName' => $ttAddress->getFirstName(),
            'middleName' => $ttAddress->getMiddleName(),
            'lastName' => $ttAddress->getLastName(),
            'title' => $ttAddress->getTitle(),
            'address' => $ttAddress->getAddress(),
            'latitude' => $ttAddress->getLatitude(),
            'longitude' => $ttAddress->getLongitude(),
            'building' => $ttAddress->getBuilding(),
            'room' => $ttAddress->getRoom(),
            'phone' => $ttAddress->getPhone(),
            'fax' => $ttAddress->getFax(),
            'mobile' => $ttAddress->getMobile(),
            'www' => $myWWW[0],
            'skype' => $ttAddress->getSkype(),
            'twitter' => $ttAddress->getTwitter(),
            'facebook' => $ttAddress->getFacebook(),
            'linkedIn' => $ttAddress->getLinkedIn(),
            'email' => $ttAddress->getEmail(),
            'company' => $ttAddress->getCompany(),
            'position' => $ttAddress->getPosition(),
            'city' => $ttAddress->getCity(),
            'zip' => $ttAddress->getZip(),
            'region' => $ttAddress->getRegion(),
            'country' => $ttAddress->getCountry(),
            //'image' => $ttAddress->getImage(),
            'description' => $ttAddress->getDescription(),
        ];

        $street = $ttAddress->getAddress();
        $city = $ttAddress->getCity();
        $zip = $ttAddress->getZip();
        $state= $ttAddress->getRegion();
        $country = $ttAddress->getCountry();
        $processedData['data']['tx_kirche_street_address']=$street.', '.$zip.' '.$city;
        $key=NULL;
        $width='320';
        $height='200';
        $lat='52.5296163';
        $long='13.3317411';
        $zoom='15';
        $mapName=$processedData['data']['header'];
        $subheader=$processedData['data']['subheader'];
        $map = new Map($key, $width, $height,$lat, $long, $zoom, $mapName);
        $tabLabels = [$mapName];
        $title=[ '<b>'.$mapName.'</b>' ];
        $desc='<br/>'.$subheader.'<br/>'.$street.'<br/>' .$zip.' '.$city.'<br/><br/>';
        $description=[$desc];
        $map->addMarkerByAddressWithTabs($street, $city, $state, $zip, $country,$tabLabels,$title,$description);
        $map->setCenterByAddress($street, $city, $state, $zip, $country);
        $map->addOption('enableOverlappingMarkerManager',true);
        $map->addControl('scale');
        $map->addControl('zoom');
        $map->addControl('mapType');
        $map->setType('G_NORMAL_MAP');
        $map->addControl('googleEarth');
        $map->enableDirections();
        $map->showInfoOnLoad();
        $map->autoCenterAndZoom();
        $html = $map->drawMap();
        $processedData['data']['tx_kirche_map'] = $html;
        return $processedData;
    }
}
