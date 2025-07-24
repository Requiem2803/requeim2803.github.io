$(function () {
    const $nav = $('#sidebar');
    const $menuBtn = $('.menu-button');
    const $overlay = $('#overlay');
    const $mainContent = $('#main-content');

    let sidebarVisible = false;

    function setupSidebar() {
        $nav.css({
            display: 'block',
            position: 'fixed',
            top: '0',
            right: '-350px',
            width: '350px',
            height: '100%',
            overflowY: "auto",
            zIndex: 1000
        });

        // Remove fixed positioning so button moves with main content
        $menuBtn.css({
            cursor: 'pointer',
            zIndex: 100001
            // no position, top, right here
        });

        $overlay.hide();

        updateMenuIcon(false);
        sidebarVisible = false;
    }

    function updateMenuIcon(isOpen) {
        const $icon = $menuBtn.find('span');
        if (isOpen) {
            $icon.removeClass('icon-menu').addClass('icon-x');
        } else {
            $icon.removeClass('icon-x').addClass('icon-menu');
        }
    }

    $menuBtn.on('click', () => {
        if (sidebarVisible) {
            // Hide sidebar
            $nav.animate({ right: '-350px' }, 300);
            $mainContent.animate({ marginRight: '0px' }, 300);
            $overlay.fadeOut(300);
            updateMenuIcon(false);
        } else {
            // Show sidebar
            $nav.animate({ right: '0' }, 300);
            $mainContent.animate({ marginRight: '350px' }, 300);
            $overlay.fadeIn(300);
            updateMenuIcon(true);
        }

        sidebarVisible = !sidebarVisible;
    });

    // Clicking the overlay closes the sidebar
    $overlay.on('click', () => {
        if (sidebarVisible) {
            $menuBtn.trigger('click');
        }
    });

    setupSidebar();
});