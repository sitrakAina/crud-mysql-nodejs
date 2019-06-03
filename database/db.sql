-- to create a new database
CREATE DATABASE ecole;

-- to use database
use ecole;

-- creating a new table
CREATE TABLE IF NOT EXISTS `eleve` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

-- to show all tables
show tables;

-- to describe table
describe eleve;


