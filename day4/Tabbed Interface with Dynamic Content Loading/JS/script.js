const tabContent = {
    tab1: "Tab 1 text goes here",
    tab2: "Tab 2 text goes here",
    tab3: "Tab 3 text goes here"
};


function updateTabContent(tabId) {
    const content = document.getElementById("tabContent");
    content.textContent = tabContent[tabId];
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        updateTabContent(tabId);
    });
});


updateTabContent('tab1');