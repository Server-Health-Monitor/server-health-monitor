package com.healthmonitor.siteconfig;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SiteConfigRepository extends CrudRepository<SiteConfig, Integer> {

    @Query("FROM SiteConfig WHERE property = ?1")
    SiteConfig findByProperty(String property);
}
