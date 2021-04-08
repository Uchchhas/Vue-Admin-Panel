<template>
    <nav class="navbar navbar-top">
        <div class="navbar-menu-wrapper">
            <div class="navbar-left-items">
                <a href="/" class="navbar-brand d-block d-lg-none">
                    <img src="../../assets/images/logo.png" alt="logo"/>
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item d-none d-lg-block">
                        <a href="#" class="nav-link" @click.prevent="toggleSidebar">
                            <i data-feather="align-left"></i>
                        </a>
                    </li>
                    <li class="nav-item d-block d-lg-none">
                        <a href="#" class="nav-link" @click="sidebarOffCanvas">
                            <i data-feather="align-left"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="navbar-right-items">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click.prevent="toggleDarkMode">
                            <i v-if="darkMode" class="icofont-sunny"></i>
                            <i v-else class="icofont-full-night"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="fullscreen">
                            <i data-feather="maximize"></i>
                        </a>
                    </li>
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle border-left" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="text-end me-2">
                                <small class="text-muted">Good morning</small>
                                <p class="mb-0">Jeffrey Chisolm</p>
                            </span>
                            <div class="nav-profile-img">
                                <img src="../../assets/images/default-avatar.jpg" alt="">
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end navbar-dropdown" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">
                                <i data-feather="user" class="me-3"></i> <span class="d-inline-block">My Profile</span>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i data-feather="settings" class="me-3"></i> <span class="d-inline-block">Settings</span>
                            </a>
                            <a class="dropdown-item" href="#">
                                <i data-feather="log-out" class="me-3"></i> <span class="d-inline-block">Logout</span>
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