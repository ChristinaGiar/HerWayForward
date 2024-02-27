# Her Way Forward

## Clone the repo
Open a terminal, like Git Bash or CMD and paste the command
```bash
git clone https://github.com/ChristinaGiar/HerWayForward.git
```

View the project: Open an IDE, like VS code, in the folder under which the project has been created 

<br>
<br>

## 1 | Connection with a Posts API
API endpoint for Posts: `https://jsonplaceholder.typicode.com/posts`

#### Start the project locally

Under directory “01-posts-api/bff”:
1) Install dependencies (run ONLY the 1st time)
```
npm install
```
2) Start the dev server
```
npm start
```
Open browser to `http://localhost:3001/content` url.

Under directory “01-posts-api/client”:
1) Install dependencies (run ONLY the 1st time)
```
npm install
```
2) Start the dev server
```
npm start
```
Open browser to `http://localhost:5173/` url.

!!!Press `Ctrl/Cmd + C` to terminate a terminal.

<br>
<br>

## Task 1 | Connection with a commerce API
According to the given implementation for posts, try to do the same for products that we receive from a commerce API. 
Endpoint to call: `https://fakestoreapi.com/products`

Requirements: 3 products should be appeared frontend side.

>[!NOTE]
>- The logic is similar to the Posts API
>- Hit the URL to the browser to check the format of the data
>- No code needs to be written on the frontend, just uncomment the commented section

**Starter project:** `01-posts-api`	**Final project:** `02-products-api`

<br>
<br>

## 2 | Connection with an Enterprise CMS

### Start & Explore the [WebSight](https://www.websight.io/) CMS
1. Open Docker Desktop

2. Run in a terminal
```bash
docker run -p 8080:8080 --name websight-cms --rm --mount source=segment-store-repository,target=/websight/launcher/repository europe-docker.pkg.dev/websight-io/public/websight-cms-starter:1.23.0
```
Τhe instance has been initiated successfully and CMS is accessible at `http://localhost:8080/`. 
### Termination
On the dashboard of Docker Desktop click on `Stop` to stop the container from running.


3.   Sign in with the credentials:

      Username: `wsadmin` 
      Password: `wsadmin`

4. e.g. Go to the **"Luna – custom code project"  >  "Catalog Page"**

<br>

### Get page content

1. Inside the page, click **“View published”**
2. At the opened link, replace `.html?wcmmode=preview` with `.infinity.json`. 

Therefore, via the URL [http://localhost:8080/content/luna/pages/Catalog.infinity.json](http://localhost:8080/content/luna/pages/Catalog.infinity.json) the page content is retrieved in JSON format and ready to be used in our app. 

<br>

### Images retrieval
The images in the JSON, include just a path, thus to be retrieved by the app, **the localhost domain should be added**:

e.g. http://localhost:8080/content/luna/assets/images/catalog/Diamond Hoop Single-Row Bangle.png

<br>
<br>

### Task 2 | Creation of the banner
Select one title and one image from the **“Catalog”** page of CMS [http://localhost:8080/content/luna/pages/Catalog.html](http://localhost:8080/content/luna/pages/Catalog.html) and populate the banner of the app.

>[!NOTE]
>- Hit the URL to the browser (with “.infinity.json” extension) to check the format of the data
>- No code needs to be written on the frontend, just uncomment the commented section
>- In case of issues with the CMS, don’t worry, we got you! :wink:
>You could use the mocked data we have under `bff/catalog-content.json` and replace the **line 81** of `bff/routes/content.js`:
>
>   **const cmsData = await getCmsData();** with **const cmsData = await getCmsData(true);**

**Starter project:** `03-products-cms`		**Final project:** `04-banner-cms`

<br>

#### Start the project locally

Under directory “03-products-cms/bff”:
1) Install dependencies (run ONLY the 1st time)
```
npm install
```
2) Start the dev server
```
npm start
```
Open browser to `http://localhost:3001/content` url.

Under directory “03-products-cms/client”:
1) Install dependencies (run ONLY the 1st time)
```
npm install
```
2) Start the dev server
```
npm start
```
Open browser to `http://localhost:5173/` url.

!!!Press `Ctrl/Cmd + C` to terminate a terminal.