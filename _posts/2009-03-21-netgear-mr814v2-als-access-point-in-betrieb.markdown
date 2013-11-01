---
layout: post
title: Netgear MR814v2 als Access Point in Betrieb
categories:
- Computer
tags:
- access point
- netgear
- router
- wlan
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
So,

nachdem mein Bruder nun einen Router organisiert hat, welcher auch als Access Point dienen kann, hab ich nun diesen in Betrieb genommen. Nun haben wir wenigstens im oberen Stockwerk ein WLAN zur Verfügung.



Vorgehensweise ist wie folgt (unter Linux):
<ol>
	<li>Als allererstes ist die Datei /etc/resolv.conf zu sichern. (cp /etc/resolv.conf ~/resolv.conf).</li>
	<li>Nun den Router zum Strom verbinden und mit einem straight-through-Kabel zum eigenen Rechner.</li>
	<li>Über 192.168.0.1 kann man das Interface aufrufen (Anmerkung: Das Interface funktioniert mit einem aktuellen Opera Browser leider stabiler, als mit einem aktuellen Firefox-Browser (3.0.7).</li>
	<li>Unter Basic Settings ist der Punkt "Nein" bei  "Does Your Internet Connection Require A Login" zu wählen.</li>
	<li>Da unser Router über die 192.168.178.1 (255.255.255.0 Subnet) erreichbar ist, hab ich dem Access-Point ersteinmal gesagt, er solle doch bitte die 192.168.178.2 als IP benutzen, damit beide sich im gleichen Subnet befinden (Advanced -&gt; LAN IP Setup -&gt; LAN TCP/IP Setup)
IP Address: 192.168.178.2
IP Subnet Mask: 255.255.255.0
RIP Direction: Both
RIP Version: RIP_2B
<strong>Achtung: Der Router trennt nach dem Klick auf Apply die Verbindung und meldet sich mit der neuen IP-Adresse an.</strong></li>
	<li>Falls man schon DHCP ausgeschaltet hat, sollte man sich nun unter Linux mit "ifconfig eth0 192.168.178.20" erstmal eine IP aus dem Addressbereich geben. Danach kann man den Router über seine neue IP-Adresse 192.168.178.1 wieder "ansurfen"</li>
	<li>Im Menü aus Punkt 4 ist der Haken bei "Use Router as DHCP Server" zu entfernen, da die FRITZ!Box bereits über DHCP die IP-Adressen vergibt.</li>
	<li>Unter Advanced -&gt; Wireless Setup nun noch "Enabled Wireless Access Point" und "Enabled SSID Broadcast" aktivieren.</li>
	<li>Unter Advanced -&gt; WAN Setup sollte man noch "Connect Automatically, as Required" abwählen.</li>
	<li>Nicht vergessen: Unter Setup -&gt; Wireless settings noch seine eigenen WLAN-Einstellungen vornehmen (SSID, Verschlüsselung, ...)</li>
</ol>
Das sollte auch schon alles gewesen sein. Den Rest kann man nach belieben konfigurieren und/oder damit herumbasteln. :-)

Netzwerkkabel abziehen, zurück an den "alten Switch". Jetzt mit einem zusätzlichen straight-through Kabel den Access-Point mit dem Switch verbinden und schon sollte man WLAN + Internet haben. Falls nicht, einfach nochmal kurz Strom abziehen. :-)

Es ist möglich, dass man in seinem alten Netzwerk plötzlich keine IP-Adresse auflösen kann. Dazu einfach die /etc/resolv.conf wiederherstellen oder mit 'echo "nameserver 192.168.178.1" &gt;&gt; /etc/resolv.conf' (bzw. die IP eures Router/Gateways) den entsprechenden Eintrag hinzufügen.

<span style="text-decoration: underline;">Tipp:</span>

Man kann den Router (MR814v2) mit der neueren Firmware des nächsthöheren Modells MR814v3 "updaten" um so z.B. zusätzlich WPA-Verschlüsselung freizuschalten. Ich hab das gemacht und bis jetzt funktioniert alles weiterhin wie gewohnt (allerdings auch erst 30 Minuten in Betrieb mit der neuen Firmware). Allerdings empfehle ich dringend, die letzte MR814v2 Firmware auf dem Rechner bereitzuhalten, im Falle es funktioniert nicht und/oder man hat keine Internet-Verbindung mehr.
