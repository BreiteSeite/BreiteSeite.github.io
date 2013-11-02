---
layout: post
title: nginx www zu non-www redirect und vice versa
---
Zu einer Internetpräsenz gehört ein einheitliches URL-Format. Einige entscheiden sich für die nicht-www-Version, Andere für die www-Version einer Domain.

Ein Grund für die Entscheidung für die www-Version ist bei den <a href="http://developer.yahoo.com/performance/rules.html#cookie_free">Yahoo Best Practices</a> gelistet. So werden nämlich weniger Cookies zum Server übermittelt. Pro Request!

Mit nginx lässt sich eine allgemeine Weiterleitung ganz einfach einrichten. Einfach die Konfiguration des entsprechenden VHosts öffnen und wie folgt anpassen:

<strong>von non-www zu www:</strong>
<pre>server {
  listen 80;
  server_name example.com;
  rewrite ^/(.*) http://www.example.com/$1 permanent;
}

server {
  listen 80;
  server_name www.example.com;

  // hier folgen nun die richtigen Konfigurationen...
}</pre>
<strong>von www zu non-www:</strong>
<pre>server {
  listen 80;
  server_name www.example.com;
  rewrite ^/(.*) http://example.com/$1 permanent;
}

server {
  listen 80;
  server_name example.com;

  // hier folgen nun die richtigen Konfigurationen...
}</pre>
