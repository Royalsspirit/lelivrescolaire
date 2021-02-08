# Project Title

Little project with CRUD table

## Getting Started

The first part of interview is available [here](https://miro.com/app/board/o9J_lV40MJ4=/)

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project currently run on Ubuntu 18.04.4 LTS x86_64 with 12.18.3 version of node and 6.14.9 of npm

### Installing

Be careful to be compliant with prerequisites.

To install nodejs, visite officiel [website](https://nodejs.org/en/)

Prefer a node version manager like [nvm](https://github.com/nvm-sh/nvm)

## Deployment

Before all, install dependencies of frontend app:
```
yarn install
```
also install server dependencies:
```
yarn --cwd /server
```
then build production sources that are going to be exposed by the server: 
```
yarn build
```
finally, run the custom server (there is a little server proxy to expose sources)

```
yarn prod
```

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 
