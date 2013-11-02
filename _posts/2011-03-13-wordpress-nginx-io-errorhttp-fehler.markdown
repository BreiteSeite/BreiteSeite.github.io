---
layout: post
title: 'Wordpress + NGINX: IO Error/HTTP Fehler'
---
Wer Wordpress in Kombination mit einem nginx Webserver betreibt und große Bilder (&gt; 1MB) in seine Mediathek hochladen möchte, der wird eventuell vom Wordpress-Uploader mit einem "IO Fehler" oder "HTTP Error" konfrontiert.

Im error.log vom Webserver ist dann folgendes zu finden:

<code>2011/03/12 19:11:38 [error] 26298#0: *18669 client intended to send too large body: 1535569 bytes, client: 127.0.0.1, server: localhost, request: "POST /blog/wp-admin/async-upload.php HTTP/1.1", host: "localhost"</code>

Lösung: Der Wert von <a href="http://wiki.nginx.org/HttpCoreModule#client_max_body_size">client_max_body_size</a> ist standardmäßig auf 1MB gesetzt. Diesen einfach in der Webserverkonfiguration auf einen Wert setzen, welcher genauso groß oder größer ist, wie die maximale Dateigröße beim Hochladen. (z.B. 2MB)
