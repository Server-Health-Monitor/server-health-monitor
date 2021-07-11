package com.healthmonitor;

import com.healthmonitor.servers.Server;
import com.healthmonitor.servers.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
public class HealthMonitorApplication {

    @Autowired
    ServerService appService;

    public static void main(String[] args) {
        SpringApplication.run(HealthMonitorApplication.class, args);
    }


    // testing
    @PostConstruct
    public void init() {
        List<Server> app = appService.listAll();
        System.out.println(app);
    }

}
