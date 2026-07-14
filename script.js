// ==========================================
// SCRIPT PRINCIPAL - CONECT CAKES
// ==========================================

// ELEMENTO DOM FREQUENTLY USED
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const formulario = document.getElementById('formulario');

// ==========================================
// MENU MOBILE
// ==========================================

mobileMenuBtn?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.style.transform = navMenu.classList.contains('active') 
        ? 'rotate(90deg)' 
        : 'rotate(0deg)';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.style.transform = 'rotate(0deg)';
    });
});

// ==========================================
// ABAS DO CARDÁPIO
// ==========================================

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover active de todos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Adicionar active ao clicado
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// ==========================================
// SCROLL REVEAL - ELEMENTOS APARECEM AO ROLAR
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os elementos com classe animável
document.querySelectorAll('.produto-card, .stat-card, .depoimento-card, .info-card, .menu-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

formulario?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pegar valores
    const nome = formulario.querySelector('input[type="text"]').value;
    const email = formulario.querySelector('input[type="email"]').value;
    const telefone = formulario.querySelector('input[type="tel"]').value;
    const mensagem = formulario.querySelector('textarea').value;

    // Validação básica
    if (!nome || !email || !telefone || !mensagem) {
        alert('⚠️ Por favor, preencha todos os campos!');
        return;
    }

    // Simulando envio
    const btn = formulario.querySelector('button');
    const textOriginal = btn.textContent;
    
    btn.textContent = '📤 Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = '✅ Mensagem Enviada!';
        
        // Mostrar confirmação
        alert(`Obrigado, ${nome}! Receberemos sua mensagem em breve.`);
        
        // Limpar formulário
        formulario.reset();
        
        // Restaurar botão após 3 segundos
        setTimeout(() => {
            btn.textContent = textOriginal;
            btn.disabled = false;
        }, 3000);
    }, 1500);
});

// ==========================================
// BOTÕES ADICIONAR AO CARRINHO
// ==========================================

document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.produto-card');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.preco').textContent;

        // Animação do botão
        const originalText = btn.textContent;
        btn.textContent = '✅ Adicionado!';
        btn.style.background = '#4CAF50';

        // Toast notification
        showToast(`${productName} adicionado ao carrinho!`);

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
});

// ==========================================
// TOAST NOTIFICATION
// ==========================================

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FF69B4, #FF1493);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.3s ease-out;
        z-index: 9999;
        font-weight: 500;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// PARALLAX EFFECT
// ==========================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero) {
        hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
    }
});

// ==========================================
// ANIMAÇÃO DE NÚMEROS (CONTADORES)
// ==========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
        }
    }, 16);
}

// Iniciar animação quando aparecer na tela
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                document.querySelectorAll('.stat-card h3').forEach(el => {
                    const text = el.textContent;
                    const number = parseInt(text);
                    if (!isNaN(number)) {
                        animateCounter(el, number);
                    }
                });
                entry.target.dataset.animated = 'true';
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ==========================================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// ==========================================

function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Aplicar efeito ao título hero (após carregar)
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriterEffect(heroTitle, originalText, 100);
    }
});

// ==========================================
// SMOOTH SCROLL PARA LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ==========================================
// MODO ESCURO/CLARO (OPCIONAL)
// ==========================================

// Verificar preferência do usuário
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// ==========================================
// PRELOADER
// ==========================================

window.addEventListener('load', () => {
    // Remover preloader se houver
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// ==========================================
// LAZY LOADING DE IMAGENS
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// EFEITO DE HOVER EM CARDS
// ==========================================

document.querySelectorAll('.produto-card, .depoimento-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateZ(1deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateZ(0deg)';
    });
});

// ==========================================
// FUNÇÃO DE VALIDAÇÃO DE EMAIL
// ==========================================

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ==========================================
// TRACKING DE CLIQUES
// ==========================================

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        console.log(`Clique em botão: ${e.target.textContent}`);
    }
});

// ==========================================
// INICIALIZAÇÃO
// ==========================================

console.log('✅ Conect Cakes - Script carregado com sucesso!');
console.log('🎂 Bem-vindo ao site de confeitaria premium!');