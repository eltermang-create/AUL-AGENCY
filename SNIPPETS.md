# 📝 Полезные сниппеты кода для AUL

Коллекция готовых фрагментов кода для быстрой кастомизации сайта.

---

## 🎨 Добавление нового проекта

Скопируйте этот блок и вставьте в секцию `#projects` файла `index.html`:

```html
<!-- Новый проект -->
<div class="project-item">
    <div class="project-image">
        <img src="images/projects/new-project.jpg" alt="Название проекта">
    </div>
    <div class="project-info">
        <h3 class="project-title">Название вашего проекта</h3>
        <p class="project-description">Описание проекта: концепция, подход, решения и результаты. 2-3 предложения для полного представления о работе.</p>
    </div>
</div>
```

**Для реверсивной (зеркальной) компоновки добавьте класс `reverse`:**
```html
<div class="project-item reverse">
```

---

## 👤 Добавление нового члена команды

```html
<div class="team-member">
    <div class="team-photo">
        <img src="images/team/name.jpg" alt="Имя Фамилия">
    </div>
    <h3 class="team-name">Имя Фамилия</h3>
</div>
```

**Если фото пока нет (инициалы):**
```html
<div class="team-member">
    <div class="team-photo">
        <div class="team-placeholder">ИФ</div>
    </div>
    <h3 class="team-name">Имя Фамилия</h3>
</div>
```

---

## 📧 Форма обратной связи (через Formspree)

Добавьте в секцию Contact вместо map-placeholder:

```html
<div class="contact-form">
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="form-group">
            <input type="text" name="name" placeholder="Ваше имя" required>
        </div>
        <div class="form-group">
            <input type="email" name="email" placeholder="Email" required>
        </div>
        <div class="form-group">
            <textarea name="message" placeholder="Сообщение" rows="5" required></textarea>
        </div>
        <button type="submit" class="form-button">Отправить</button>
    </form>
</div>
```

**Стили для формы (добавить в `css/style.css`):**
```css
.contact-form {
    background-color: var(--concrete);
    padding: 40px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    background-color: var(--graphite);
    border: 1px solid var(--warm-sand);
    color: var(--white);
    font-family: var(--font-primary);
    font-size: 16px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--warm-sand);
    opacity: 0.6;
}

.form-button {
    padding: 15px 40px;
    background-color: var(--warm-sand);
    color: var(--graphite);
    border: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.form-button:hover {
    background-color: var(--white);
}
```

---

## 🗺️ Google Maps (замена placeholder)

```html
<div class="contact-map">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.123456789!2d76.9514!3d43.2220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEzJzE5LjIiTiA3NsKwNTcnMDUuMCJF!5e0!3m2!1sen!2skz!4v1234567890"
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

**Как получить код для карты:**
1. Откройте Google Maps
2. Найдите нужный адрес
3. Нажмите "Поделиться" → "Встроить карту"
4. Скопируйте код

---

## 🖼️ Галерея проекта (модальное окно)

Добавьте перед закрывающим `</body>`:

```html
<!-- Modal Gallery -->
<div class="modal-gallery" id="gallery-modal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <img src="" alt="" id="modal-image">
        <div class="modal-caption"></div>
    </div>
</div>
```

**CSS (добавить в style.css):**
```css
.modal-gallery {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 18, 0.95);
}

.modal-content {
    position: relative;
    margin: auto;
    padding: 40px;
    width: 90%;
    max-width: 1200px;
    top: 50%;
    transform: translateY(-50%);
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 40px;
    color: var(--white);
    font-size: 48px;
    font-weight: 300;
    cursor: pointer;
}

#modal-image {
    width: 100%;
    height: auto;
}

.modal-caption {
    text-align: center;
    color: var(--warm-sand);
    padding: 20px;
    font-size: 18px;
}
```

**JavaScript (добавить в main.js):**
```javascript
// Gallery Modal
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.project-image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
```

---

## 🎬 Добавление видео

**YouTube видео:**
```html
<div class="video-container">
    <iframe 
        width="100%" 
        height="600" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

**Локальное видео:**
```html
<div class="video-container">
    <video controls playsinline webkit-playsinline>
        <source src="videos/project-presentation.mp4" type="video/mp4">
        Ваш браузер не поддерживает видео.
    </video>
</div>
```

**CSS для видео:**
```css
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
    background-color: var(--concrete);
}

.video-container iframe,
.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

---

## 📊 Добавление статистики

```html
<div class="stats-section">
    <div class="stat-item">
        <div class="stat-number">150+</div>
        <div class="stat-label">проектов реализовано</div>
    </div>
    <div class="stat-item">
        <div class="stat-number">24</div>
        <div class="stat-label">города исследований</div>
    </div>
    <div class="stat-item">
        <div class="stat-number">8</div>
        <div class="stat-label">лет опыта</div>
    </div>
    <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">довольных клиентов</div>
    </div>
</div>
```

**CSS:**
```css
.stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    padding: 80px 0;
}

.stat-item {
    text-align: center;
    padding: 40px 20px;
    border: 1px solid var(--warm-sand);
}
```

---

## 🏷️ Теги/категории для проектов

```html
<div class="project-tags">
    <span class="tag">Архитектура</span>
    <span class="tag">Урбанизм</span>
    <span class="tag">Исследования</span>
</div>
```

**CSS:**
```css
.project-tags {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
}

.tag {
    display: inline-block;
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid var(--warm-sand);
    color: var(--warm-sand);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
```

---

## 🔗 Кнопка "Наверх"

Добавьте перед закрывающим `</body>`:

```html
<button class="scroll-to-top" id="scrollTop">↑</button>
```

**CSS:**
```css
.scroll-to-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background-color: var(--warm-sand);
    color: var(--graphite);
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-smooth);
    z-index: 999;
}

.scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    background-color: var(--white);
}
```

**JavaScript:**
```javascript
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

---

## 🎨 Альтернативные цветовые схемы

### Тёмная тема
```css
:root {
    --graphite: #0A0A0A;
    --concrete: #1A1A1A;
    --warm-sand: #C9B89A;
    --white: #FAFAFA;
    --muted-green: #6F7A68;
}
```

### Светлая минималистичная
```css
:root {
    --graphite: #2C2C2C;
    --concrete: #4A4A4A;
    --warm-sand: #8B7355;
    --white: #FFFFFF;
    --muted-green: #7F8A78;
}
```

### Скандинавская
```css
:root {
    --graphite: #2E3440;
    --concrete: #3B4252;
    --warm-sand: #D8DEE9;
    --white: #ECEFF4;
    --muted-green: #8FBCBB;
}
```

---

**💡 Совет:** Всегда тестируйте изменения на локальной копии перед публикацией!