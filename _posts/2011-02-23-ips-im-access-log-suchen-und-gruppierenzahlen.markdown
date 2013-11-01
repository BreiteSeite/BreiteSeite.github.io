---
layout: post
title: IPs im Access-Log suchen und gruppieren/zählen
categories:
- Computer
tags:
- linux
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  _wp_old_slug: ''
  robotsmeta: index,follow
---
<h2>Vorwort</h2>
Oftmals ist es nützlich, häufig vorkommende IP-Adresse aus dem access.log zu extrahieren. Zum Beispiel um festzustellen, ob es sich um einen <a href="http://de.wikipedia.org/wiki/Denial_of_Service">DoS-Angriff</a> handelt.

<h2>Voraussetzungen</h2>
<ul>
	<li>Damit der nachfolgende Shell-Befehl funktioniert, muss <a href="http://packages.debian.org/pcregrep">pcregrep</a> installiert sein.</li>
	<li>Im access.log müssen die Zeilen mit der IP-Adresse anfangen, gefolgt von einem Leerzeichen. Dies ist in den meisten Standardkonfigurationen der Fall.</li>
</ul>
<h2>Befehle</h2>
<pre lang="bash">pcregrep -o '^[0-9.]+(?=\s)' /path/to/access.log | sort | uniq -c | sort -bg</pre>
Wer nicht die Rechte hat, um pcregrep zu installieren, kann auch auf das Standard-grep zurückgreifen:
<pre lang="bash">grep --color=none -o -iE '^[0-9.]+\s' /path/to/access.log | sort | uniq -c | sort -bg</pre>
<h2>Ausgabe</h2>
Die Ausgabe sieht dann zum Beispiel so aus:
<pre line="1">
   1174 77.*.238.166
   1175 217.*.199.212
   1816 67.*.112.231
   2354 46.*.192.32
   2670 77.*.200.109
   2779 85.*.118.78
   2823 217.*.230.224
   5145 77.*.231.27</pre>
Die Zahl vor der IP-Adresse ist die Anzahl der Vorkommen im access.log. Das Sternchen ist nur um die Beispiel-IPs zu zensieren.
