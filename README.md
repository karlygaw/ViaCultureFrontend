# Via Culture App

## Описание

**Via Culture** — это приложение для знакомства с разными культурами, общения с представителями народов через чат и изучения их традиций и особенностей. Оно состоит из фронтенда на **React** и бэкенда на **Laravel**.

## Установка

### Фронтенд
Доступна на версел: *https://via-culture-frontend.vercel.app/*

Демо видео:
https://drive.google.com/file/d/1l1WxI3uHgVdz4znTjlGnDp4MKVGe0iyC/view?usp=sharing
1. Главная страница:
![image](https://github.com/user-attachments/assets/9bc6625d-cf35-4f4b-8590-d2c693a6cfd7)

2. Nations: https://via-culture-frontend.vercel.app/nations
![image](https://github.com/user-attachments/assets/06fb6b03-6e66-46cf-a565-bcdbc600ad1c)

3. Nations/1:
   ![image](https://github.com/user-attachments/assets/1cfb2f39-45cf-4ab9-a52b-c6430d330442)

   ![image](https://github.com/user-attachments/assets/9419ed14-ac29-4bf5-a134-c9575c6c055c)

   ![image](https://github.com/user-attachments/assets/0f8fc36a-0c12-42f4-b354-0e8051c89390)

4. Чат с народом
   ![image](https://github.com/user-attachments/assets/975d2119-954c-400d-97c4-07e2732679e7)

   ![image](https://github.com/user-attachments/assets/7539a0fa-95a2-4ead-8494-d85299b4be9a)

   ![image](https://github.com/user-attachments/assets/740dca3c-aef6-45cd-8783-ee12190fae53)

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/your-repo-frontend.git](https://github.com/karlygaw/ViaCultureFrontend)

2. Установите зависимости:
   ```bash
   npm install
3. Запустите проект:
   ```bash
   npm start
### Бэкенд
4. Клонируйте репозиторий бэкенда:
   ```bash
   git clone https://github.com/karlygaw/ViaCulture.git
5. Перейдите в папку проекта:
   ```bash
   cd ViaCulture
6. Установите зависимости:
    ```bash
   composer install
7. Запустите миграции:
    ```bash
   php artisan migrate
8. Запустите сидеры:
   ```bash
   php artisan db:seed
9. Запустите проект:
   ```bash
   php artisan serve
 
   
*Особенность:*
Бэк сделала как АПИ. JSON-ки возвращает.
Пример роут:
1. Список нации:
```bash
   http://127.0.0.1:8000/api/nations

2. Данные по конкретной нации: (только 3 народов добавила через сидеры)
```bash
   http://127.0.0.1:8000/api/nations/{id}

3. Чат - как пост запрос отправляете сообщение, получаете json
```bash
   http://127.0.0.1:8000/api/gemini-chat


Использован Gemini AI API для чатов с представителями разных культур.
Адаптивная верстка для мобильных, планшетов и десктопов.

*Недостатки:*
В проекте не завершены админ-панель и регистрация пользователей из-за нехватки времени.

*Почему этот стек?*
React — удобен для создания интерфейсов и Laravel — простой и удобный фреймворк для создания бэкенда и API.
