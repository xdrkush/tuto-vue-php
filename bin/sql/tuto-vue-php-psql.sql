CREATE TABLE articles(
    id serial PRIMARY KEY,
    title CHARACTER VARYING(255) NOT NULL,
    content TEXT NOT NULL,
    icon CHARACTER VARYING(50),
    position INT NOT NULL
);

CREATE TABLE users(
    id CHARACTER VARYING(255) NOT NULL PRIMARY KEY,
    username CHARACTER VARYING(255) NOT NULL,
    pass CHARACTER VARYING(255) NOT NULL,
    registered timestamp NOT NULL,
    last_login timestamp
);

CREATE TABLE messages(
    id serial PRIMARY KEY,
    authorfirst VARCHAR(255) NOT NULL,
    authorlast VARCHAR(255) NOT NULL,
    authormail VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created timestamp NOT NULL,
    seen timestamp
);

CREATE TABLE images(
    id serial PRIMARY KEY,
    imagename VARCHAR(255) NOT NULL,
    contactid INT NOT NULL,
    logid INT NOT NULL
);

INSERT INTO articles(title, content, icon, position)
VALUES
('Article 1', 'Ma super Description', 'fas fa-atom', 1),
('Article 2', 'Ma super Description', null, 2);

-- INSERT INTO users(username, pass)
-- VALUES
-- ('Arinfo', 'arinfo', 1);
