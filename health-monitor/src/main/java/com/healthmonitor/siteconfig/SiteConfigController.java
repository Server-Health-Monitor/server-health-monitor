package com.healthmonitor.siteconfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{property_name}")
    public SiteConfig getConfig(@PathVariable(value="property_name") String property){
        return siteConfigService.findByPropertyName(property);
    }

}
