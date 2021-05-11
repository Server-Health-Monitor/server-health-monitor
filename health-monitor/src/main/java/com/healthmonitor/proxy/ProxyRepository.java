package com.healthmonitor.proxy;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProxyRepository extends CrudRepository<Proxy, Integer> {
}
