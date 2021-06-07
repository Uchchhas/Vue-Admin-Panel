<template>
    <div>
        <h4 class="mb-4">Basic Table</h4>
    
        <div class="datatable-wrapper">
            <div class="data-wrapper">
                <div class="table-responsive">
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
            </div>
        </div>
    </div>
</template>

<script>
    import DatatableMixin from "../../assets/js/Mixins/DatatableMixin";

    export default {
        name: 'BasicTable',
        mixins: [DatatableMixin]
    }
</script>