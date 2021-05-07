package com.healthmonitor.sitepinger;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.concurrent.CompletableFuture;

public class SitePinger {

    HttpClient client = HttpClient.newHttpClient();

    public SitePinger() {
    }

    public void pingSites(List<Object> sites) {
        sites.parallelStream().forEach(this::pingSite);
    }

    private CompletableFuture<Void> pingSite(Object site) {
        var request = HttpRequest.newBuilder(URI.create("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"))
                .header("accept", "application/json").build();
        try {
            var response = client.send(request, HttpResponse.BodyHandlers.discarding());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        // set status on site
        return null;
    }

}