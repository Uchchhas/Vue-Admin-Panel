<template>
    <div>
        <h4 class="mb-4">Alerts</h4>
        
        <div class="card">
            <div class="card-header">
                <h5 class="title">Alert</h5>
            </div>
            <div class="card-body">
                <button class="btn btn-primary" @click="showToast">Show Toast</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Alerts",
        methods: {
            showToast() {
            
            }
        }
    }
</script>