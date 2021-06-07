<template>
    <div>
        <h4 class="mb-4">File Uploads</h4>
    
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="title">Selects</h5>
            </div>
            <div class="card-body">
                <div class="row align-items-center mb-4">
                    <div class="col-md-3">
                        <h6 class="mb-md-0">Default file input</h6>
                    </div>
                    <div class="col-md-7">
                        <input class="form-control" type="file" id="formFile">
                    </div>
                </div>
            
                <div class="row align-items-center mb-4">
                    <div class="col-md-3">
                        <h6 class="mb-md-0">Multiple files input</h6>
                    </div>
                    <div class="col-md-7">
                        <input class="form-control" type="file" id="formFileMultiple" multiple>
                    </div>
                </div>
            
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <h6 class="mb-md-0">Dropzone</h6>
                    </div>
                    <div class="col-md-7">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FileUploads'
    }
</script>