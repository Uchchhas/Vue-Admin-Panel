<template>
    <div>
        <h4 class="mb-4">Table with Search & Filters</h4>
    
        <div class="datatable-wrapper">
            <div class="filters-wrapper mb-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <button type="button" class="btn btn-outline-primary d-inline-flex align-items-center me-2"
                                @click="toggleGridView">
                            <template v-if="!gridView">
                                <i class="bi bi-grid-3x3-gap fs-6 me-2"></i> Grid View
                            </template>
                            <template v-else>
                                <i class="bi bi-list-ul fs-6 me-2"></i> List View
                            </template>
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-toggle="collapse"
                                data-bs-target="#filterCollapse" aria-expanded="false"
                                aria-controls="filterCollapse">
                            <i class="bi bi-funnel fs-6 me-2"></i> Filters
                        </button>
                    </div>
                    <div class="search-input">
                        <i class="bi bi-search search-icon"></i>
                        <input placeholder="Search term" class="form-control">
                    </div>
                </div>
                <div class="collapse mt-2" id="filterCollapse">
                    <div class="filters">
                        <div class="filter date-range-filter">
                            <DatePicker v-model="range" :is-range="true" :is-dark="darkMode" color="indigo">
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                        :value="inputValue.start"
                                        v-on="inputEvents.start"
                                    />
                                </template>
                            </DatePicker>
                        </div>
                        <div class="filter checkbox-filter">
                            <div class="dropdown keep-dropdown-open">
                                <button class="btn btn-filter dropdown-toggle" type="button" id="checkboxFilter"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Checkbox Filter
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="checkboxFilter">
                                    <div class="form-check form-check-checkbox d-flex align-items-center mb-2"
                                         v-for="(option, index) in filterOptions">
                                        <input class="form-check-input me-3" type="checkbox"
                                               :id="`checkboxOption${option.id}`">
                                        <label class="form-check-label" :for="`checkboxOption${option.id}`">
                                            {{ option.name }}
                                        </label>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div class="filter radio-filter">
                            <div class="dropdown keep-dropdown-open">
                                <button class="btn btn-filter dropdown-toggle" type="button" id="radioFilter"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Radio Filter
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="radioFilter">
                                    <div class="custom-radio" v-for="(option, index) in filterOptions">
                                        <label class="custom-radio-label mb-2">
                                            <input type="radio" name="radios" :checked="option.id == 1">
                                            <span class="outside me-2">
                                                    <span class="inside"/>
                                                </span>
                                            {{ option.name }}
                                        </label>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div class="filter search-select-filter">
                            <div class="dropdown keep-dropdown-open">
                                <button class="btn btn-filter dropdown-toggle" type="button"
                                        id="searchAndSelectFilter"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    Search & Select Filter
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="searchAndSelectFilter">
                                    <li class="search-wrapper">
                                        <div class="search-input">
                                            <i class="bi bi-search search-icon"></i>
                                            <input placeholder="Search term" class="form-control">
                                        </div>
                                    </li>
                                    <li class="filter-options-wrapper">
                                        <ul>
                                            <li v-for="(option, index) in filterOptions">
                                                <a href="#" class="dropdown-item">{{ option.name }}</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="data-wrapper">
                <!-- Table View -->
                <div v-if="!gridView" class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    <div class="form-check form-check-checkbox row-check">
                                        <input id="checkAllRow"
                                               class="form-check-input"
                                               type="checkbox"
                                               @click="openContextMenu"/>
                                        <label class="form-check-label" for="checkAllRow"></label>
                                    </div>
                                </th>
                                <th>Name</th>
                                <th>Visit brand</th>
                                <th>Short name</th>
                                <th>Subscribers</th>
                                <th>Campaigns</th>
                                <th>Status</th>
                                <th class="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(brand, index) in datasets">
                                <td>
                                    <div class="form-check form-check-checkbox row-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                               :id="`brand-${brand.id}`">
                                        <label class="form-check-label" :for="`brand-${brand.id}`"/>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">{{ brand.name }}</a>
                                </td>
                                <td>
                                    <a href="#" class="btn btn-sm rounded-pill btn-primary">
                                        Go <i class="bi bi-arrow-up-right-circle ms-1"></i>
                                    </a>
                                </td>
                                <td>
                                    {{ brand.short_name }}
                                </td>
                                <td>
                                    {{ brand.subscribers }}
                                </td>
                                <td>
                                    {{ brand.campaigns }}
                                </td>
                                <td>
                                        <span class="badge rounded-pill"
                                              :class="{'bg-success': brand.status === 'Active', 'bg-warning': brand.status === 'Inactive'}">
                                            {{ brand.status }}
                                        </span>
                                </td>
                                <td class="text-end">
                                    <div class="dropdown dropstart action-dropdown">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <i class="bi bi-three-dots"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <i class="bi bi-pencil-square me-2 action-icon"></i> Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <i class="bi bi-trash me-2 action-icon"></i> Delete
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <i class="bi bi-slash-circle me-2 action-icon"></i> De-activate
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
                <!-- Grid View -->
                <div v-else class="grid-view">
                    <div class="row">
                        <div class="col-md-6 col-lg-4 col-xl-3 mb-4" v-for="(brand, index) in datasets">
                            <div class="card">
                                <div class="card-body position-relative">
                                    <div class="d-flex align-items-center mb-5">
                                        <div
                                            class="width-70 height-70 radius-default bg-base text-secondary fs-4 d-inline-flex flex-shrink-0 align-items-center justify-content-center me-2">
                                            BN
                                        </div>
                                        <div>
                                            <p class="mb-1">{{ brand.name }}</p>
                                            <span class="badge rounded-pill"
                                                  :class="{'bg-success': brand.status === 'Active', 'bg-warning': brand.status === 'Inactive'}">
                                                    {{ brand.status }}
                                                </span>
                                        </div>
                                    </div>
                                    <div class="mb-5">
                                        <p class="mb-1">
                                            <span class="text-muted">Short name: </span>{{ brand.short_name }}
                                        </p>
                                        <p class="mb-1">
                                            <span class="text-muted">Subscribers: </span>{{ brand.subscribers }}
                                        </p>
                                        <p class="mb-0">
                                            <span class="text-muted">Campaigns: </span>{{ brand.campaigns }}
                                        </p>
                                    </div>
                                    <div class="text-center">
                                        <a href="#" class="btn btn-app rounded-pill">
                                            Visit Brand <i class="bi bi-arrow-up-right-circle ms-1"></i>
                                        </a>
                                    </div>
                                    <div class="dropdown action-dropdown position-absolute top-24 right-24">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <i class="bi bi-three-dots"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <i class="bi bi-pencil-square me-2 action-icon"></i> Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <i class="bi bi-trash me-2 action-icon"></i> Delete
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <i class="bi bi-slash-circle me-2 action-icon"></i> De-activate
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- Context Menu -->
            <div id="myModal" class="context-menu-popup">
                <div class="context-menu-content">
                    <div class="btn-group dropup">
                        <button type="button" class="btn-context dropdown-toggle me-2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-folder-plus me-2"></i> Add List
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <button type="button" class="btn-context me-2">
                        <i class="bi bi-person-plus me-2"></i> Subscribe
                    </button>
                    <button type="button" class="btn-context me-2">
                        <i class="bi bi-person-x me-2"></i> Unsubscribe
                    </button>
                    <button type="button" class="btn-context bg-danger me-2">
                        <i class="bi bi-trash"></i>
                    </button>
                    <div class="btn-group dropup d-inline-block">
                        <button type="button" class="btn-context dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropup
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <button type="button" class="btn-close-popup" @click="closeContextMenu">
                        <i class="bi bi-x"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {DatePicker} from "v-calendar";
    import DatatableMixin from "../../assets/js/Mixins/DatatableMixin";
    import ThemeHelperMixin from "../../assets/js/Mixins/ThemeHelperMixin";

    export default {
        name: 'TableWithSearchAndFilters',
        components: {DatePicker},
        mixins: [DatatableMixin, ThemeHelperMixin]
    }
</script>