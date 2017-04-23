config {
	prefixLocalAnchors = all
	absRelPath = /
	tx_realurl_enable = 1
	index_enable = 1
	index_externals = 1
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = (at)
}

config.tx_extbase {
	persistence{
		classes {
			ThomasWoehlke\OekumeneTiergarten\Domain\Model\TtAddress {
				mapping {
					tableName = tt_address
					columns {
						wikipedia.mapOnProperty = wikipedia
					}
				}
			}
		}
	}
}
