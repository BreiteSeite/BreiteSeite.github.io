---
layout: post
title: Anonymen Zugang auf Samba-Server für Windows-XP
categories:
- Computer
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
Wenn man einen Linux Samba-Server hat und mit Windows XP auf den Host zugreift (\\host), so wird man meist von einem Passwort-Prompt abgehalten, obwohl man Shares hat, welche Gäste einsehen dürfen (guest ok = yes bzw. public = yes).

Der Eintrag:
<pre lang="ini">map to guest = Bad User</pre>
... in eurer Samba-Config sollte helfen, dass anstelle eines Passwort-Promptes eure Freigaben erscheinen.

Danach den Samba-Server natürlich noch (neu)starten:
<pre lang="bash">/etc/init.d/samba restart</pre>
