
dockerfile
# Usa una imagen base de Node.js con la versión LTS (Long Term Support)
FROM node:lts

# Crea un directorio de trabajo dentro del contenedor

WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Expon el puerto 3000 para que la aplicación sea accesible desde fuera del contenedor
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD [ "node", "app.js" ]
