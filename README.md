[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) 
[![Greenkeeper badge](https://badges.greenkeeper.io/yurikrupniktools/client-apps.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/yurikrupniktools/client-apps.svg?style=svg)](https://circleci.com/gh/yurikrupniktools/client-apps)
[![codecov](https://codecov.io/gh/yurikrupniktools/client-apps/branch/master/graph/badge.svg)](https://codecov.io/gh/yurikrupniktools/client-apps)
[![dependencies Status](https://david-dm.org/yurikrupniktools/client-apps/status.svg)](https://david-dm.org/yurikrupniktools/client-apps)
[![devDependencies Status](https://david-dm.org/yurikrupniktools/client-apps/dev-status.svg)](https://david-dm.org/yurikrupniktools/client-apps?type=dev)

## Multiple applications in a monorepo.

### Run dev on local machine

Run mongodb instance using docker 
```
npm run start:mongo
```

Install mono-repo dependencies
```
npm i
```

Install packages dependencies
```
npm run pi
```

Build web servers with ejs injected with webpack bundle result, needed for ssr.
```
npm run prepare:ejs
```

Sub link packages
```
npm run bootstrap
```

Start all services.
```
npm start
```

Browser with all FE applications will open.

### Happy development

# usefull commands

Install packages scoped
```
npx lerna exec --scope @krupnik/webserver1 -- npm i -S morgan
```

Run package command 
```
npx lerna run --stream --scope @krupnik/service1 start
```

docker copy
```$xslt
docker cp builds:app/packages/service1/dist ./packages/service1       
```

local test comoponents
```
npx lerna exec --scope @krupnik/components -- npm run test -- --coverage
```

add local package, pre publish
```
npx lerna --scope=@krupnik/webserver1 add  @krupnik/list 
```

run coomands with ingnored modules
```
npm run build -- --ignore @krupnik/fe-docs
```

tags
```markdown
docker tag yurikrupnik/client-apps_lerna yurikrupnik/client-apps_lerna:1.0.0
docker push yurikrupnik/client-apps_lerna
```

### Cloud

Before Publish enable cloudresourcemanager api and  app engine admin api


## add I am

```$xslt
gcloud iam service-accounts create [NAME] --display-name "My Service Account"
```

## set premissiosn
``` 
gcloud projects add-iam-policy-binding [PROJECT_ID] --member "serviceAccount:[NAME]@[PROJECT_ID].iam.gserviceaccount.com" --role "roles/owner"
```

## geneate file-key
```$xslt
gcloud iam service-accounts keys create [FILE_NAME].json --iam-account [NAME]@[PROJECT_ID].iam.gserviceaccount.com
```


## activate-service account
```$xslt
gcloud auth activate-service-account ci-automated-cd@client-apps-monorepo.iam.gserviceaccount.com  --key-file=ci-auto.json
```
