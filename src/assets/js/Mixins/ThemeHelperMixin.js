export default {
    mounted() {
        // Keep dropdown menu open when clicking inside
        let keepOpenDropdowns = document.querySelectorAll('.keep-dropdown-open .dropdown-menu');
        keepOpenDropdowns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation()
            });
        });
    }
}