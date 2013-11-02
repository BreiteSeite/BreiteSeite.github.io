---
layout: post
title: WP Super Cache + APC = weiße Seiten
---
Wenn Wordpress (3.0) mit aktivierter Super Cache Erweiterung und unter  PHP 5.3 und APC wird,  so erhält man nach einiger Zeit (bei mir nichtmal einen Tag) nur noch weiße Seiten, welche von PHP geparst werden.

Aufmerksam wurde ich durch den Artikel <a href="http://www.johnberns.com/2010/03/19/wp-super-cache-serves-white-blank-pages-fixed/">WP Super Cache Blank Page Problem FIXED! (White Screen of Death) auf johnberns.com</a>.

Eine Lösung des Problems habe ich leider noch keine finden können. Sofern ihr eine haben solltet, dann ab in die Kommentare damit. Das APC ab 3.0.19 das Problem nichtmehr haben soll (so wie in den Kommentaren des oben verlinkten Blogs behauptet) wird, kann ich leider nicht bestätigen (ich setzte APC 3.1.14 ein). Ich habe das Problem ebenfalls durch ersetzen von APC durch eAccelerator gelöst. Allerdings würde ich aus administrativen Gründen bevorzugt das php5-apc Paket von Debian/dotdeb nutzen, statt eine eigene eAccelerator Kompilierung.
