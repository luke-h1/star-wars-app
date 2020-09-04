## API-RESPONSE: 
```
{
	"name": "Luke Skywalker",

	"height": "172",

	"mass": "77",

	"hair_color": "blond",

	"skin_color": "fair",

	"eye_color": "blue",

	"birth_year": "19BBY",

	"gender": "male",


films: Array(4)
0: "http://swapi.dev/api/films/1/"
1: "http://swapi.dev/api/films/2/"
2: "http://swapi.dev/api/films/3/"
3: "http://swapi.dev/api/films/6/"

	"homeworld": "http://swapi.dev/api/planets/1/", // returns obj with stats such as population etc 



  Make films into ul 
	"films": [
		"http://swapi.dev/api/films/1/", // returns obj with title of film 
		"http://swapi.dev/api/films/2/",
		"http://swapi.dev/api/films/3/",
		"http://swapi.dev/api/films/6/"
	],

	"species": [],


<hr>
<br>




make into ul 
// returns obj with crew, name, model, manufactuer 
	"vehicles": [
		"http://swapi.dev/api/vehicles/14/",
		"http://swapi.dev/api/vehicles/30/"
	],

	"starships": [
		"http://swapi.dev/api/starships/12/",
		"http://swapi.dev/api/starships/22/"
	],


	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "http://swapi.dev/api/people/1/"
}
```




## ROUTES + PARAMS API: 

CHARACTER ROUTE: 
````
https://swapi.dev/api/people/?search=CHARACTER-HERE


````