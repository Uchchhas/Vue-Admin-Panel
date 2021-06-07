<template>
    <div>
        <h4 class="mb-4">Selectable Table Row</h4>
    
        <div class="datatable-wrapper">
            <div class="data-wrapper">
                <div class="table-responsive">
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

    export default {
        name: 'SelectableTableRow',
        components: {DatePicker},
        mixins: [DatatableMixin],
        data() {
            return {
                range: {
                    start: new Date(2020, 9, 12),
                    end: new Date(2020, 9, 16),
                }
            }
        }
    }
</script>