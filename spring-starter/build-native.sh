mvn --no-transfer-progress clean -Dmaven.test.skip=true -Pnative spring-boot:build-image

#docker build --no-cache -f Dockerfile.native -t spring-starter-native .

# docker run --name spring-starter-native -d -p 8080:8082 spring-starter-native

