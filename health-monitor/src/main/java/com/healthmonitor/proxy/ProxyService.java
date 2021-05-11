package com.healthmonitor.proxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProxyService {

    @Autowired
    ProxyRepository proxyRepository;

    public List<Proxy> listAll() {
        return (List<Proxy>) proxyRepository.findAll();
    }



}
