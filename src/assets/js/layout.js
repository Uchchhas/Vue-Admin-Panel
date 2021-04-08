import feather from "feather-icons";

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
        feather.replace();
        document.addEventListener("DOMContentLoaded", (event) => {
            let body = document.querySelector('body'),
                sidebar = document.querySelector('.sidebar'),
                navbar = document.querySelector('.navbar-top'),
                navItems = document.querySelectorAll('.sidebar .nav-item');

            // Add class navbar onscroll
            window.onscroll = function () {
                if (window.pageYOffset > 0) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }

            // Close other submenu in sidebar on opening any
            sidebar.addEventListener('show.bs.collapse', () => {
                sidebar.querySelectorAll('.collapse.show').forEach(obj => obj.classList.remove('show'));
            });

            // Open menu on icon only sidebar
            navItems.forEach(item => {
                item.addEventListener('mouseenter', (e) => {
                    let sidebarIconOnly = body.classList.contains('sidebar-icon-only');
                    if (sidebarIconOnly) {
                        if (e.type === 'mouseenter') {
                            item.classList.add('hover-open');
                        }
                    }
                });
                item.addEventListener('mouseleave', (e) => {
                    let sidebarIconOnly = body.classList.contains('sidebar-icon-only');
                    if (sidebarIconOnly) {
                        let $menuItem = this;
                        if (e.type === 'mouseleave') {
                            item.classList.remove('hover-open');
                        }
                    }
                });
            });
        });

        // Check for active theme
        let htmlElement = document.documentElement;
        let theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            htmlElement.setAttribute('theme', 'dark');
            this.darkMode = true;
        } else {
            htmlElement.setAttribute('theme', 'light');
            this.darkMode = false;
        }
    },
    methods: {
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
        },
        toggleSidebar() {
            document.querySelector('body').classList.toggle('sidebar-icon-only');
        },
        sidebarOffCanvas() {
            document.querySelector('.sidebar-off-canvas').classList.toggle('active');
        }
    }
};
