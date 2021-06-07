<template>
    <div>
        <h4 class="mb-4">Selects</h4>
        
        <div class="card mb-4">
            <div class="card-header">
                <h5 class="title">Selects</h5>
            </div>
            <div class="card-body">
                <div class="row align-items-center mb-4">
                    <div class="col-md-3">
                        <h6 class="mb-md-0">Default select</h6>
                    </div>
                    <div class="col-md-7">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose an option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </div>
                
                <div class="row align-items-center mb-4">
                    <div class="col-md-3">
                        <h6 class="mb-md-0">Search & Select</h6>
                    </div>
                    <div class="col-md-7">
                        <div class="dropdown">
                            <input type="text"
                                   class="form-control form-select dropdown-toggle"
                                   placeholder="Choose an option"
                                   id="searchSelectDropdownButton"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                            <ul class="dropdown-menu dropdown-search-select"
                                aria-labelledby="searchSelectDropdownButton">
                                <li class="search-control">
                                    <i class="bi bi-search"></i>
                                    <input type="text" class="form-control" placeholder="Search here...">
                                </li>
                                <div class="options-wrapper custom-scrollbar">
                                    <li v-for="option in selectOptions">
                                        <a class="dropdown-item" href="#">
                                            {{ option.name }}
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <h6 class="mb-md-0">Multiselect</h6>
                    </div>
                    <div class="col-md-7">
                        <div class="dropdown">
                            <div class="dropdown-toggle multi-select-control"
                                 id="multiselectDropdownButton"
                                 data-bs-toggle="dropdown"
                                 aria-expanded="false">
                                <a v-if="!selectedOptions.length" href="#" class="btn-add">
                                    Choose options
                                </a>
                                <span v-else
                                      class="badge rounded-pill me-2 mb-2"
                                      v-for="(option, index) in selectedOptions">
                                    {{ option.name }}
                                    <a href="#"
                                       class="btn-remove"
                                       @click.prevent="removeOption($event, option.id)">
                                        <i class="bi bi-x"></i>
                                    </a>
                                </span>
                            </div>
                            <ul class="dropdown-menu dropdown-search-select"
                                aria-labelledby="multiselectDropdownButton">
                                <li class="search-control">
                                    <i class="bi bi-search"></i>
                                    <input type="text" class="form-control" placeholder="Search here...">
                                </li>
                                <div class="options-wrapper custom-scrollbar">
                                    <div class="options-wrapper custom-scrollbar">
                                        <li v-for="(option, index) in selectOptions">
                                            <a href="#"
                                               class="dropdown-item"
                                               :class="{'disabled selected': isChipSelected(option)}"
                                               @click.prevent="addOption(index)">
                                                {{ option.name }}
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Selects',
        data() {
            return {
                selectOptions: [
                    {id: 1, name: 'Option 1'},
                    {id: 2, name: 'Option 2'},
                    {id: 3, name: 'Option 3'},
                    {id: 4, name: 'Option 4'},
                    {id: 5, name: 'Option 5'},
                    {id: 6, name: 'Option 6'},
                    {id: 7, name: 'Option 7'},
                    {id: 8, name: 'Option 8'},
                    {id: 9, name: 'Option 9'},
                    {id: 10, name: 'Option 10'},
                    {id: 11, name: 'Option 11'},
                    {id: 12, name: 'Option 12'},
                    {id: 13, name: 'Option 13'},
                    {id: 14, name: 'Option 14'},
                    {id: 15, name: 'Option 15'},
                ],
                selectedOptions: []
            }
        },
        methods: {
            isChipSelected(value) {
                return this.selectedOptions.includes(value);
            },
            addOption(index) {
                this.item = this.selectOptions[index];
                this.selectedOptions.push(this.item);
            },
            removeOption(event, id) {
                console.log(id)
                event.stopPropagation();
                this.selectedOptions.splice(this.selectedOptions.indexOf(id), 1);
            }
        }
    }
</script>