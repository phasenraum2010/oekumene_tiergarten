config {
	tx_realurl_enable = 1
	index_enable = 1
	index_externals = 1
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = (at)
	simulateStaticDocuments = 0
	prefixLocalAnchors = all
	absRelPath = /
}

[globalVar = GP:tx_news_pi1|news > 0]
	config.defaultGetVars {
		tx_news_pi1 {
			controller=News
			action=detail
		}
	}
[global]
