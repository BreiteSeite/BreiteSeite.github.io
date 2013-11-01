---
layout: post
title: Die Sache mit dem Owner (TComponent Ableitungen)
categories:
- Computer
tags:
- Delphi
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
Oft steht man vor der Frage: Welchen Owner übergeb ich jetzt beim Erzeugen meines Objekts? Viele von TComponent abgeleiteten Klassen bieten einem den AOwner: TObject Parameter beim Konstruktor an.
Übergibt man jetzt Self? Application? <strong>nil</strong>?


Der Owner bestimmt, wer das erstellte Objekt wieder freigibt. Bei Self ist das meistens die Form. Bei Application die Programminstanz ansich. Bei nil.... niemand!

Mein Grundsatz: Objekte, die ich dynamisch anlege, geb ich auch dynamisch wieder frei. Dies hat zudem auch den Vorteil, dass Zeit gespart wird. Denn wenn man Self oder Application übergibt, werden Intern noch verschiedene Sachen gemacht:

<pre lang="delphi">procedure TComponent.InsertComponent(AComponent: TComponent);
begin
  AComponent.ValidateContainer(Self);
  ValidateRename(AComponent, '', AComponent.FName);
  Insert(AComponent);
  AComponent.SetReference(True);
  if csDesigning in ComponentState then
    AComponent.SetDesigning(True);
  Notification(AComponent, opInsert);
end;</pre>

Dies verschluckt natürlich unnötige Zeit:
<img alt="" src="http://z.about.com/d/delphi/1/0/d/A/notificationimpact.gif" title="Creating objects with and without owners" class="alignnone" width="256" height="207" />

Der Zeitintensive Code hierbei ist die Notification-Funktion:
<pre lang="delphi">procedure TComponent.Notification(AComponent: TComponent; Operation: TOperation) ;
var
   j: Integer;
begin
   if (FFreeNotifies <> nil) and (Operation = opRemove) then
   begin
     FFreeNotifies.Remove(AComponent) ;
     if FFreeNotifies.Count = 0 then
     begin
       FFreeNotifies.Free;
       FFreeNotifies := nil;
     end;
   end;
   if FComponents <> nil then
     for j := 0 to FComponents.Count - 1 do
       TComponent(FComponents[j]).Notification(AComponent, Operation) ;
end;</pre>

Hier wird durch alle Komponenten des Owners und deren Unterkomponenten durchiteriert und wieder Notification gerufen. Ebenso beim Zerstören des Objekts (Destruktor).
Auf Grund dieser Tatsache ist es meist empfehlenswerter, Application statt Self zu übergeben, da Self meist das Form ist was mehrere Objekte enthält. Application enthält i.d.R. sehr wenige (z.B: nur auto-created Formulare) Objekte.
Am besten ist natürlich immernoch nil zu übergeben und mit .Free das ganze wieder freizugeben (verhindert auch doppeltes Freigeben, also wenn man das Objekt selbst schon zerstört hat, der Owner es aber noch einmal zerstören möchte).

Informationen und Grafiken: <a href="http://delphi.about.com/od/kbcurt/ss/dynamiccreateno.htm">delphi.about.com</a>
