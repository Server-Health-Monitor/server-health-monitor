package com.healthmonitor.siteconfig;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SiteConfigRepository extends CrudRepository<SiteConfig, Integer> {
}
