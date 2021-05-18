package com.healthmonitor.servers;


import com.healthmonitor.siteconfig.SiteConfig;
import com.healthmonitor.siteconfig.SiteConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("servers")
public class ServerController {
    @Autowired
    ServerService serverService;

    @GetMapping
    public List<Server> getAllConfigs() {
        return serverService.listAll();
    }

}
