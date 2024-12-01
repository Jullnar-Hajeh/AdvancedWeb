document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');


    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Simulate login
        loginPage.style.display = 'none';
        
    });
});
