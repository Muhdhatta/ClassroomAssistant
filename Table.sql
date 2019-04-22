CREATE TABLE IF NOT EXISTS question (
    id SERIAL PRIMARY KEY,
    question TEXT,
    name TEXT
);

CREATE TABLE IF NOT EXISTS brainstorm (
    id SERIAL PRIMARY KEY,
    idea TEXT,
    name TEXT
);

CREATE TABLE IF NOT EXISTS pollTable (
    id SERIAL PRIMARY KEY,
    poll TEXT,
    input1 TEXT,
    input2 TEXT,
    input3 TEXT,
    input4 TEXT,
    input5 TEXT,
    vote1 INTEGER,
    vote2 INTEGER,
    vote3 INTEGER,
    vote4 INTEGER,
    vote5 INTEGER
);