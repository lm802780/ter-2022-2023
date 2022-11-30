# Before building the container image run:
./mvnw clean package -Pnative

# Then, build the image with:
docker build -f src/main/docker/Dockerfile.native-micro -t quarkus/quarkus-starter .

# Then run the container using:
docker run -i --rm -p 8080:8080 quarkus/quarkus-starter
