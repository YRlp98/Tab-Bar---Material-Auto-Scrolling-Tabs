function scrollToTab(index) {
    const tabsContainer = document.getElementById('tabsContainer');
    const tabElements = tabsContainer.children;
    if (tabElements[index]) {
        tabElements[index].scrollIntoView({ behavior: "smooth", inline: "center" });
    }
}
