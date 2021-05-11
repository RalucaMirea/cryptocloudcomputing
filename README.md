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

De asemenea, cum primele 2 instrumente financiare din prezent sunt acțiunile si cryptomonedele, am ales să analizez și modulul de cryptomonede pentru a facilita accesul la informații. Monedele sunt din ce în ce mai multe și având în vedere frecvența cu care apar, am dorit să afișez un top cu cele mai valoroase dintre acestea.

## Descrierea API-uri
Stock Symbol este un API utilizat pentru furnizarea simbolurilor referitoare la acțiunile de la bursa din America. - https://finnhub.io/

Cryptocurrency&Bitcoin este un API utilizat pentru prezentarea top 15 cryptomonede. - https://nomics.com/docs/

## Flux de date
În momentul în care utilizatorul accesează pagina de destinație, va apărea direct ecranul în care urmează să fie prezentate informațiile dorite. În partea dreaptă a ecranului avem deja Top 15 cryptomonede, acesta fiind niște informații statice, iar în partea stângă avem un buton de search intitualt Symbol Name. Acesta este un buton de tip drop-down, în care apar simbolurile tuturor acțiunilor de la bursa din America. Pentru ca nu am vrut să mă limitez la anumite acțiuni, API ul folosit conține toate simbolurile acțiunilor de la bursa din America în număr de 25000. 

În momentul în care utilizatorul alege simbolul dorit se vor preîncărca toate știrile din ultimele 5 zile, care au legătură cu acțiunea aleasă și vor fi afișate titlurile acestor articole. De asemenea, pentru a oferi și mai multe informații, utilizatorul are posibilitatea de a accesa articolul respectiv din tabul More information, fiind redireționat așadar către site-ul articolului selectat.

# Preluarea datelor de la ambele API-uri
În momentul în care utilizatorul intră pe aplicație se iau toate simbolurile și topul de cryptomonede și când utilizatorul alege un simbol se face requestul către știri și se populează tabelul. În momentul în care utilizatorul schimbă simbolul, se reface procesul și se genereaza știrile pentru noul simbol ales.

- Stock Market API - are foarte multe endpointuri difrite. Cel pe care l-am folost este cel de News și are nevoie de parametri în URL cu simbolurile acțiunii și data de start și de final care să caute știri. Acest API întoarce știri care au un headline și un link folosite în tabel. Am ales acțiunile de la bursa din America după cum se poate observa mai jos:

![image2](https://user-images.githubusercontent.com/83783825/117731468-d7787900-b1f6-11eb-99a1-de63c8914463.PNG)

În cadrul acestei funcții putem face foarte ușor modificări, requestul folosit putând returna și un alt parametru dat după cum este prezentat mai jos:
- Am modificat US (US exchages(NYSE, Nasdaq)), din cadrul requestului, cu HE (NASDAQ OMX HELSINKI LTD) 

![image4](https://user-images.githubusercontent.com/83783825/117735338-ed3d6c80-b1fd-11eb-96bd-3a5b2d8a7725.PNG)

- Am salvat, iar response-ul a fost urmatorul:
![image6](https://user-images.githubusercontent.com/83783825/117735943-36da8700-b1ff-11eb-8c85-70e3dd5e168b.PNG)
![image5](https://user-images.githubusercontent.com/83783825/117735949-39d57780-b1ff-11eb-9ab6-4f0a939b8e32.PNG)

- Cryptocurrency API

![image3](https://user-images.githubusercontent.com/83783825/117731471-db0c0000-b1f6-11eb-967a-a8dff6784c0f.PNG)

Response-ul primit de la request conține toate monedele existente, însă pentru expunerea datelor într-un format simplu și ușor de citit, am ales să sortez monedele și să fie salvate numai primele 15 în vectorul care este afișat mai sus.

- De asemenea, titlul este unul dinamic și așa cum am făcut mai sus la API-ul precedent și aici requestul folosit poate returna un alt parametru dat, în cazul de față un alt top. În continuare am înlocuit 15 cu 10 în listă și am obținut următorul rezultat:

![image7](https://user-images.githubusercontent.com/83783825/117738293-5e801e00-b204-11eb-8672-b34c24341a0f.PNG)

## Publicarea aplicației

Aplicația a fost aplicată folosind Amazon Web Service și poate fi accesată aici: http://stockmarketcloudcomputing.s3-website.eu-central-1.amazonaws.com/





