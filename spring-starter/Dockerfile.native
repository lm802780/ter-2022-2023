# Dockerfile used to build the native image (usefull for Windows and MacOS).
# For Linux users, the build of the native image can be done without container.

FROM ghcr.io/graalvm/native-image:ol9-java17-22.3.0 AS builder

# Install tar and gzip to extract the Maven binaries
RUN microdnf update -y \
 && microdnf install -y --nodocs \
    tar \
    gzip \
 && microdnf clean all \
 && rm -rf /var/cache/yum

# Install Maven
# Source:
# 1) https://github.com/carlossg/docker-maven/blob/925e49a1d0986070208e3c06a11c41f8f2cada82/openjdk-17/Dockerfile
# 2) https://maven.apache.org/download.cgi
ARG USER_HOME_DIR="/root"
ARG MAVEN_DOWNLOAD_URL=https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.tar.gz

RUN mkdir -p /usr/share/maven /usr/share/maven/ref \
  && curl -fsSL -o /tmp/apache-maven.tar.gz ${MAVEN_DOWNLOAD_URL} \
  && tar -xzf /tmp/apache-maven.tar.gz -C /usr/share/maven --strip-components=1 \
  && rm -f /tmp/apache-maven.tar.gz \
  && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

ENV MAVEN_HOME /usr/share/maven
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"

# Set the working directory to /home/app
WORKDIR /build

# Copy the source code into the image for building
COPY . /build

# Build
RUN mvn --no-transfer-progress clean package -Dmaven.test.skip=true -Pnative

# The deployment Image
FROM docker.io/oraclelinux:9-slim

EXPOSE 8080

# Copy the native executable into the containers
COPY --from=builder /build/target/spring-starter .
ENTRYPOINT ["/spring-starter"]
