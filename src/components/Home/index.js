import React from 'react'
import * as s from './index.module.scss'

export default () => {
  return (
    <div className={s.wrap + ' container'}>
      <h1>
        Добро пожаловать в Glowing meme!
      </h1>
      <h2>На данной странице можно увидеть демо тестового задания предлооженного <a href="https://maxpfrontend.ru/">Максимом Пацианским</a></h2>
      <p>
        Вы можете авторизироваться с помощью Google и в разделе News просматривать и создавать новости, так же вы можете редактировать посты, написанные вами.
      </p>
      <p>
        Приложение написано на React в связке с Redux и React router. Тесты написаны с помощью Jest и Enzyme. Для асинхронных операций используется Redux-saga
      </p>
      <p>
        Для авторизации в приложении используется Google sign in
      </p>
      <p>
        Использован <a href="https://github.com/maxfarseer/backend-tz3">бэкэнд</a>
      </p>
      <h3>
        Проблемные места
      </h3>
      <ul>
        <li>
          Отсутствует форма регистрации
        </li>
        <li>
          Тестирование компонентов
        </li>
      </ul>
    </div>
  )
}