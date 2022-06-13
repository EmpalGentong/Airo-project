# AIRO PC Component and Article API

Used to retrieve PC Component and Article Data


## Deployment

To deploy this to Google Cloud, run:

```bash
  gcloud run deploy
```

Follow alongside instruction that is displayed on your command line screen.
Fill the gcloud prompts in as follows:

1. Source code location: Choose your project directory
2. Service name: Name your service that will be displayed later
3. Enable run.googleapis.com?: y
4. Specify a region: I suggest to use us-central1 since it's more stable
5. Enable artifactregistry.googleapis.com?: y
6. Continue?: y
7. Allow unauthenticated? y for now, since this is a project demo

## Documentation

[Documentation](https://documenter.getpostman.com/view/16014005/Uz5NiDCJ)

## Configuring SQL Database Connection to Cloud Run

1. Go to console.cloud.google.com > Cloud Run
2. Click your API
3. Click “Edit & Deploy New Revision”
4. Click the “Connections” tab
5. Click “Add Connection”
6. Select the database created earlier
7. And also click the “Enable Cloud SQL Admin API”
8. Click “Deploy”

This step creates a new container revision with these updated settings.

## Storing DB Credetials on Secret Manager

The container also does not currently have DB credentials. So, the current app can't retrieve data from Databse yet.

1. Go to console.cloud.google.com > Secrets Manager
2. Create 3 secrets with these names, whose values come from the .env file:
`DB_USER`
`DB_PASS`
`DB_NAME`

## Add Secret Manager Accessor Role to the Service Account
When you ran the deploy command earlier, GCP by default uses a service account as the user. Add Secret Manager Accessor Role to that Service Account.

1. Go to console.cloud.google.com > IAM & Admin
2. Edit the “Compute Engine/Service default service account” (This depends on the Cloud Run Service Account, the default should be this)
3. Click “Add Another Role”
4. Select “Secret Manager Secret Accessor” role
5. Save

## Redeploy

```bash
  gcloud run services update YOUR_SERVICE_NAME \
--add-cloudsql-instances=YOUR_INSTANCE_CONNECTION_NAME \
--update-env-vars=INSTANCE_CONNECTION_NAME=YOUR_INSTANCE_CONNECTION_NAME \
--update-secrets=DB_USER=DB_USER:latest \
--update-secrets=DB_PASS=DB_PASS:latest \
--update-secrets=DB_NAME=DB_NAME:latest
```

DB connectivity should work now. Enjoy!!

## Tech Stack

**Server:** Node.js, Express

**Database System:** MySQL (Cloud SQL)
