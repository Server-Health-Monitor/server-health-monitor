package com.healthmonitor;

import com.healthmonitor.applications.Application;
import com.healthmonitor.applications.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
public class HealthMonitorApplication {

    @Autowired
    ApplicationService appService;

    public static void main(String[] args) {
        SpringApplication.run(HealthMonitorApplication.class, args);
    }


    // testing
    @PostConstruct
    public void init() {
        List<Application> app = appService.listAll();
        System.out.println(app);
    }

}
