**BigFridge**
----
**Usage**

Make sure you have Node.js and npm installed in your computer, and then run these commands:

```
$ git clone https://github.com/group-project-w1-BigFridge/server.git
$ cd server
```

Make a .env file with the same parameters in .env.example file
```
$ touch .env
```
set the values of with your preferences

Run the server with these commands:
```
$ npm install
$ npm run dev
```

**POST /recipes**
* **URL**

  `/recipes`

* **Method:**

  `POST` 
  
* **Data Params**
 
   **body:** `'ingredients' (string)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content Example:** 
    ```
    [ 
	    { 
		    id: 1009580,
		    title: 'How to Make Shredded Chicken in the Instant Pot',
		    image: 'https://spoonacular.com/recipeImages/1009580-312x231.png',
		    imageType: 'png',
		    usedIngredientCount: 1,
		    missedIngredientCount: 0,
		    missedIngredients: [],
		    usedIngredients: [ [Object] ],
		    unusedIngredients: [],
		    likes: 1 
	    },
	    { 
		    id: 944490,
		    title: 'Slow Cooker Rotisserie Chicken',
		    image: 'https://spoonacular.com/recipeImages/944490-312x231.jpg',
		    imageType: 'jpg',
		    usedIngredientCount: 1,
		    missedIngredientCount: 1,
		    missedIngredients: [ [Object] ],
		    usedIngredients: [ [Object] ],
		    unusedIngredients: [],
		    likes: 246 
	    }
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: 'Please fill the form' }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**POST /recipes/images**
* **URL**

  `/recipes/images`

* **Method:**

  `POST` 
  
* **Data Params**
 
   **body:** `'recipe' (string)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content Example:** 
    ```
    {
	    "images_src":  [
		    "https://picky-palate.com/wp-content/uploads/2015/10/Oatmeal-Walnut-Banana-Caramel-Pancakes-22.jpg",
		    "https://www.averiecooks.com/wp-content/uploads/2018/09/sheetpanpancakes-7.jpg"
	    ]
	}
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**GET /recipes/youtube/:search**
* **URL**

  `/recipes/youtube/:search`

* **Method:**

  `GET` 
  
* **Data Params**
 
   **params:** `'search' (string)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content Example:** 
    ```
    {
	    "kind": "youtube#searchListResponse",
	    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/SOwv_DiXwGezM2E-G2YQKYUPlOQ\"",
	    "nextPageToken": "CAUQAA",
	    "regionCode": "ID",
	    "pageInfo": {
		    "totalResults": 1000000,
		    "resultsPerPage": 5
		},
		"items": 
		[
			{
				"kind": "youtube#searchResult",
				"etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/01Ah91NcMzNGqeBzEe5a6trLyUc\"",
				"id": {
				"kind": "youtube#channel",
				"channelId": "UC3yFi2eTanFWEE3_ln3XoaQ"
	............................................and more
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`

**GET /recipes/:id**
* **URL**

  `/recipes/:id`

* **Method:**

  `GET` 
  
* **Data Params**
 
   **params:** `'id' (string)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content Example:** 
    ```
    {
    "id": 716429,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    "imageType": "jpg",
    "servings": 2,
    "readyInMinutes": 45,
    "license": "CC BY-SA 3.0",
	............................................and more
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ message: "Internal Server Error" }`
