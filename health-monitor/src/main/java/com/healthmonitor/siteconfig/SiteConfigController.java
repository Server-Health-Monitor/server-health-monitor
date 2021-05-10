package com.healthmonitor.siteconfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("siteconfig")
public class SiteConfigController {

    @Autowired
    SiteConfigService siteConfigService;

    @GetMapping
    public List<SiteConfig> getAllConfigs() {
        return siteConfigService.listAll();
    }
}
