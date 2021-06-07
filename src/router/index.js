import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard'
import Calendar from '../views/Calendar'
import Alerts from '../views/Alerts'
import Avatars from '../views/Avatars'
import Badges from '../views/Badges'
import Buttons from '../views/Buttons'
import Cards from '../views/Cards'
import GeneralInputs from '../views/Forms/GeneralInputs'
import RadiosAndCheckbox from '../views/Forms/RadiosAndCheckbox'
import Selects from '../views/Forms/Selects'
import FileUploads from '../views/Forms/FileUploads'
import BasicTable from '../views/Tables/BasicTable'
import SelectableTableRow from '../views/Tables/SelectableTableRow'
import TableWithGridView from '../views/Tables/TableWithGridView'
import TableWithSearchAndFilters from '../views/Tables/TableWithSearchAndFilters'


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/general-inputs',
    name: 'GeneralInputs',
    component: GeneralInputs
  },
  {
    path: '/radios-and-checkboxes',
    name: 'RadiosAndCheckbox',
    component: RadiosAndCheckbox
  },
  {
    path: '/selects',
    name: 'Selects',
    component: Selects
  },
  {
    path: '/file-uploads',
    name: 'FileUploads',
    component: FileUploads
  },
  {
    path: '/basic-table',
    name: 'BasicTable',
    component: BasicTable
  },
  {
    path: '/selectable-table-row',
    name: 'SelectableTableRow',
    component: SelectableTableRow
  },
  {
    path: '/list-grid-view',
    name: 'TableWithGridView',
    component: TableWithGridView
  },
  {
    path: '/search-and-filters',
    name: 'TableWithSearchAndFilters',
    component: TableWithSearchAndFilters
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts
  },
  {
    path: '/avatars',
    name: 'Avatars',
    component: Avatars
  },
  {
    path: '/badges',
    name: 'Badges',
    component: Badges
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
