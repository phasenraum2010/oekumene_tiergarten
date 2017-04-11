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
 * FlagValue viewhelper
 */
class FlagValueViewHelper extends AbstractViewHelper implements CompilableInterface
{
    /**
     * Render additional flag information
     *
     * @param int $flags
     * @return string
     */
    public function render($flags)
    {
        return static::renderStatic(
            [
                'flags' => $flags,
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
        $flags = (int)$arguments['flags'];

        if ($flags > 0) {
            $content = ($flags & 128 ? '<title>' : '')
                . ($flags & 64 ? '<meta/keywords>' : '')
                . ($flags & 32 ? '<meta/description>' : '');

            return htmlspecialchars($content);
        }
        return '';
    }
}
