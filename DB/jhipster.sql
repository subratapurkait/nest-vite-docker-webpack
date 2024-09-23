-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2024 at 08:10 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jhipster`
--

-- --------------------------------------------------------

--
-- Table structure for table `jhi_authority`
--

CREATE TABLE `jhi_authority` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jhi_authority`
--

INSERT INTO `jhi_authority` (`name`) VALUES
('ROLE_ADMIN'),
('ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `jhi_user`
--

CREATE TABLE `jhi_user` (
  `id` int(11) NOT NULL,
  `createdBy` varchar(255) DEFAULT NULL,
  `createdDate` datetime(6) DEFAULT current_timestamp(6),
  `lastModifiedBy` varchar(255) DEFAULT NULL,
  `lastModifiedDate` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `login` varchar(255) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `activated` tinyint(4) NOT NULL DEFAULT 0,
  `langKey` varchar(255) NOT NULL DEFAULT 'en',
  `password` varchar(255) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `activationKey` varchar(255) DEFAULT NULL,
  `resetKey` varchar(255) DEFAULT NULL,
  `resetDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jhi_user`
--

INSERT INTO `jhi_user` (`id`, `createdBy`, `createdDate`, `lastModifiedBy`, `lastModifiedDate`, `login`, `firstName`, `lastName`, `email`, `activated`, `langKey`, `password`, `imageUrl`, `activationKey`, `resetKey`, `resetDate`) VALUES
(1, 'system', '2024-09-21 21:51:49.063810', 'system', '2024-09-21 21:51:49.063810', 'system', 'System', 'System', 'system@localhost.it', 1, 'en', '$2b$10$rCilrEHnZJ9ndsiq9uPq7OfBiXtuiDEPxU5pX1WYTWechUS9xaeoa', '', NULL, NULL, NULL),
(2, 'system', '2024-09-21 21:51:49.136593', 'system', '2024-09-21 21:51:49.136593', 'anonymoususer', 'Anonymous', 'User', 'anonymoususer@localhost.it', 1, 'en', '$2b$10$SUSYDPCS8wsXzCwyjO.QXOoiubIGuKQlUJngX1ZdpMxUdNdGf.jRG', '', NULL, NULL, NULL),
(3, 'system', '2024-09-21 21:51:49.253337', 'system', '2024-09-21 21:51:49.253337', 'admin', 'Administrator', 'Administrator', 'admin@localhost.it', 1, 'en', '$2b$10$V9KKF9xNEd2yf7plRvC2hOfbk21InHKxkBTr1i4vV/yIQasiWUM.a', '', NULL, NULL, NULL),
(4, 'system', '2024-09-21 21:51:49.256965', 'system', '2024-09-21 21:51:49.256965', 'user', 'User', 'User', 'user@localhost.it', 1, 'en', '$2b$10$6uPOo0/I45ZZeP2Wx/HeB.qkrWC40sC2P7RN.Hkt2R5nHyviEMTU6', '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jhi_user_authorities_jhi_authority`
--

CREATE TABLE `jhi_user_authorities_jhi_authority` (
  `jhiUserId` int(11) NOT NULL,
  `jhiAuthorityName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jhi_user_authorities_jhi_authority`
--

INSERT INTO `jhi_user_authorities_jhi_authority` (`jhiUserId`, `jhiAuthorityName`) VALUES
(1, 'ROLE_ADMIN'),
(1, 'ROLE_USER'),
(3, 'ROLE_ADMIN'),
(3, 'ROLE_USER'),
(4, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1570200270081, 'CreateTables1570200270081'),
(2, 1570200490072, 'SeedUsersRoles1570200490072');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jhi_authority`
--
ALTER TABLE `jhi_authority`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `jhi_user`
--
ALTER TABLE `jhi_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_f4c9581c9306bc1986b4d110cc` (`login`);

--
-- Indexes for table `jhi_user_authorities_jhi_authority`
--
ALTER TABLE `jhi_user_authorities_jhi_authority`
  ADD PRIMARY KEY (`jhiUserId`,`jhiAuthorityName`),
  ADD KEY `IDX_15caf295ed2c0c4c9867ac3144` (`jhiUserId`),
  ADD KEY `IDX_e8c0c9d4b9f73b8ad5ca49afc0` (`jhiAuthorityName`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jhi_user`
--
ALTER TABLE `jhi_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jhi_user_authorities_jhi_authority`
--
ALTER TABLE `jhi_user_authorities_jhi_authority`
  ADD CONSTRAINT `FK_15caf295ed2c0c4c9867ac3144d` FOREIGN KEY (`jhiUserId`) REFERENCES `jhi_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_e8c0c9d4b9f73b8ad5ca49afc06` FOREIGN KEY (`jhiAuthorityName`) REFERENCES `jhi_authority` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
