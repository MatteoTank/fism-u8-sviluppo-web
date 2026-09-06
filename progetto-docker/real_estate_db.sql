/*
    Creazioni Classi/Entità e relazioni

    Contracts (id, name)
    Real Estates type (id, name)
    Real Estate status (id, name)
    Real Estates (id, code, contract_id, type_id, location, city, province, country, nation, num_rooms, surface, price, status_id)
    Annexes (id, name, surface)
    Owners (id, tax_code, lastname, firstname, phone_number)

    owner_real_estate
    annex_real_estate
*/

CREATE DATABASE IF NOT EXISTS real_estate_manager
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE real_estate_manager;

CREATE TABLE IF NOT EXISTS contracts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS real_estate_types (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS negotiation_status (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS maintenance_status (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS real_estates (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code char(6) NOT NULL UNIQUE,
    contract_id INT UNSIGNED NOT NULL,
    type_id INT UNSIGNED NOT NULL,
    location VARCHAR(255) NULL,
    city VARCHAR(255) NULL,
    country VARCHAR(255) NULL,
    province VARCHAR(255) NULL,
    nation VARCHAR(255) NULL,
    description TEXT NOT NULL,
    num_rooms TINYINT UNSIGNED NOT NULL,
    surface VARCHAR(255) NOT NULL,
    negotiation_status_id INT UNSIGNED NOT NULL,
    maintenance_status_id INT UNSIGNED NOT NULL,
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (contract_id) REFERENCES contracts(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (type_id) REFERENCES real_estate_types(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (negotiation_status_id) REFERENCES negotiation_status(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (maintenance_status_id) REFERENCES maintenance_status(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE IF NOT EXISTS annexes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS owners (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tax_code CHAR(100) NOT NULL UNIQUE,
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    phone_number VARCHAR(25),
    notes TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS owner_real_estate (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    owner_id INT UNSIGNED NOT NULL,
    real_estate_id INT UNSIGNED NOT NULL,
    notes TEXT NULL,
    FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (real_estate_id) REFERENCES real_estates(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE IF NOT EXISTS annex_real_estate (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    annex_id INT UNSIGNED NOT NULL,
    real_estate_id INT UNSIGNED NOT NULL,
    surface VARCHAR(255) NOT NULL,
    notes TEXT NULL,
    FOREIGN KEY (annex_id) REFERENCES owners(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (real_estate_id) REFERENCES real_estates(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);