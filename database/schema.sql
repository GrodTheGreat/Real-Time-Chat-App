CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    hashed_password TEXT NOT NULL,
    salt TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    bio TEXT,
    status INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),

    FOREIGN KEY (status) REFERENCES status(id)
);

CREATE TABLE IF NOT EXISTS chat (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    type_id INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),

    FOREIGN KEY (type_id) REFERENCES chat_type(id)
);

CREATE TABLE IF NOT EXISTS user_chat (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    chat_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (chat_id) REFERENCES chat(id)
);

CREATE TABLE IF NOT EXISTS message (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    chat_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    timestamp TEXT NOT NULL DEFAULT (datetime('now')),

    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (chat_id) REFERENCES chat(id)
);

CREATE TABLE IF NOT EXISTS status (
    id INTEGER PRIMARY KEY,
    status_name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS chat_type (
    id INTEGER PRIMARY KEY,
    type_name TEXT NOT NULL UNIQUE
);