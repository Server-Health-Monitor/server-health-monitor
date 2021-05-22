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
    public Servers getAllConfigs() {
        return Servers.newServersList(serverService.listAll());
    }

    private static class Servers {
        public List<Server> servers;

        private Servers(List<Server> servers) {
            this.servers = servers;
        }

        public static Servers newServersList(List<Server> servers){
            return new Servers(servers);
        }
    }

}
