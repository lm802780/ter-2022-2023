# Before building the container image run:
./mvnw --no-transfer-progress clean package -Dmaven.test.skip=true -Pnative

# Then, build the image with:
docker build --no-cache -f src/main/docker/Dockerfile.native-micro -t quarkus-starter-native .

# Then run the container using:
# docker run -i --rm -p 8080:8080 quarkus-starter-native
