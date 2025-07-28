FROM node:22-alpine

WORKDIR /directus

# Установка Directus
RUN npm install -g directus

# Создание директории для данных
RUN mkdir -p /directus/uploads /directus/extensions

# Открытие порта
EXPOSE 8055

# Команда запуска
CMD ["directus", "start"]