# Before building the container image run:
./mvnw clean package

# Then, build the image with:
docker build -f src/main/docker/Dockerfile.jvm -t quarkus-starter-jvm .

# Then run the container using:
# docker run -i --rm -p 8080:8081 quarkus-starter-jvm
