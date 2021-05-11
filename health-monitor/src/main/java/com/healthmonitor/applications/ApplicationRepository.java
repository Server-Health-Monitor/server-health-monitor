package com.healthmonitor.applications;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ApplicationRepository extends CrudRepository<Application, Integer> {
}
