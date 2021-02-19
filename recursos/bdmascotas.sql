-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2021 a las 08:33:27
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdmascotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id` int(11) NOT NULL,
  `raza` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `informacion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id`, `raza`, `nombre`, `imagen`, `informacion`) VALUES
(20, 'cocker spaniel', 'Yorki', 'https://mascotasamadas.com/wp-content/uploads/2020/08/cocker-spaniel-cachorro.jpg', 'https://es.wikipedia.org/wiki/Cocker_spaniel_ingl%C3%A9s'),
(21, 'Husky siberiano', 'Max', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg', 'https://es.wikipedia.org/wiki/Husky_siberiano'),
(22, 'Pastor aleman', 'Rocky', 'https://upload.wikimedia.org/wikipedia/commons/9/94/Cane_da_pastore_tedesco_adulto.jpg', 'https://es.wikipedia.org/wiki/Pastor_alem%C3%A1n'),
(23, 'Rottweiler', 'Hades', 'https://www.micachorro.net/wp-content/uploads/2018/03/Rottweile-perro.jpg', 'https://es.wikipedia.org/wiki/Rottweiler'),
(24, 'Golden retriever', 'Jacobo', 'http://www.pregonagropecuario.com/assets/images/upload/perro_golden_retriever_montana.jpg', 'https://es.wikipedia.org/wiki/Golden_retriever'),
(25, 'Dóberman', 'Zeus', 'https://demascotas.info/wp-content/uploads/2018/02/doberman-893931_1280.jpg', 'https://es.wikipedia.org/wiki/D%C3%B3berman');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
