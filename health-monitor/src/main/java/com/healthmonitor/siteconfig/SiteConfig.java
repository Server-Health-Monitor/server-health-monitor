package com.healthmonitor.siteconfig;

import javax.persistence.*;

@Entity
@Table(name = "site_config")
public class SiteConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    private String property;

    private String propertyValue;

    public SiteConfig() {
    }

    public Integer getID() {
        return id;
    }

    public String getProperty() {
        return property;
    }

    public String getPropertyValue() {
        return propertyValue;
    }
}
