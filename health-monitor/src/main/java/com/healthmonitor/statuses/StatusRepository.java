package com.healthmonitor.statuses;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StatusRepository extends CrudRepository<Status, Integer> {
}
