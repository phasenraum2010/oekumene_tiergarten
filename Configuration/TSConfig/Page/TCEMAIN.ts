TCEMAIN.preview {
	tx_news_domain_model_news {
		previewPageId = 6
		useDefaultLanguageRecord = 0
		fieldToParameterMap {
			uid = tx_news_pi1[news_preview]
		}
		additionalGetParameters {
			tx_news_pi1.controller = News
			tx_news_pi1.action = detail
		}
	}
}
