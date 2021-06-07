<template>
    <div>
        <h4 class="mb-4">General Inputs</h4>
        
        <div class="card">
            <div class="card-header">
                <h5 class="title">
                    General Inputs
                </h5>
            </div>
            <div class="card-body">
                <!-- Text Type Input -->
                <div class="mb-3">
                    <label for="textInput" class="form-label">Text Input</label>
                    <input type="text" id="textInput" class="form-control" placeholder="Type something...">
                </div>
    
                <!-- Email Type Input -->
                <div class="mb-3">
                    <label for="emailInput" class="form-label">Text Input</label>
                    <input type="email" id="emailInput" class="form-control" placeholder="Type valid email...">
                </div>
    
                <!-- Number Type Input -->
                <div class="mb-3">
                    <label for="numberInput" class="form-label">Number Input</label>
                    <input type="email" id="numberInput" class="form-control" placeholder="Type a number...">
                </div>
    
                <!-- Color Type Input -->
                <div class="mb-3">
                    <label for="colorInput" class="form-label">Color Input</label>
                    <input type="color" id="colorInput" class="form-control">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GeneralInputs"
    }
</script>