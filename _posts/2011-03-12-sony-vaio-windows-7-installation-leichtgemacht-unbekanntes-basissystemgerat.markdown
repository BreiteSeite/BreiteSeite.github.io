---
layout: post
title: 'Sony Vaio: Windows 7 Installation leichtgemacht (unbekanntes Basissystemgerät)'
categories:
- Computer
tags:
- sony
- vaio
- windows 7
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  robotsmeta: index,follow
---
Wer Windows 7 auf einem Sony Vaio Notebook installiert, der sollte sich auf eine anstrengende Treibersuche vorbereiten. Speziell beim Modell VGN-NW11S bin ich einen Eintrag im Geräte Manager gestolpert, der sich "<strong>Basissystemgerät</strong>" schimpft. Dazu einen Treiber zu finden ist schwer. Also nach der Hardware-ID gesucht:
<pre><strong>PCI\VEN_1180&amp;DEV_0592&amp;SUBSYS_9056104D&amp;REV_12</strong></pre>


Da stellte sich heraus, dass es der Kartenleser war, welcher von Windows nicht erkannt wurde. Auf dem <a href="ftp://ftp.vaio-link.com/PUB/VAIO/ORIGINAL/">Sony-FTP</a> gibt es auch nicht gerade wenig Treiber für das Speicherkartenlesegerät. Aber nach ein wenig suchen, habe ich dann zu der o.g. Hardware-ID den richtigen Treiber gefunden:
<a href="ftp://ftp.vaio-link.com/PUB/VAIO/ORIGINAL/MEMORY_CARD_READER_WRITER_DRIVER_RICOH_MS_6.3X64_J_6.3.0.61.ZIP">MEMORY_CARD_READER_WRITER_DRIVER_RICOH_MS_6.3X64_J_6.3.0.61.ZIP</a>

Damit läuft der Kartenleser wieder und das Basissystemgerät verschwindet aus eurem Geräte-Manager.

Allgemeine gute Vorgehensweisen zur Windows 7 Installation auf Sony Laptops findet sich auf der Website <a href="http://www.notebookforum.at/sony-vaio-forum/36690-kompletter-windows-7-installations-guide-gilt-auch-fuer-vista.html">www.notebookforum.at</a>. Da findet Ihr auch die Voraussetzungen für das Installieren der <strong>Fn-Tasten</strong> (dafür ist der Vaio Event Service erforderlich, welcher aber die Installation von "Sony Shared Library" und "Vaio Control Center" voraussetzt (meldet der Installer auch nochmal).

P.S.: Ich empfehle immer direkt die aktuellste Version vom Sony FTP zu installieren.
