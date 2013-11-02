---
layout: post
title: HP DeskJet 6840 via Windows-Samba in CUPS
---
Hallo liebe Leser,

wer auch einen Drucker von HP besitzt kann diesen unter Linux wie folgt einrichten (ausgehend von CUPS 1.3):
<ol>
	<li>CUPS installieren:
<pre lang="bash">bigben ~ $ emerge -av cups</pre>
</li>
	<li>Paket "hplip"  installieren:
<pre lang="bash">bigben ~ $ emerge -av net-print/hplip</pre>
</li>
	<li>CUPS starten:
<pre lang="bash">bigben ~ $ /etc/init.d/cupsd start</pre>
</li>
	<li>CUPS Oberfläche aufrufen (http://localhost:631)</li>
	<li>Drucker hinzufügen wählen</li>
	<li>Name, Ort und Beschreibung angeben.</li>
	<li>Die Geräte-URI lautet: <em>smb://user:password@hostOrIP/PrinterShareName </em>
also zum Beispiel: <em>smb://franz:franzelspasswort@192.168.0.34/HP_Printer</em></li>
	<li>Eine PPD-Datei angeben. Diese kann man unter <a href="http://openprinting.org/printer_list.cgi">openprinting.org</a> herunterladen. Alternativ kann man auch die vom <strong>"hplip" Paket bereitgestellte PPD-Datei benutzen</strong>. Dies wird auf openprinting.org für diesen Drucker sogar <strong>empfholen</strong>. Standardmäßig liegt die bei Gentoo unter /usr/share/ppd/HP/hp-deskjet_6800-hpijs.ppd.gz und muss vorher noch mit gunzip entpackt werden. Falls es Probleme mit der Datei gibt, kann man laut openprinting.org für den 6840 auch die PPD des 990C (/usr/share/ppd/HP/hp-deskjet_990c-hpijs.ppd.gz) benutzen.</li>
</ol>
Fertig. :-)

Eventuell möchte man CUPS direkt beim Start vom PC mit starten:
<pre lang="bash">bigben ~ $ rc-update add cupsd</pre>
Wenn man die Installation des hplip-Paketes vergisst, so quittiert CUPS beim Druck mit:
<strong>E [24/Apr/2009:19:31:17 +0200] PID 31877 (/usr/libexec/cups/filter/foomatic-rip) stopped with status 3!</strong>
im Errorlog bzw. in der Oberfläche mit:
<strong>/usr/libexec/cups/filter/foomatic-rip failed</strong>

Ebenfalls sollte man beachten, dass am Windows-PC der <strong>Freigabename des Druckers keine exotischen Zeichen enthält</strong> (dazu zählen auch Leerzeichen).

Viel Spaß beim Drucken.
