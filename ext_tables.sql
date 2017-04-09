#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
	tx_kirche_street_address mediumtext NOT NULL,
	tx_kirche_address_street VARCHAR(100) NOT NULL default '',
	tx_kirche_address_city VARCHAR(100) NOT NULL default '',
	tx_kirche_address_zip VARCHAR(100) NOT NULL default '',
	tx_kirche_address_state VARCHAR(100) NOT NULL default '',
	tx_kirche_address_country VARCHAR(100) NOT NULL default '',
	tt_address_uid int(10) NOT NULL default '0',
);


