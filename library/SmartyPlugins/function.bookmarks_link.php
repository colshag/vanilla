<?php
/**
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 * @package vanilla-smarty
 * @since 2.0
 */

/**
 *
 *
 * @param array $params
 * @param object $smarty
 * @return string
 */
function smarty_function_bookmarks_link($params, &$smarty) {
    $wrap = val('wrap', $params, 'li');
    return Gdn_Theme::link('discussions/bookmarked',
        val('text', $params, t('My Bookmarks')),
        val('format', $params, wrap('<a href="%url" class="%class">%text</a>', $wrap)));
}
