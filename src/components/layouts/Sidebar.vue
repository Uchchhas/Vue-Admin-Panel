<template>
    <nav class="sidebar sidebar-off-canvas" id="sidebar">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo" href="#"><img src="../../assets/images/logo.png" alt="logo" /></a>
            <a class="navbar-brand brand-logo-mini" href="#"><img src="../../assets/images/logo.png" alt="logo" /></a>
        </div>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="/">
                    <i class="las la-border-all"></i>
                    <span class="menu-title">Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/calendar">
                    <i class="las la-calendar"></i>
                    <span class="menu-title">Calendar</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#ui-elements" role="button" aria-expanded="false" aria-controls="ui-elements">
                    <i class="las la-layer-group"></i>
                    <span class="menu-title">UI Elements</span>
                </a>
                <div class="collapse" id="ui-elements">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                App Settings long text
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                Basic Settings
                            </a>
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