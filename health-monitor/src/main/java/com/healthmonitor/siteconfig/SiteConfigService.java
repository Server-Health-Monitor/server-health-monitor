package com.healthmonitor.siteconfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteConfigService {

    @Autowired
    SiteConfigRepository siteConfigRepository;

    public List<SiteConfig> listAll() {
        return (List<SiteConfig>) siteConfigRepository.findAll();
    }

    public SiteConfig findByPropertyName(String propertyName){
        return (SiteConfig) siteConfigRepository.findByProperty(propertyName);
    }


}
