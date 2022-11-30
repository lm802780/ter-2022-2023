# mvn clean package -Pnative,nativeTest
./mvnw -Pnative clean package

docker run --rm -p 8080:8080 spring-starter:0.0.1-SNAPSHOT
