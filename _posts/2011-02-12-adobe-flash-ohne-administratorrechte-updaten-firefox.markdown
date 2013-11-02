---
layout: post
title: Adobe Flash ohne Administratorrechte updaten (Firefox)
---
Die größten Bedenken bezgl. der Sicherheit des Firefox-Browsers habe ich persönlich ja nicht wegen Firefox selbst, sondern wegen dem Flash-Plugin von Adobe. Da gab's ja schon des öfteren die <a href="http://www.heise.de/security/suche/?q=adobe+flash+l%C3%BCcke+-shockwave+-reader+-acrobat&amp;search_submit=Suchen&amp;rm=search&amp;channel=security">ein oder andere Meldung bezgl. Sicherheitslücken</a>.



Daher rät so ziemlich jeder IT-Administrator dazu, die Software auf dem Rechner immer aktuell zu halten. Gleichzeit verbieten viele Admins Installation oder Updates von Software auf dem Rechner (daher greifen immer mehr zu sog. <a href="http://portableapps.com/">PortableApps</a>, welche sich auch ohne Administratorrechte in einen Ordner installieren lassen).

Mozilla Firefox reagiert schon vorbildlich, und hält im Falle einer verwundbaren Flash-Plugin-Version mit einer großen, roten Seite dazu an, das Plugin zu aktualisieren.

Tamil hat im Opera-Blog eine sehr schöne <a href="http://my.opera.com/Tamil/blog/how-to-install-flash-player">Anleitung</a> geschrieben, wie man an die <a href="http://my.opera.com/Tamil/homes/Softwares/NPSWF32.zip">aktuelle DLL vom Flash-Player</a> gelangen kann.

Danach muss man die DLL nur noch in Firefox' Plugin-Verzeichnis verschieben. Dieser ist &lt;Pfad zu Firefox&gt;/plugins. Falls schon eine Version vorhanden ist, kann diese überschrieben werden. Funktioniert auch wunderbar mit der PortableApps-Version des Firefox. Dort ist der Pfad dann &lt;Pfad zur PortableApps-Installation&gt;/app/plugins

Wer Administratorrechte besitzt, kann die DLL auch direkt in C:\Windows\System32\Macromed\Flash überschreiben.
