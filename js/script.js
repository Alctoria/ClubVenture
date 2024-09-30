function navigateTo(page) {
    const currentPath = window.location.pathname;
    const isInSubdirectory = currentPath.includes('/views/');
    
    if (page === 'index.html' && isInSubdirectory) {
        window.location.href = '../index.html';
    } else if (isInSubdirectory && !page.startsWith('../')) {
        window.location.href = page;
    } else if (!isInSubdirectory && page.startsWith('views/')) {
        window.location.href = page;
    } else {
        window.location.href = isInSubdirectory ? `../${page}` : page;
    }
}