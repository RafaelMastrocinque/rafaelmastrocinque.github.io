
document.addEventListener('DOMContentLoaded', function() {
    
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const galeriaItens = document.querySelectorAll('.galeria-item');
    
    if (filtroBtns.length > 0) {
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                
                filtroBtns.forEach(b => b.classList.remove('active'));
                
                
                this.classList.add('active');
                
                const filtro = this.getAttribute('data-filtro');
                
                
                galeriaItens.forEach(item => {
                    if (filtro === 'todos' || item.getAttribute('data-categoria') === filtro) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    

    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value;
            
            let valido = true;
            
            if (nome.length < 3) {
                alert('Por favor, insira um nome válido (mínimo 3 caracteres).');
                valido = false;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('Por favor, insira um e-mail válido.');
                valido = false;
            }
            
            if (servico === '') {
                alert('Por favor, selecione um serviço.');
                valido = false;
            }
            
            if (mensagem.length < 10) {
                alert('Por favor, insira uma mensagem mais detalhada (mínimo 10 caracteres).');
                valido = false;
            }
            
            if (valido) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                formContato.reset();
            }
        });
    }
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.style.color = '#e63946';
            link.style.fontWeight = 'bold';
        }
    });
});