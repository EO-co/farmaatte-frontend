# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

# Copy "Let's encrypt" SSL certificates
COPY /etc/letsencrypt/ssl/fullchain.pem:/etc/nginx/ssl/fullchain.pem
COPY /etc/letsencrypt/ssl/privkey.pem:/etc/nginx/ssl/privkey.pem

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]