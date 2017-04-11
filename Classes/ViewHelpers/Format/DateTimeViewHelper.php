<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 11.04.17
 * Time: 14:55
 */

namespace ThomasWoehlke\OekumeneTiergarten\ViewHelpers\Format;


use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Fluid\Core\ViewHelper\Facets\CompilableInterface;

/**
 * DateTime viewhelper
 */
class DateTimeViewHelper extends AbstractViewHelper implements CompilableInterface
{
    /**
     * Render the given timestamp as date & time
     *
     * @return string
     */
    public function render()
    {
        return static::renderStatic(
            [],
            $this->buildRenderChildrenClosure(),
            $this->renderingContext
        );
    }

    /**
     * @param array $arguments
     * @param callable $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     *
     * @return string
     */
    public static function renderStatic(array $arguments, \Closure $renderChildrenClosure, RenderingContextInterface $renderingContext)
    {
        return htmlspecialchars(BackendUtility::datetime($renderChildrenClosure()));
    }
}
