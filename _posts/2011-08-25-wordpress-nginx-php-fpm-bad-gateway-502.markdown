---
layout: post
title: wordpress + nginx + php-fpm = Bad Gateway 502
---
Wer ein Server-Setup mit PHP-FPM, nginx und Wordpress-Blogs betreibt, der hat eventuell das Problem, dass nach dem Veröffentlichen eines Artikels keine PHP-Seite mehr lädt und nginx nur noch mit einem "<strong>502 Bad Gateway</strong>" antwortet.

Das Problem habe ich nach einiger Recherche dank dem Blog von <a title="crashme blogeintrag zu 502 bad gateway Problem" href="http://cr4shme.wordpress.com/2010/10/25/nginx-und-der-502-bad-gatewaythe-page-your-are-looking-for/">crashme</a> herausgefunden. nginx beendet den entsprechenden php-fpm Prozess, da (laut Aussage von crashme's Artikel) nginx einen zu großen Speicherverbrauch vorhersagt und (dummerweise) den Prozess killt.

Die (zumindest temporäre) <strong>Abhilfe</strong> ist: <strong>Mehr PHP-(F)CGI Prozesse spawnen</strong>. Bei meinem System musste ich die Mindestzahl von 2 auf 3 erhöhen. Nutzt ihr php-fpm, so stellt ihr die Anzahl der erlaubten CGI-Prozesse mit
{% highlight ini %}pm.max_children = 3{% endhighlight %}
ein. Wer das spawn-fcgi Skript nutzt (wird z.B. gerne in Kombination mit lighttpd verwendet), kann dies mit dessen Übergabeparameter (-F und -C) steuern (siehe crashme's Blogeintrag).
