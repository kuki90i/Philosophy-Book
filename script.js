  const books = [
    {
      img: 'img/Book-1.png',
      title: 'Метафизика',
      author: 'Аристотель',
      category: 'Метафизика',
      text: 'Основополагающее произведение о природе бытия, субстанции и причинности в философии Аристотеля.'
    },
    {
      img: 'img/Book-2.png',
      title: 'Бытие и время',
      author: 'Мартин Хайдеггер',
      category: 'Экзистенциализм',
      text: 'Ключевой труд экзистенциальной философии, исследующий понятие бытия и человеческого существования.'
    },
    {
      img: 'img/Book-3.png',
      title: 'Наедине с собой',
      author: 'Марк Аврелий',
      category: 'Стоицизм',
      text: 'Личные размышления римского императора о стоицизме, морали и смысле жизни.'
    },
    {
      img: 'img/Book-4.png',
      title: 'Государство',
      author: 'Платон',
      category: 'Политическая философия',
      text: 'Диалог о идеальном государстве, справедливости и роли философа в обществе.'
    },
    {
      img: 'img/Book-5.png',
      title: 'Этика',
      author: 'Аристотель',
      category: 'Этика',
      text: 'Трактат о добродетелях, счастье и этических принципах в учении Аристотеля.'
    },
    {
      img: 'img/Book-6.png',
      title: 'Воля к власти',
      author: 'Фридрих Ницше',
      category: 'Нигилизм',
      text: 'Сборник афоризмов о воле к власти, нигилизме и переоценке ценностей.'
    },
    {
      img: 'img/Book-7.png',
      title: 'Логика',
      author: 'Георг Вильгельм Фридрих Гегель',
      category: 'Идеализм',
      text: 'Система диалектической логики Гегеля, основа его философской системы.'
    },
    {
      img: 'img/Book-8.png',
      title: 'Критика способности суждения',
      author: 'Иммануил Кант',
      category: 'Эстетика',
      text: 'Исследование эстетического и телеологического суждения в философии Канта.'
    },
    {
      img: 'img/Book-9.png',
      title: 'Мера всех вещей',
      author: 'Платон',
      category: 'Эпистемология',
      text: 'Диалог о природе знания и критериях истины в учении Платона.'
    },
    {
      img: 'img/Book-10.png',
      title: 'История западной философии',
      author: 'Бертран Рассел',
      category: 'Эпистемология',
      text: 'Обзор развития западной философии от древности до современности.'
    },
    {
      img: 'img/Book-11.png',
      title: 'Диалоги об Атлантиде',
      author: 'Платон',
      category: 'Метафизика',
      text: 'Диалоги о космологии, Атлантиде и метафизических идеях Платона.'
    },
    {
      img: 'img/Book-12.png',
      title: 'Законы',
      author: 'Платон',
      category: 'Политическая философия',
      text: 'Диалог о законах идеального государства и политической философии.'
    },
    {
      img: 'img/Book-13.png',
      title: 'Философские исследования',
      author: 'Людвиг Витгенштейн',
      category: 'Эпистемология',
      text: 'Анализ языка, значения и природы философских проблем.'
    },
    {
      img: 'img/Book-14.png',
      title: 'Диалоги. Апология Сократа',
      author: 'Платон',
      category: 'Этика',
      text: 'Защитительная речь Сократа и диалоги о морали и справедливости.'
    },
    {
      img: 'img/Book-15.png',
      title: 'Мир как воля и представление',
      author: 'Артур Шопенгауэр',
      category: 'Метафизика',
      text: 'Философия воли, страдания и иллюзии мира в учении Шопенгауэра.'
    },
    {
      img: 'img/Book-16.png',
      title: 'О свободе воли и об основании морали',
      author: 'Артур Шопенгауэр',
      category: 'Этика',
      text: 'Сборник эссе о свободе воли и моральных основаниях человеческого поведения.'
    },
    {
      img: 'img/Book-17.png',
      title: 'Философия духа',
      author: 'Георг Вильгельм Фридрих Гегель',
      category: 'Метафизика',
      text: 'Часть системы Гегеля, посвященная развитию духа и сознания.'
    },
    {
      img: 'img/Book-18.png',
      title: 'Так говорил Заратустра',
      author: 'Фридрих Ницше',
      category: 'Экзистенциализм',
      text: 'Поэтическое произведение о сверхчеловеке и переоценке ценностей.'
    },
    {
      img: 'img/Book-19.png',
      title: 'По ту сторону добра и зла',
      author: 'Фридрих Ницше',
      category: 'Нигилизм',
      text: 'Критика традиционной морали и исследование природы ценностей.'
    },
  ];


    const perPage = 12;
    let page = 0;
    let currentCat = 'Все';

    const cards = document.getElementById('cards');
    const dots = document.getElementById('dots');
    const cats = document.getElementById('cats');

    const categories = ['Все','Метафизика','Эпистемология','Этика','Политическая философия','Эстетика','Идеализм','Стоицизм','Экзистенциализм','Нигилизм'];
    function renderCategories() {
      cats.innerHTML = '';
      categories.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'category' + (c === currentCat ? ' active' : '');
        btn.textContent = c;
        btn.onclick = () => { currentCat = c; page = 0; render(); renderCategories(); };
        cats.appendChild(btn);
      });
    }
    function getFiltered() { return currentCat === 'Все' ? books : books.filter(b => b.category === currentCat); }

    function render() {
      const data = getFiltered();
      cards.innerHTML = '';
      data.slice(page*perPage, (page+1)*perPage).forEach(b => {
        const c = document.createElement('div');
        c.className = 'card';
        c.innerHTML = `
          <img src="${b.img}">
          <div class="card-body">
            <div class="card-title">${b.title}</div>
            <div class="card-author">${b.author}</div>
          </div>`;
        c.onclick = () => openModal(b);
        cards.appendChild(c);
      });

      dots.innerHTML = '';
      for (let i = 0; i < Math.ceil(data.length/perPage); i++) {
        const d = document.createElement('div');
        d.className = 'page-dot' + (i === page ? ' active' : '');
        d.onclick = () => { page = i; render(); };
        dots.appendChild(d);
      }
    }

    document.getElementById('prev').onclick = () => { if(page>0){ page--; render(); } };
    document.getElementById('next').onclick = () => { if(page < Math.ceil(getFiltered().length/perPage)-1){ page++; render(); } };

    const modal = document.getElementById('modal');
    const mImg = document.getElementById('mImg');
    const mTitle = document.getElementById('mTitle');
    const mAuthor = document.getElementById('mAuthor');
    const mCat = document.getElementById('mCat');
    const mText = document.getElementById('mText');
    function openModal(b){
      modal.classList.add('active');
      mImg.src = b.img;
      mTitle.textContent = b.title;
      mAuthor.textContent = 'Автор: ' + b.author;
      mCat.textContent = b.category;
      mText.textContent = b.text;
    }
    function closeModal() { modal.classList.remove('active'); }

    const accountBtn = document.querySelector('.account');
    const registerModal = document.getElementById('registerModal');
    const formContent = document.getElementById('formContent');
    const errorMsg = document.getElementById('errorMsg');
    const accountModal = document.getElementById('accountModal');
    const accImg = document.getElementById('accImg');
    const accName = document.getElementById('accName');
    const accEmail = document.getElementById('accEmail');
    const logoutBtn = document.getElementById('logoutBtn');

    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    accountBtn.onclick = () => {
      if(currentUser) openAccountModal();
      else { showRegisterForm(); registerModal.classList.add('active'); }
    };

    function closeRegister() { registerModal.classList.remove('active'); errorMsg.textContent = ''; }
    function closeAccountModal() { accountModal.classList.remove('active'); }

    const tabs = registerModal.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        tab.dataset.tab === 'register' ? showRegisterForm() : showLoginForm();
        errorMsg.textContent = '';
      };
    });

    function getAccounts() { return JSON.parse(localStorage.getItem('accounts') || '[]'); }
    function saveAccounts(accs) { localStorage.setItem('accounts', JSON.stringify(accs)); }

    function showRegisterForm(){
      formContent.innerHTML = `
        <input type="text" placeholder="Имя" id="regName"/>
        <input type="email" placeholder="Email" id="regEmail"/>
        <input type="password" placeholder="Пароль" id="regPass"/>
        <input type="password" placeholder="Повторите пароль" id="regPass2"/>
        <button id="registerBtn">Зарегистрироваться</button>
      `;
      document.getElementById('registerBtn').onclick = register;
    }

    function showLoginForm(){
      formContent.innerHTML = `
        <input type="email" placeholder="Email" id="loginEmail"/>
        <input type="password" placeholder="Пароль" id="loginPass"/>
        <button id="loginBtn">Войти</button>
      `;
      document.getElementById('loginBtn').onclick = login;
    }

    function register(){
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim().toLowerCase();
      const pass = document.getElementById('regPass').value;
      const pass2 = document.getElementById('regPass2').value;

      if(!name || !email || !pass || !pass2) { errorMsg.textContent = 'Все поля обязательны!'; return; }
      if(pass !== pass2) { errorMsg.textContent = 'Пароли не совпадают!'; return; }

      let accs = getAccounts();
      if(accs.some(a => a.email === email)) { errorMsg.textContent = 'Пользователь с этой почтой уже зарегистрирован!'; return; }

      accs.push({ name, email, pass });
      saveAccounts(accs);
      errorMsg.style.color = '#5cffb1';
      errorMsg.textContent = 'Регистрация успешна! Теперь войдите.';
      showLoginForm();
    }

    function login(){
      const email = document.getElementById('loginEmail').value.trim().toLowerCase();
      const pass = document.getElementById('loginPass').value;
      const user = getAccounts().find(a => a.email === email && a.pass === pass);

      if(!user){
        errorMsg.style.color = '#ff5c5c';
        errorMsg.textContent = 'Неверный email или пароль!';
        return;
      }

      currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      updateAccountButton();
      errorMsg.style.color = '#5cffb1';
      errorMsg.textContent = `Добро пожаловать, ${user.name}!`;
      setTimeout(() => registerModal.classList.remove('active'), 1500);
    }

    logoutBtn.onclick = () => {
      currentUser = null;
      localStorage.removeItem('currentUser');
      updateAccountButton();
      closeAccountModal();
    }

    function updateAccountButton(){
      if(currentUser){
        accountBtn.classList.add('logged-in');
        accountBtn.innerHTML = `<img src="img/Logo-Ake.png" /><span>${currentUser.name}</span>`;
      } else {
        accountBtn.classList.remove('logged-in');
        accountBtn.innerHTML = `<i class="bx bx-log-in"></i><span>Аккаунт</span>`;
      }
    }

    function openAccountModal(){
      if(!currentUser) return;
      accountModal.classList.add('active');
      accImg.src = `img/Logo-Ake.png`;
      accName.textContent = currentUser.name;
      accEmail.textContent = currentUser.email;
    }

    renderCategories();
    render();
    updateAccountButton();
