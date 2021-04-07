export default {
    data() {
        return {
            darkMode: false,
        }
    },
    watch: {
        darkMode: function () {
            let htmlElement = document.documentElement;

            if (this.darkMode) {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        }
    },
    mounted() {
        document.addEventListener("DOMContentLoaded", function (event) {
            let body = document.querySelector('body');
            let sidebar = document.querySelector('.sidebar');

            // Add active class to nav-link based on dynamic url
            let current = location.pathname.split('/').pop();
            $('.nav li a', sidebar).each(function () {
                let $this = $(this);
                addActiveClass($this);
            });

            // For active classes of sidebar menu
            function addActiveClass(element) {
                if (element.attr('href').includes(current ? current : 'index.html')) {
                    element.parents('.nav-item').last().classList.add('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').classList.add('show');
                        element.classList.add('active');
                    }
                    if (element.parents('.submenu-item').length) {
                        element.classList.add('active');
                    }
                }
            }

            // Close other submenu in sidebar on opening any
            sidebar.on('show.bs.collapse', '.collapse', function () {
                sidebar.find('.collapse.show').collapse('hide');
            });

            // Sidebar collapse menu on hover
            document.querySelector('.sidebar .nav-item').addEventListener('mouseenter mouseleave', function (e) {
                let body = $('body');
                let sidebarIconOnly = body.classList.contains('sidebar-icon-only');
                if (!('ontouchstart' in document.documentElement)) {
                    if (sidebarIconOnly) {
                        let $menuItem = $(this);
                        if (e.type === 'mouseenter') {
                            $menuItem.classList.add('hover-open');
                        } else {
                            $menuItem.classList.remove('hover-open');
                        }
                    }
                }
            });

            // Close collapse menu when mouse leave from sidebar hover only
            document.querySelector('.sidebar-hover-only .sidebar').addEventListener('mouseleave', function (e) {
                document.querySelector('.sidebar').find('.collapse.show').collapse('hide');
            });

            // Prevent dropdown menu from closing inside click
            $(document).on('click.bs.dropdown.data-api', '.dropdown.keep-inside-clicks-open', function (e) {
                e.stopPropagation();
            });
        });

        // Check for active theme
        let htmlElement = document.documentElement;
        let theme = localStorage.getItem("theme");

        if (theme === 'dark') {
            htmlElement.setAttribute('theme', 'dark');
            this.darkMode = true;
        } else {
            htmlElement.setAttribute('theme', 'light');
            this.darkMode = false;
        }
    },
    methods: {
        toggleSidebar() {
            document.querySelector('body').classList.toggle('sidebar-icon-only');
        },
        sidebarOffCanvas() {
            document.querySelector('.sidebar-off-canvas').classList.toggle('active');
        },
        fullscreen() {
            if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
                if (document.documentElement.requestFullScreen) {
                    document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        }
    }
};
