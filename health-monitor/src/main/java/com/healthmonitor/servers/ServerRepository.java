package com.healthmonitor.servers;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ServerRepository extends CrudRepository<Server, Integer> {
}
