# 🎂 Conect Cakes - Website de Confeitaria Premium

## 📋 Descrição
Site profissional para a confeitaria **Conect Cakes** com design moderno, animações surpreendentes e funcionalidades interativas. Desenvolvido com HTML, CSS e JavaScript puro - nível Junior a Mestre em programação.

---

## ✨ Principais Características

### 🎨 Design e Animações
- **Animações CSS** suaves e fluidas
- **Efeito Parallax** no hero section
- **Scroll Reveal** - elementos aparecem ao rolar
- **Hover Effects** interativos em cards
- **Transições** elegantes entre seções
- **Responsive Design** para todos os dispositivos

### 📱 Responsividade
- ✅ Desktop (1920px e acima)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (até 480px)
- ✅ Menu hambúrguer para mobile

### 🔧 Funcionalidades
- Menu de navegação sticky
- Abas interativas do cardápio
- Formulário de contato
- Carrinho de compras (simulado)
- Contador de estatísticas
- Toast notifications
- Smooth scrolling

---

## 📁 Estrutura do Projeto

```
confeitaria-website/
│
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilização CSS
├── script.js           # JavaScript
├── README.md           # Este arquivo
└── .gitignore          # Arquivos ignorados
```

---

## 🚀 Como Usar

### 1. **Clonar o Repositório**
```bash
git clone https://github.com/kelvin001-cpu/confeitaria-website.git
cd confeitaria-website
```

### 2. **Abrir no Navegador**
- Simplesmente abra o arquivo `index.html` no seu navegador preferido
- Ou use uma extensão como Live Server (VS Code)

### 3. **Fazer Upload no Google Sala de Aula**
- Compacte a pasta em `.zip`
- Envie para Google Sala de Aula
- Os alunos podem descompactar e visualizar

---

## 📚 Seções do Website

### 1. **Header/Navbar**
- Logo animado com ícone
- Menu de navegação com efeito underline
- Menu hambúrguer para mobile

### 2. **Hero Section**
- Título com efeito de digitação
- Subtítulo atrativo
- Botão CTA (Call To Action)
- Fundo com animações de bolhas

### 3. **Sobre**
- Descrição da confeitaria
- Estatísticas com contadores animados
- Cards informativos

### 4. **Produtos**
- Grade responsiva de 6 produtos
- Cards com badges (Popular, Novo, etc)
- Efeito hover 3D
- Botões de adicionar ao carrinho

### 5. **Cardápio**
- 4 abas: Bolos, Cupcakes, Sobremesas, Personalizados
- Menu interativo com transições suaves
- Itens com preço e descrição

### 6. **Depoimentos**
- Cards de clientes
- Sistema de estrelas (5 estrelas)
- Animações ao scroll

### 7. **Como Funciona**
- 4 passos do processo
- Ícones animados
- Layout em gradient

### 8. **Contato**
- Informações de contato
- Formulário de mensagem
- Validação de dados

### 9. **Footer**
- Links rápidos
- Redes sociais
- Informações legais

---

## 🎯 Conceitos de Programação Utilizados

### HTML
```html
- Semântica HTML5
- Formulários
- Data attributes
- Acessibilidade
- Meta tags
```

### CSS
```css
- Grid Layout
- Flexbox
- Custom Properties (--variáveis)
- Media Queries (Responsividade)
- Pseudo-elementos (::before, ::after)
- Pseudo-classes (:hover, :active, :focus)
- Keyframes e Animations
- Gradients
- Box-shadow e Transforms
```

### JavaScript
```javascript
- DOM Manipulation
- Event Listeners
- IntersectionObserver API
- LocalStorage
- Template Literals
- Arrow Functions
- Promises e Timeouts
- Array Methods (forEach, querySelectorAll)
```

---

## 🎬 Animações Destacadas

### 1. **Entrada de Elementos**
```css
@keyframes slideDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### 2. **Flutuação**
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

### 3. **Pulso**
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
```

### 4. **Scroll Reveal**
```javascript
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
        }
    });
});
```

---

## 🎓 Conceitos Educacionais

Este projeto é excelente para ensinar:

- ✅ HTML Semântico
- ✅ CSS Moderno (Grid, Flexbox, Animations)
- ✅ JavaScript Vanilla (sem frameworks)
- ✅ Responsive Design
- ✅ UX/UI Principles
- ✅ Performance Web
- ✅ Acessibilidade
- ✅ Git e GitHub

---

## 🛠️ Personalizações

### Trocar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #FF69B4;        /* Rosa Principal */
    --secondary-color: #FFB6C1;      /* Rosa Claro */
    --dark-color: #2C3E50;           /* Cinza Escuro */
    --accent-color: #FF1493;         /* Rosa Intenso */
}
```

### Adicionar Produtos
Copie um bloco `produto-card` e modifique:
```html
<div class="produto-card">
    <div class="produto-image">
        <img src="URL_DA_IMAGEM" alt="Bolo">
        <span class="badge">Novo</span>
    </div>
    <div class="produto-info">
        <h3>Nome do Produto</h3>
        <p>Descrição</p>
        <p class="preco">R$ XX,XX</p>
        <button class="btn btn-secondary">Adicionar</button>
    </div>
</div>
```

### Conectar com Backend
Para conectar com backend real, modifique `script.js`:
```javascript
formulario?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(formulario);
    const response = await fetch('URL_DO_BACKEND', {
        method: 'POST',
        body: formData
    });
    
    const data = await response.json();
    console.log('Resposta:', data);
});
```

---

## 📊 Performance

- ⚡ **Sem dependências externas** (exceto FontAwesome)
- 🚀 **Carregamento rápido**
- 📱 **Otimizado para mobile**
- ♿ **Acessível (WCAG)**
- 📈 **SEO Friendly**

---

## 🔗 Links Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [FontAwesome Icons](https://fontawesome.com/)

---

## 📝 Licença
Este projeto é educacional e de código aberto para fins de aprendizado.

---

## 👨‍💻 Desenvolvedor
Criado por **GitHub Copilot** para estudantes e desenvolvedores Junior/Mestre.

---

## 🤝 Contribuições
Sinta-se livre para fazer fork, melhorar e compartilhar! 

---

## 📞 Suporte
Para dúvidas sobre o código, consulte os comentários em cada arquivo ou abra uma issue no GitHub.

---

## 🎉 Resultado Final

Você tem um **website profissional de confeitaria** com:
- ✨ Animações surpreendentes
- 🎨 Design moderno e elegante
- 📱 Responsividade completa
- 🔧 Funcionalidades interativas
- 📚 Código bem documentado
- 🎓 Valor educacional alto

**Parabéns! Seu site está pronto para impressionar!** 🎂✨

---

**Última atualização:** 2024
**Versão:** 1.0.0