# TER 2022-2023

## Étudiant : Mickael LAMASUTA

## Installation

### GraalVM

#### Étape 1 : télécharger GraalVM

https://github.com/graalvm/graalvm-ce-builds/releases

Exemple :

```bash
wget https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-22.3.0/graalvm-ce-java17-linux-amd64-22.3.0.tar.gz
```

#### Étape 2 : extraire l'archive

```bash
tar -xzf graalvm-ce-java<version>-linux-amd64-<version>.tar.gz
```

#### Étape 3 : ajouter GraalVM au PATH

```bash
export PATH=/path/to/<graalvm>/bin:$PATH
```

#### Étape 4 : définir le JAVA_HOME

```bash
export JAVA_HOME=/path/to/<graalvm>
```

## Configuration Kubernetes


| Image                  | URL                         |
|------------------------|-----------------------------|
| quarkus-starter-native | http://localhost:8080/hello |
| quarkus-starter-jvm    | http://localhost:8081/hello |
| spring-starter-native  | http://localhost:8082/hello |
| spring-starter-jvm     | http://localhost:8083/hello |
