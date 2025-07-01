function showTab(tabName) {
    // Esconder todas as abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Mostrar aba selecionada
    document.getElementById(tabName).classList.add('active');
    // 'event.target' se refere ao botão que foi clicado.
    // Garantimos que o evento foi passado, o que acontece automaticamente com onclick no HTML.
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Adicionar efeitos de hover nos cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.day-card, .restaurant-card, .tip-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Código para as abas (se você já tem, mantenha o seu. Se não, use este)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Ativa a primeira aba por padrão ao carregar a página
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }


    // NOVO CÓDIGO PARA EXPANDIR/RECOLHER CARDS DE RESTAURANTES
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach(card => {
        const toggleButton = card.querySelector('.toggle-info-btn');
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                card.classList.toggle('expanded');
                if (card.classList.contains('expanded')) {
                    toggleButton.textContent = 'Ver Menos';
                } else {
                    toggleButton.textContent = 'Ver Detalhes';
                }
            });
        }
    });
});