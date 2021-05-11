package com.healthmonitor.servers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServerService {

    @Autowired
    ServerRepository serverRepository;

    public List<Server> listAll() {
        return (List<Server>) serverRepository.findAll();
    }

}
