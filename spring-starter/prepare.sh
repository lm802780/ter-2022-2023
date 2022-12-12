mvn clean package -Pnative

# https://www.graalvm.org/22.2/reference-manual/native-image/guides/containerise-native-executable-and-run-in-docker-container/

# Then, build the image with:
docker build -f Dockerfile -t spring-starter .

# Then run the container using:
docker run -i --rm -p 8080:8080 spring-starter
