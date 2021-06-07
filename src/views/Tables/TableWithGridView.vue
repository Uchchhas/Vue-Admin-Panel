<template>
    <div>
        <h4 class="mb-4">Table With Grid View</h4>
    
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
                    </div>
                </div>
            </div>
        
            <div class="data-wrapper">
                <!-- Table View -->
                <div v-if="!gridView" class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
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
        </div>
    </div>
</template>

<script>
    import DatatableMixin from "../../assets/js/Mixins/DatatableMixin";

    export default {
        name: 'TableWithGridView',
        mixins: [DatatableMixin]
    }
</script>