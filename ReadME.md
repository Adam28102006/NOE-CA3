# Campus Companion Web App
This is The CA3 Web app, 
---

## What You Need To run

Make sure you have these installed on your computer:

1. **Node.js (version 18 or newer)**
   Download here: https://nodejs.org/

2. **npm (comes with Node.js)**
   To check if it is installed, open a terminal and type:

   ```
   node -v
   npm -v
   ```

If both show a version number, it should be working.

If you are unable to download NPM, You should be able to run it on Github Codespace.

---

##  Download the Project

### (ZIP download)

1. Download the project as a ZIP file
2. Right-click the ZIP file
3. Click **"Extract All"**
4. Open the extracted folder

Alternitivly-
```
git clone (the Github Repo)
cd campus-companion
```

---

## Install Dependencies

Open a terminal inside the project folder and run npm install

Wait until it finishes (this may take a few minutes).

---

## To Run 

In the same terminal, run:

```
npm run dev
```

You should see something like:

```
Local: http://localhost:3000
```



Open this in browser and you should now see the app running.

---

## Errors that i found fixes to.
### Problem: "npm not found"

* Install Node.js again from https://nodejs.org/

### Problem: Page won’t load

* Make sure the terminal is still running
* Check you typed:

  ```
  npm run dev
  ```

### Problem: Errors during install

Try:

```
npm install --force
```

---



This project only contains fictional data, stored in the data files.
