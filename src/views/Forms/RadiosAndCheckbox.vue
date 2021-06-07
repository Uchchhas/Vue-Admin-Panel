<template>
    <div>
        <h4 class="mb-4">Radios & Checkboxes</h4>
        
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="title">Checkboxes</h5>
            </div>
            <div class="card-body">
                <div class="row mb-4">
                    <div class="col-md-3">
                        <h6>Checkbox Block</h6>
                    </div>
                    <div class="col-md-7">
                        <div class="form-check form-check-checkbox mb-2">
                            <input id="checkbox1" class="form-check-input" type="checkbox">
                            <label for="checkbox1" class="form-check-label ms-1">Option 1</label>
                        </div>
                        <div class="form-check form-check-checkbox mb-2">
                            <input id="checkbox2" class="form-check-input" type="checkbox">
                            <label for="checkbox2" class="form-check-label ms-1">Option 2</label>
                        </div>
                        <div class="form-check form-check-checkbox mb-2">
                            <input id="checkbox3" class="form-check-input" type="checkbox">
                            <label for="checkbox3" class="form-check-label ms-1">Option 3</label>
                        </div>
                        <div class="form-check form-check-checkbox mb-2">
                            <input id="checkbox4" class="form-check-input" type="checkbox">
                            <label for="checkbox4" class="form-check-label ms-1">Option 4</label>
                        </div>
                        <div class="form-check form-check-checkbox">
                            <input id="checkbox5" class="form-check-input" type="checkbox">
                            <label for="checkbox5" class="form-check-label ms-1">Option 5</label>
                        </div>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-md-3">
                        <h6>Checkbox Inline</h6>
                    </div>
                    <div class="col-md-7">
                        <div class="form-check form-check-checkbox form-check-inline">
                            <input id="checkboxInline1" class="form-check-input" type="checkbox">
                            <label for="checkboxInline1" class="form-check-label ms-1">Option 1</label>
                        </div>
                        <div class="form-check form-check-checkbox form-check-inline">
                            <input id="checkboxInline2" class="form-check-input" type="checkbox">
                            <label for="checkboxInline2" class="form-check-label ms-1">Option 2</label>
                        </div>
                        <div class="form-check form-check-checkbox form-check-inline">
                            <input id="checkboxInline3" class="form-check-input" type="checkbox">
                            <label for="checkboxInline3" class="form-check-label ms-1">Option 3</label>
                        </div>
                        <div class="form-check form-check-checkbox form-check-inline">
                            <input id="checkboxInline4" class="form-check-input" type="checkbox">
                            <label for="checkboxInline4" class="form-check-label ms-1">Option 4</label>
                        </div>
                        <div class="form-check form-check-checkbox form-check-inline">
                            <input id="checkboxInline5" class="form-check-input" type="checkbox">
                            <label for="checkboxInline5" class="form-check-label ms-1">Option 5</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="title">Radios</h5>
            </div>
            <div class="card-body">
                <div class="row mb-4">
                    <div class="col-md-3">
                        <h6>Radios Block</h6>
                    </div>
                    <div class="col-md-7">
                        <label for="radio1" class="radio mb-2 me-3">
                            <input type="radio" name="rdo" id="radio1"/>
                            <span class="label"></span> Option 1
                        </label>
                        <label for="radio2" class="radio mb-2 me-3">
                            <input type="radio" name="rdo" id="radio2"/>
                            <span class="label"></span> Option 2
                        </label>
                        <label for="radio3" class="radio mb-2 me-3">
                            <input type="radio" name="rdo" id="radio3"/>
                            <span class="label"></span> Option 3
                        </label>
                        <label for="radio4" class="radio mb-2 me-3">
                            <input type="radio" name="rdo" id="radio4"/>
                            <span class="label"></span> Option 4
                        </label>
                        <label for="radio5" class="radio mb-2 me-3">
                            <input type="radio" name="rdo" id="radio5"/>
                            <span class="label"></span> Option 5
                        </label>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-md-3">
                        <h6>Radios Inline</h6>
                    </div>
                    <div class="col-md-7">
                        <label for="radioInline1" class="radio radio-inline me-3">
                            <input type="radio" name="rdo" id="radioInline1"/>
                            <span class="label"></span> Option 1
                        </label>
                        <label for="radioInline2" class="radio radio-inline me-3">
                            <input type="radio" name="rdo" id="radioInline2"/>
                            <span class="label"></span> Option 2
                        </label>
                        <label for="radioInline3" class="radio radio-inline me-3">
                            <input type="radio" name="rdo" id="radioInline3"/>
                            <span class="label"></span> Option 3
                        </label>
                        <label for="radioInline4" class="radio radio-inline me-3">
                            <input type="radio" name="rdo" id="radioInline4"/>
                            <span class="label"></span> Option 4
                        </label>
                        <label for="radioInline5" class="radio radio-inline me-3">
                            <input type="radio" name="rdo" id="radioInline5"/>
                            <span class="label"></span> Option 5
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RadiosAndCheckbox'
    }
</script>