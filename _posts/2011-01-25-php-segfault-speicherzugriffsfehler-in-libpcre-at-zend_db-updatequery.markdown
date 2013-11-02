---
layout: post
title: php segfault (Speicherzugriffsfehler) in libpcre at Zend_Db update/query
---
Wer mithilfe von <a href="http://framework.zend.com/manual/de/zend.db.table.html#zend.db.table.update">Zend_Db_Statement</a> versucht einen großen Datensatz in der Datenbank zu aktualisieren:
<pre lang="php">$db->update($data, $where);</pre>
der stolpert unter Umständen über einen Speicherzugriffsfehler, welcher die ganze PHP Instanz abstürzen lässt. Bei CLI-Anwendungen steht dann einfach auf der Konsole "Speicherzugriffsfehler" und im Systemlog (dmesg)
<pre lang="cli">php5 segfault [...] in libpcre</pre>
Bei Zend ist dieser Bug seit Version 1.6.2 bekannt und im Bug <a href="http://framework.zend.com/issues/browse/ZF-5063">#ZF-5063</a> gefixt. Leider ist dort der Fix nur als <a href="http://framework.zend.com/issues/secure/attachment/12241/ZF-5063.patch">Patch</a> angehangen. In der aktuellen Version, scheint der Bug noch nicht behoben/integriert zu sein. Allerdings hilft euch dieser Patch mit großer Wahrscheinlichkeit weiter.

Das Problem hat mich einige Stunden beschäftigt.
