// im Seitenbaum die SeitenIDs anzeigen:
options.pageTree.showPageIdWithTitle = 1

mod.web_list {

	// allein durch anklicken kann ein Datensatz editiert werden
	clickTitleMode = edit

	// ListenZeilen bekommen im BE alternierende Farben
	alternateBgColors = 1
}

// Breite des Seitenbaum-Frames veränderbar machen:
setup.override.navFrameResizable = 1

// Upload-Button in Contentelementen ausblenden
// es soll bevorzugt /fileadmin/... benutzt werden
setup.override.edit_docModuleUpload = 0

// enable admin user to clear all system caches without to enter install tool (since 6.2):
options.clearCache.system = 1

// enables editors to clear cache of single pages
options.clearCache.all = 1
