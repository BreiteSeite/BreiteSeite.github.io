---
layout: post
title: Archlinux in OpenVZ installieren
---
Wer einen vServer auf Basis von Archlinux besitzt (proPlay.de bietet bspw. ein Image für ArchLinux an), wird nach dem ersten Systemupdate über die "<strong>FATAL: Kernel too old</strong>" Meldung stoßen, welche beim Aufruf jeder binary erscheint.

Dies passiert, wenn man das Paket glibc aktualisiert. Um den Fehler zu verhindern, muss von <a href="http://dev.archlinux.org/~ibiru/">ibiru</a> eine auf die <a href="http://dev.archlinux.org/~ibiru/openvz/glibc-vps/">alte Kernelversion vorkompilierte Version von glibc</a> installiert werden.



Für 64-Bit Systeme sieht das bspw. wie folgt aus (unter root-Benutzer auszuführen):
{% highlight bash %}
[root@host ~] wget http://dev.archlinux.org/~ibiru/openvz/glibc-vps/x86_64/glibc-2.14-99-x86_64.pkg.tar.xz
[root@host ~] pacman -U glibc-2.14-99-x86_64.pkg.tar.xz
{% endhighlight %}
Das ganze muss natürlich <strong>vor</strong> dem Systemupdate passieren, danach quittiert pacman sonst den Dienst mit oben besagter "FATAL: Kernel too old"-Meldung.

Um zukünftig gesondert vor der Aktualisierung vom glibc-Paket gewarnt zu werden, kann man folgenden Eintrag in die /etc/pacman.conf-Datei hinterlegen:
<pre>IgnorePkg   = glibc</pre>
