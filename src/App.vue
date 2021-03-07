<template>
    <div class="container-scroller">
        <Navbar/>

        <Sidebar/>

        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";

export default {
  name: 'App',
  components: {
      Navbar,
      Sidebar
  }
}
</script>
