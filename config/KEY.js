// Ceci est un tuto
// sinon vous mettez le dossier config dans votre gitignore pour le mettre sur les plateforme de versioning exemple github, ...

module.exports = {
  APP: {
    port: "3000"
  },
  CORS: {
    FRONT: "http://localhost:8080",
    BACK: "http://localhost:3000"
  },
  DB: {
    NAME: "maBaseDeDonnée",
    USER: "user",
    PASSWORD: "password",
    PORT: "7777",
    HOST: "localhost"
  }
}