const tabContent = {
    tab1: "Contents of Tab 1",
    tab2: "Contents of Tab 2",
    tab3: "Contents of Tab 3"
};

// ֆունկցիա ներսի բովանդակությունը թարմացնելու
function updateTabContent(tabId) {
    const content = document.getElementById("tabContent");
    content.textContent = tabContent[tabId];
}

// Обработчик события клика по вкладке
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // ջնջում ենք 'active' կլասը բոլոր ներդիրներից
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        // ընթացիկ ներդիրին ավելացնում ենք 'active' կլասը
        this.classList.add('active');
        // ներսի բովանդակության թարմացում
        const tabId = this.getAttribute('data-tab');
        updateTabContent(tabId);
    });
});


updateTabContent('tab1');