<template>
    <nav class="sidebar sidebar-off-canvas" id="sidebar">
        <div class="navbar-brand-wrapper">
            <a class="navbar-brand brand-logo" href="#"><img src="../../assets/images/logo.png" alt="logo"/></a>
            <a class="navbar-brand brand-logo-mini" href="#"><img src="../../assets/images/logo.png" alt="logo"/></a>
        </div>
        <ul class="nav">
            <li class="nav-item">
                <router-link to="/" active-class="active" class="nav-link">
                    <div class="icon-wrapper">
                        <i data-feather="home"></i>
                    </div>
                    <span class="menu-title">Dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/calendar" active-class="active" class="nav-link">
                    <div class="icon-wrapper">
                        <i data-feather="calendar"></i>
                    </div>
                    <span class="menu-title">Calendar</span>
                </router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
                    <div class="icon-wrapper">
                        <i data-feather="file-text"></i>
                    </div>
                    <span class="menu-title">Forms</span>
                </a>
                <div class="collapse" id="forms">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <router-link to="/general-inputs" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                General Inputs
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/radios-and-checkboxes" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Radios & Checkboxes
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/selects" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Selects
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/file-uploads" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                File Uploads
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
                    <div class="icon-wrapper">
                        <i data-feather="database"></i>
                    </div>
                    <span class="menu-title">Tables</span>
                </a>
                <div class="collapse" id="tables">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <router-link to="/basic-table" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Basic Table
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/selectable-table-row" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Selectable Table Row
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/list-grid-view" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                With Grid View
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/search-and-filters" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Search & Filters
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#ui-elements" role="button" aria-expanded="false" aria-controls="ui-elements">
                    <div class="icon-wrapper">
                        <i data-feather="layers"></i>
                    </div>
                    <span class="menu-title">UI Elements</span>
                </a>
                <div class="collapse" id="ui-elements">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <router-link to="/alerts" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Alerts
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/avatars" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Avatars
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/badges" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Badges
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/buttons" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Buttons
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/cards" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Cards
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/modals" class="nav-link" active-class="active">
                                <i class="sub-menu-pointer"></i>
                                Modals
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
import layout from "../../assets/js/layout";

export default {
  name: "Sidebar",
    extends: layout
}
</script>