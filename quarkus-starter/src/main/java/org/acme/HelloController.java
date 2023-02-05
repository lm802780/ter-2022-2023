package org.acme;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Path("/hello")
public class HelloController {

    private static List<String> loadTest() {
        List<String> result = new ArrayList<>();
        for (int i = 0; i < 6_000; i++) {
            result.add(UUID.randomUUID().toString());
        }
        Collections.shuffle(result);
        return result;
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return loadTest().toString();
    }

    // Scénario simple
    /*
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello world";
    }
     */
}
