<?php
    // Database
    $DB_HOST = "localhost";

    // Components
    $COMPONENTS_FOLDER = __DIR__ . "/components/";

    // Pages
    $PAGES_FOLDER = __DIR__ . "/pages/";

    function get_component($component_name) {
        return include($COMPONENTS_FOLDER . $component_name);
    }

    function get_page($page_name) {
        return include($PAGES_FOLDER . $page_name);
    }
?>
