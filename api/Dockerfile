# Многоэтапная сборка для Laravel API
FROM php:8.2-fpm-alpine as builder

# Установка системных зависимостей
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    oniguruma-dev \
    nodejs \
    npm

# Установка PHP расширений
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Установка рабочей директории
WORKDIR /var/www/html

# Копирование файлов composer
COPY composer.json composer.lock ./

# Установка PHP зависимостей
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Копирование исходного кода
COPY . .

# Установка Node.js зависимостей и сборка assets (если есть)
COPY package*.json ./
RUN if [ -f package.json ]; then npm ci --only=production && npm run build; fi

# Оптимизация Laravel
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Создание пользователя для безопасности
RUN addgroup -g 1000 www && \
    adduser -u 1000 -G www -s /bin/sh -D www

# Изменение владельца файлов
RUN chown -R www:www /var/www/html

# Финальный образ
FROM php:8.2-fpm-alpine

# Установка системных зависимостей
RUN apk add --no-cache \
    libpng-dev \
    libxml2-dev \
    oniguruma-dev \
    nginx \
    supervisor

# Установка PHP расширений
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Копирование конфигурации PHP
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini

# Копирование конфигурации Nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Копирование конфигурации Supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Установка рабочей директории
WORKDIR /var/www/html

# Копирование приложения из builder
COPY --from=builder /var/www/html /var/www/html

# Создание пользователя
RUN addgroup -g 1000 www && \
    adduser -u 1000 -G www -s /bin/sh -D www

# Установка правильных прав доступа
RUN chown -R www:www /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Открытие портов
EXPOSE 80 9000

# Запуск Supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]