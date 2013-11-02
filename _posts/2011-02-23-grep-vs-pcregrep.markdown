---
layout: post
title: grep vs. pcregrep
---
Wer (komplexe) Perl-Kompatible reguläre Ausdrücke auf der Linux-Konsole ausführen möchte, der hat zwei Möglichkeiten.
<ol>
	<li>"grep -P" benutzen. Dies ist allerdings nicht immer möglich. Debian kompiliert die Unterstützung für diese Funktion in seine Standardpakete nicht ein. Wer sich dennoch grep nicht selbst kompilieren möchte, der kann</li>
	<li>das Paket <a href="http://packages.debian.org/pcregrep">pcregrep</a> benutzen.</li>
</ol>
pcregrep ist zudem schneller als grep -E.

Hier ein direkter Vergleich um IPs aus einem 15 MB großen access.log zu filtern:
<pre lang="bash" line="1">time grep --color=none -o -E '^[0-9.]+\s' access.log > /dev/null

real    0m1.890s
user    0m1.864s
sys     0m0.026s</pre>
<pre lang="bash" line="1">time pcregrep -o '^[0-9.]+(?=\s)' access.log > /dev/null

real    0m0.050s
user    0m0.046s
sys     0m0.004s</pre>
Das bedeutet, <strong>pcregrep ist ca. 4-Mal so schnell wie das Standardgrep</strong>. Dies kann bei größeren Log-Dateien (im GB-Bereich) schnell einen Unterschied in Minutengröße zur Folge haben.
