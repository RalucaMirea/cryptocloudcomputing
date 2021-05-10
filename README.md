# Stock Market and Cypto Dashboard

![image1 1](https://user-images.githubusercontent.com/83783825/117729933-3ee0f980-b1f4-11eb-9197-5b6b81d3c107.jpg)

## Introducere

Aplicația creată este o aplicație web dezvoltată sub forma unui dashboard, ce are ca scop facilitarea găsirii informațiilor despre US stock market și cryptomonede, în vederea analizării ulterioare a evoluției anumitor acțiuni.

Notă: Înainte de a continua prezentarea aplicației trebuie menționate câteva lucruri despre CORS și cum acesta împiedică API-ul legat de Cryptomonede să funcționeze în AWS. Requestul care se realizează este către un endpoint (în cazul de față către API-ul de Cryptomonede) care nu permite accesarea acestuia în alt browser. Pentru folosirea acestuia și în AWS erau nevoie de aprobări din partea celor de la nomics.com, însă pentru a nu întâmpina dificultăți, am ales să hostez aplicația fără aprobare, dezvoltarea acesteia fiind prezentată în video cu precădere pe localhost.

Rularea aplicației pe localhost funcționează conform așeptărilor, pentru că acesta este whitelisted pentru endpointul menționat anterior.

## Descrierea problemei
Aplicația creată își propune să faciliteze accesul la ultimele noutăți cu privire la bursa americană care are un autocomplete cu simboluri, oferind de asemenea posibilitatea urmăririi îndeaproape a top 15 cryptomonede.

Pentru a prezenta utilitatea practică a aplicației create voi prezenta în continuare motivele pentru care am ales crearea dashboardului în această formă și cum poate fi utilizată.

Cum bursa de valori americană se bucură de un mare interes și o mare atenție din partea investitorilor din lumea întreagă, deoarece listează cele mai importante companii americane cu cea mai mare capitalizare și numeroase companii globale, am încercat ca prin aplicația creată să facilitez urmărirea știrilor din ultimele 5 zile legate de anumite burse. Astfel, filtrarea conținutului se realizează prin alegerea dintr-un dropdown a unui simbol, iar după selectarea acestuia, vor apărea știrile din ultimele 5 zile pentru acțiunea selectată.

 De asemenea, piața bursieră se referă la piețele publice care există pentru emiterea, cumpărarea și vânzarea acțiunilor care se tranzacționează la bursă. Acțiunile reprezintă proprietatea fracțională într-o companie, iar piața de valori este un loc în care investitorii pot cumpăra și vinde proprietatea asupra acestor active investibile. O piață de valori care funcționează eficient este considerată critică pentru dezvoltarea economică, deoarece oferă companiilor capacitatea de a accesa rapid capitalul publicului. Datorită interesului mare pentru acestea și evoluția cryptomonedelor, am ales să facilitez urmarirea acestora prin implementarea API-ului care prezintă top 15 cryptomonede.

## Descrierea API-uri
Stock Symbol este un API utilizat pentru furnizarea simbolurilor referitoare la acțiunile de la bursa din America.
Cryptocurrency&Bitcoin este un API utilizat pentru prezentarea top 15 cryptomonede.

## Flux de date
În momentul în care utilizatorul accesează pagina de destinație, va apărea direct ecranul în care urmează să fie prezentate informațiile dorite. În partea dreaptă a ecranului avem deja Top 15 cryptomonede, acesta fiind niște informații statice, iar în partea stângă avem un buton de search intitualt Symbol Name. Acesta este un buton de tip drop-down, în care apar simbolurile tuturor acțiunilor de la bursa din America. 

În momentul în care utilizatorul alege simbolul dorit se vor preîncărca toate știrile din ultimele 5 zile, care au legătură cu acțiunea aleasă și vor fi afișate titlurile acestor articole. De asemenea, pentru a oferi și mai multe informații, utilizatorul are posibilitatea de a accesa articolul respectiv din tabul More information, fiind redireționat așadar către site-ul articolului selectat.

## Preluarea datelor de la ambele API-uri se face în felul urmator:
- Stock Market API

![image2](https://user-images.githubusercontent.com/83783825/117731468-d7787900-b1f6-11eb-99a1-de63c8914463.PNG)

- Cryptocurrency API

![image3](https://user-images.githubusercontent.com/83783825/117731471-db0c0000-b1f6-11eb-967a-a8dff6784c0f.PNG)





