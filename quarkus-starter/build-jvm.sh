# Before building the container image run:
./mvnw --no-transfer-progress clean package -Dmaven.test.skip=true

# Then, build the image with:
docker build -f src/main/docker/Dockerfile.jvm -t quarkus-starter-jvm .

# Then run the container using:
# docker run -i --rm -p 8080:8081 quarkus-starter-jvm
