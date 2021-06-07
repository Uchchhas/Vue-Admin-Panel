export default {
    data() {
        return {
            datasets: [
                {
                    id: 1,
                    name: 'Quick UI',
                    short_name: 'quick-ui',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Active'
                },
                {
                    id: 2,
                    name: 'Default Brand',
                    short_name: 'default-brand',
                    subscribers: 3365,
                    campaigns: 20,
                    status: 'Active'
                },
                {
                    id: 3,
                    name: 'Grameenphone',
                    short_name: 'grameen-phone',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Inactive'
                },
                {
                    id: 4,
                    name: 'BKash',
                    short_name: 'b-kash',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Active'
                },
                {
                    id: 5,
                    name: 'Rocket',
                    short_name: 'rocket-009',
                    subscribers: 3654,
                    campaigns: 36,
                    status: 'Inactive'
                },
                {
                    id: 6,
                    name: 'Nogod',
                    short_name: 'nogod-458',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Inactive'
                },
                {
                    id: 7,
                    name: 'Gain Solution',
                    short_name: 'gain-solution',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Active'
                },
                {
                    id: 8,
                    name: 'Brain Station 23',
                    short_name: 'brain-station',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Active'
                },
                {
                    id: 9,
                    name: 'Airtle',
                    short_name: 'airtle-phone',
                    subscribers: 3654,
                    campaigns: 25,
                    status: 'Active'
                },
                {
                    id: 10,
                    name: 'Banglalink',
                    short_name: 'bangla-link',
                    subscribers: 3569,
                    campaigns: 58,
                    status: 'Active'
                }
            ],
            gridView: false,
            filterOptions: [
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
            ]
        }
    },
    mounted() {
        // Check for active theme
        let htmlElement = document.documentElement;
        let theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            htmlElement.setAttribute('theme', 'dark');
            this.darkMode = true;
        } else {
            htmlElement.setAttribute('theme', 'light');
            this.darkMode = false;
        }
    },
    methods: {
        toggleGridView() {
            this.gridView = !this.gridView;
        },
        openContextMenu() {
            document.getElementById('myModal').style.display = 'block';
        },
        closeContextMenu() {
            document.getElementById('myModal').style.display = 'none';
        }
    }
};