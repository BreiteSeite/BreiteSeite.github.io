---
layout: post
title: nginx rewrite Regel für wordpress w3 total cache plugin
categories:
- Computer
tags:
- minify
- nginx
- wordpress
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  title: nginx rewrite rule for wordpress w3 total cache plugin
  robotsmeta: index,follow
---
Das W3 Total Cache Plugin für Wordpress kann CSS und Javascript Dateien von Wordpress minimieren ("Minify").  Im W3T-Optionsdialog zu finden unter: <em>Rewrite <acronym title="Uniform Resource Locator">URL</acronym> structure (If disabled, <acronym title="Cascading Style Sheet">CSS</acronym> and <acronym title="JavaScript">JS</acronym> embeddings will use GET variables instead of "fancy" links.)</em>

Damit dies aber in Kombination mit nginx funktioniert, benötigt man eine rewrite-Regel. Dazu einfach im server-Abschnitt eurer nginx Konfiguration folgende Zeile hinzufügen:
<pre>rewrite ^/my/blog/wp-content/w3tc/min/([a-f0-9]+)\/(.+)\.(include(\-(footer|body))?(-nb)?)\.[0-9]+\.(css|js)$ /my/blog/wp-content/w3tc/min/index.php?tt=$1&amp;gg=$2&amp;g=$3&amp;t=$7 last;</pre>
Danach funktioniert auch die o.g. Option mit nginx (getestet mit WP 3.0.4 und nginx 0.9.3).

<strong>Hinweis</strong>: Ich habe für meinen statischen Content eine eigene VHost-Konfiguration im nginx. Da mein "minified" CSS und JS auch von diesem VHost ausgeliefert wird, ist die Regel auch in dieser VHost-Konfiguration hinzuzufügen und nicht in der Konfiguration für die Standard-Domain. Das übersieht man unter Umständen recht schnell und wundert sich, warum es nicht funktioniert.

<em>Beobachtung:</em> Erstaunlicherweise hat diese Option auch direkten Einfluss auf die URL  von CDN-Dateien. So habe ich für meine CDN-Dateien  "static.breiteseite.net" hinterlegt. Deaktiviere ich allerdings o.g.  Option, so werden diese von "breiteseite.net" ausgeliefert. Mit  aktivierter Option hingegen ist wieder alles schön.

Quelle: <a href="http://tutspundit.com/nginx-wordpress-w3-total-cache-minify-rewrite-rules/">tutspundit.com</a>
