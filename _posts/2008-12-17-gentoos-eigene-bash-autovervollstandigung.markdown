---
layout: post
title: Gentoos eigene Bash-Autovervollständigung
---
Mit zwei kleinen Handgriffen bringt man Gentoo dazu, dass es eine "erweiterte" bash completion hat. So kann man z.B. emerge -av light&lt;Doppel-TAB&gt; drücken und erhält eine Liste aller Pakete, welche mit "light" beginnen (z.B. lighttpd).



Es <em>sollte</em> das bash-completion Use-Flag gesetzt sein. Das ist nicht zwingend notwendig, da es ohne dieses Use-Flag ebenso funktioniert.
Erster Schritt: app-shells/gentoo-bashcomp installieren:
<blockquote>emerge -av gentoo-bashcomp</blockquote>
Nachdem dies getan wurde, öffnet man die Konfiguration seiner Bash. Dies kann /etc/bash/bashrc (global) oder aber ~/.bashrc (lokal, Benutzerabhängig) sein.

In diesem Fall, möchten wir die Funktion für alle Benutzer (global) bereitstellen und editieren die /etc/bash/bashrc (mit nano):
<blockquote>nano -w /etc/bash/bashrc</blockquote>

Die folgenden Zeilen fügen wir nun irgendwo - oberhalb von "alias"-Definitonen - ein:
<blockquote>[[ -f /etc/profile.d/bash-completion ]] &amp;&amp; \
source /etc/profile.d/bash-completion</blockquote>

Nun lediglich noch <blockquote>source /etc/bash/bashrc</blockquote> ausführen. Das war auch schon alles. :-)

Quelle: <a href="http://www.sysadmin.md/tab-autocompletion-for-gentoo.html" target="_blank">sysadmin.md</a>
