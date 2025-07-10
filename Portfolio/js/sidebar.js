$(function() {
    const $nav = $('nav');
    const $menuBtn = $('.icon-menu');
    let sidebarVisible = false;

    // Set sidebar and menu button based on window width
    function setSidebarState() {
        if ($(window).width() <= 1020) {
            $nav.css({
                display: 'block',
                position: 'fixed',
                left: '-220px'
            });
            $menuBtn.css({
                position: 'fixed',
                top: '25px',
                left: '25px',
                zIndex: 1000000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px'
            });
            sidebarVisible = false;
            updateMenuIcon(false);
        } else {
            $nav.css({
                display: '',
                position: '',
                left: '0'
            });
            $menuBtn.css({
                position: '',
                top: '',
                left: '',
                display: ''
            });
            sidebarVisible = true;
            updateMenuIcon(true);
        }
    }

    // Toggle menu icon class based on sidebar state
    function updateMenuIcon(isOpen) {
        if (isOpen) {
            $menuBtn.removeClass('icon-menu').addClass('icon-menu-open');
        } else {
            $menuBtn.removeClass('icon-menu-open').addClass('icon-menu');
        }
    }

    setSidebarState();

    // Update layout on window resize
    $(window).on('resize', setSidebarState);

    // Toggle sidebar and menu button on click
    $menuBtn.on('click', () => {
        if ($(window).width() <= 1020) {
            if (sidebarVisible) {
                $nav.animate({ left: '-220px' }, 300);
                $menuBtn.animate({ left: '25px' }, 300);
                updateMenuIcon(false);
            } else {
                $nav.animate({ left: '0' }, 300);
                $menuBtn.animate({ left: '245px' }, 300);
                updateMenuIcon(true);
            }
            sidebarVisible = !sidebarVisible;
        }
    });
});
