Стартовая сборка проекта на вебпак. 

Скрипты:
    "start" - запустить сборку в development режиме с webpack dev server
    "build-dev": сделать development сборку, сервер не запускать
    "build-prod": сделать production сборку, сервер не запускать
    "analyzer":  сделать production сборку + запустить аналайзер production сборки 

Запустить аналайзер продакшен сборки:
npm run build-prod --  --env analyzer=true
----