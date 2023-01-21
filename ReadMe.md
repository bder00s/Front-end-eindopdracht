
# Installatiehandleiding MovieMood



![screenshot app](https://user-images.githubusercontent.com/105774363/204863942-61a89569-acd6-4195-b9d6-449c832625f2.jpg)
### Inleiding

Deze app maakt het mogelijk om op basis van je stemming een bijpassende film op te vragen!
De ingelogde gebruiker beantwoord drie vragen over zijn/haar stemming en aan de hand daarvan wordt er een bijpassende (of juist tegenovergestelde - wanneer gebruiker zijn/haar stemming wil veranderen) filmtitel gegenereert en bijbehorende info opgehaald in de API.

De app bevat zowel een loginfunctie als registratiefunctie. Twee aanvullende functies, zoals het delen van het resultaat via een link en het bekijken van eerdere resultaten zijn nog in ontwikkeling. 

### Benodigdheden
- Een API key voor het opvragen van de filminformatie. Deze staat vermeld in het .env bestand in het project.  key -> 955bd41a
- Node.js (om via NPM dependencies te kunnen installeren) 
- Dependencies waar dit project gebruik van 
maakt, zijn o.a.
	- react: 18.2.0
	- react-dom: 18.2.0
	- react-router-dom: 5.2.0
	- axios: 1.1.3 (voor gebruik van de API)
	Deze worden geïnstalleerd door de stappen hieronder te volgen.

### Stappenplan/accounts
- Start het project op en installeer de benodigde node modules/dependencies met `npm install`. 
- Wanneer dit klaar is, start je de app met `npm start`.
- De app wordt uitgevoerd op http://localhost:3000/ . Hier kan je MovieMood openen.
- Eerst zal je een account moeten registreren. Klik op "registreren". Zorg bij het registreren dat je een geldig e-mailadres (incl. @) invoert. 	   Gebruikersnaam en wachtwoord moeten minimaal 6 tekens lang zijn. 
- Log daarna in met je zojuist aangemaakte account.
- Via de navigatiebalk en het hamburger menu kan je navigeren naar verschillende pagina's en eventueel uitloggen. 
- Na het inloggen word je doorgestuurd naar de startpagina, vanaf waar je de drie vragen kan beantwoorden en daarna je aanbevolen film te zien krijgt.
- Wanneer je niet tevreden bent over de film kan je via de "retry" button je antwoorden veranderen en een nieuwe film opvragen. 
- Wanneer je het resultaat uitgebreider wil bekijken of delen, klik je op de "share" button onder het filmresultaat. Je krijgt de betreffende IMDB pagina te zien. 
- Als je het resultaat op wil slaan, klik je op de "bewaar resultaat" knop.
- In de Movie History pagina (te bereiken via het Hamburger menu) kan je je laatst opgeslagen filmresultaat (en bijbehorende IMDB link) terugzien. 

Link naar Github repository: 
https://github.com/bder00s/Front-end-eindopdracht


