package com.healthmonitor.sitepinger;

import com.healthmonitor.servers.Server;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

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

    public void pingSites(List<Server> servers) {
        servers.parallelStream().forEach(server -> {
            var request = HttpRequest
                    .newBuilder(URI.create(server.getUri()))
                    .header(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                    .build();
            CompletableFuture<HttpResponse<Void>> resp = client.
                    sendAsync(request, HttpResponse.BodyHandlers.discarding());
            resp.thenAccept(respFuture -> {
                System.out.println("hey");
            });
        });
    }

}