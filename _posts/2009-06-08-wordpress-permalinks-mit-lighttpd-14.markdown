---
layout: post
title: Wordpress Permalinks mit Lighttpd 1.4
---
Hallo,

wer die recht nette Permalinks-Funktion von Wordpress nutzen möchte, allerdings anstelle eines Apache- einen Lighttpd Web-Server installiert hat, kann sich des mod_magnet Moduls von Lighttpd bedienen.

Zuerstmal muss man unter Debian (etch) das Paket lighttpd-mod-magnet installieren mit:
<pre lang="bash">aptitude install lighttpd-mod-magnet</pre>
Danach die Konfigurationsdatei von Lighttpd öffnen und den Hostabschnitt wie folgt anpassen:
<pre lang="perl">$HTTP["host"] == "your.domain-here.com" {
  server.document-root = "/path/to/your/htdocs"
  magnet.attract-physical-path-to = ( server.document-root + "/rewrite.lua" )
}</pre>
<strong>Hinweis:</strong> Die rewrite.lua sollte im Verzeichnis eures Blogs sein. Also die Zeile könnte auch wie folgt aussehen:
<pre lang="perl">  magnet.attract-physical-path-to = ( server.document-root + "/my/blog/rewrite.lua" )</pre>
<strong>Achtung:</strong> Damit mod_magnet funktioniert, muss dieses Modul in der Konfiguration ebenfalls noch aktiviert werden (server.modules).

Jetzt müsst ihr die rewrite.lua im angegeben Verzeichnis noch erstellen und mit folgendem Inhalt füllen:
<pre lang="perl">attr = lighty.stat(lighty.env["physical.path"])

if (not attr) then
  lighty.env["uri.path"] = "/index.php"
  lighty.env["physical.rel-path"] = lighty.env["uri.path"]
  lighty.env["physical.path"] = lighty.env["physical.doc-root"] .. lighty.env["physical.rel-path"]
end</pre>
Gegebenfalles ist auch hier wieder das Blogverzeichnis anzupassen, also konkret folgende Zeile:
<pre lang="perl">  lighty.env["uri.path"] = "/my/blog/index.php"</pre>
Danach noch Lighttpd neustarten:
<pre lang="bash">/etc/init.d/lighttpd restart</pre>
Und die Einstellungen im Wordpress Admin Interface unter Einstellungen -&gt; Permalinks nach belieben einstellen. Wer Cache-Plugins nutzt: Nicht vergessen den Cache danach zu leeren, damit die Änderungen sichtbar werden.

P.S.: Hab ich natürlich eben direkt für meinen Blog auch integriert.

Quelle: <a href="http://sudhaker.com/web-development/wordpress/wordpress-permalinks-lighttpd.html">sudhacker.com</a>
