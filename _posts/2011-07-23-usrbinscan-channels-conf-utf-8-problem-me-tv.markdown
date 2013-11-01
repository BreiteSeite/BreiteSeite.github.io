---
layout: post
title: /usr/bin/scan channels.conf UTF-8 Problem Me-TV
categories:
- Computer
tags:
- dvb
- linux
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  robotsmeta: index,follow
---
Me-TV - ein DVB-Client für Linux - benötigt eine channels.conf, also eine Liste mit allen verfügbaren Channels. Meine Umgebung ist Archlinux mit Gnome3. Da es mit der <a href="https://wiki.archlinux.org/index.php/Locale#Gnome-terminal_doesn.27t_support_UTF-8">UTF-8 Unterstützung für gnome-terminal</a> etwas hapert, hier eine kurze Anleitung, wie ihr trotzdem eine UTF-8 konforme channels.conf erstellen könnt.


<ol>
	<li>gnome-terminal starten, Zeichensatzeinstellung auf UTF-8 lassen.</li>
	<li>channels.conf erzeugen (in meinem Fall mit:
<pre lang="bash">$ scan -x0 -t1 -s1 /usr/share/dvb/dvb-s/Astra-19.2E | tee -a channels.conf</pre>
</li>
</ol>
Jetzt habt ihr eine channels.conf, welche allerdings nicht im UTF-8-Format, sondern im ISO-8859-Format ist.
<pre lang="bash">$ file channels.conf
channels.conf: ISO-8859 text</pre>
Diese könnt ihr jetzt jedoch mit iconv einfach in UTF-8 konvertieren:
<pre lang="bash">$ iconv --from-code=ISO-8859-15 --to-code=UTF-8 channels.conf > channels.conf.utf8</pre>
Alternativ funktioniert auch folgender Aufruf:
<pre lang="bash">$ iconv -f latin1 -t utf-8 channels.conf > channels.conf.utf8</pre>
Und schon habt ihr eine channels.conf.utf8 im UTF-8 Format.
<pre lang="bash">$ file channels.conf.utf8
channels.conf.utf8: UTF-8 Unicode text</pre>
Das Ergebnis: Me-TV kann die Datei einlesen, und dem Fernsehabend steht nix mehr im Wege:

<a href="http://www.breiteseite.net/blog/usrbinscan-channels-conf-utf-8-problem-me-tv/bildschirmfoto/" rel="attachment wp-att-381"><img class="aligncenter size-medium wp-image-381" title="Me-Tv" src="http://www.breiteseite.net/blog/wp-content/uploads/2011/07/Bildschirmfoto-300x161.png" alt="" width="300" height="161" /></a>
Falls jemand eine Methode kennt, die ohne Konvertierung klappt, lasst es mich in den Kommentaren wissen.
