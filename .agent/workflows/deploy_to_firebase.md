---
description: How to deploy a Vite React application to Firebase Hosting
---

# Deploy to Firebase Hosting

This workflow guides you through deploying your Vite application to Firebase.

## Prerequisites
1.  You must have a Google Account.
2.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project (e.g., "skia-automated-solutions").

## Steps

1.  **Install Firebase Tools** (if not already installed)
    ```bash
    npm install -g firebase-tools
    ```
    *Alternatively, you can use `npx firebase-tools` for one-off commands, but global install is recommended.*

2.  **Login to Firebase**
    ```bash
    firebase login
    ```
    *This will open a browser window. Allow access to your Google account.*

3.  **Initialize Project**
    Run this command in your project root:
    ```bash
    firebase init hosting
    ```
    **Select the following options:**
    *   **Are you ready to proceed?** -> `Yes`
    *   **Please select an option:** -> `Use an existing project` (select the one you created)
    *   **What do you want to use as your public directory?** -> `dist`
        *   *Note: Vite builds to `dist` by default, not `public`.*
    *   **Configure as a single-page app (rewrite all urls to /index.html)?** -> `Yes`
    *   **Set up automatic builds and deploys with GitHub?** -> `No` (or Yes if you want to set up Actions now)
    *   **File dist/index.html already exists. Overwrite?** -> `No` (IMPORTANT: Do not overwrite if you have a build, but usually it's fine to say No and let it use the generated one later).

4.  **Build the Project**
    Create the production build:
    ```bash
    npm run build
    ```

5.  **Deploy**
    Upload the `dist` folder to Firebase:
    ```bash
    firebase deploy --only hosting
    ```

6.  **Verify**
    The command will output a `Hosting URL`. Click it to view your live site.
