<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 11.04.17
 * Time: 14:56
 */

namespace ThomasWoehlke\OekumeneTiergarten\ViewHelpers\Format;


use TYPO3\CMS\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Fluid\Core\ViewHelper\Facets\CompilableInterface;

/**
 * Group list viewhelper
 */
class GroupListViewHelper extends AbstractViewHelper implements CompilableInterface
{
    /**
     * Render the given group information as string
     *
     * @param array $groups
     * @return string
     */
    public function render(array $groups = [])
    {
        return static::renderStatic(
            [
                'groups' => $groups,
            ],
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
        $groups = $arguments['groups'];

        $str = [];
        foreach ($groups as $row) {
            $str[] = $row['gr_list'] === '0,-1' ? 'NL' : $row['gr_list'];
        }
        arsort($str);
        return htmlspecialchars(implode('|', $str));
    }
}
