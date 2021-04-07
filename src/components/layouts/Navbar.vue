<template>
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper">
            <div class="navbar-left-items">
                <a href="/" class="navbar-brand d-block d-lg-none">
                    <img src="../../assets/images/logo.png" alt="logo"/>
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item d-none d-lg-block">
                        <a href="#" class="nav-link" @click.prevent="toggleSidebar">
                            <i class="las la-align-left"/>
                        </a>
                    </li>
                    <li class="nav-item d-block d-lg-none">
                        <a href="#" class="nav-link" @click="sidebarOffCanvas">
                            <i class="las la-align-left"/>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click.prevent="toggleDarkMode">
                            <i v-if="darkMode" class="las la-cloud-sun"/>
                            <i v-else class="las la-cloud-moon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="navbar-right-items">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="fullscreen">
                            <i class="las la-expand"/>
                        </a>
                    </li>
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle me-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="nav-profile-img">
                                <img src="../../assets/images/default-avatar.jpg" alt="">
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end navbar-dropdown" aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-item profile">
                                <div class="nav-profile-img">
                                    <img src="../../assets/images/default-avatar.jpg" alt="">
                                </div>
                                <div class="nav-profile-text">
                                    <p class="my-0 text-black">Jeffrey Chisolm</p>
                                    <span class="text-secondary">Admin</span>
                                </div>
                            </div>
                            <div class="dropdown-divider"/>
                            <a class="dropdown-item" href="#">
                                <i class="las la-user me-2"></i>
                                My Profile
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="las la-cog me-2"></i>
                                Settings
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="las la-sign-out-alt me-2"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import layout from "../../assets/js/layout";

export default {
    name: "Navbar",
    extends: layout,
    data() {
        return {
            leftMenuType: 'normal',
            notifications: false
        }
    },
}
</script>