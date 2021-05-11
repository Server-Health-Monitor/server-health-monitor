package com.healthmonitor.statuses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusService {

    @Autowired
    StatusRepository statusRepository;

    public List<Status> listAll() {
        return (List<Status>) statusRepository.findAll();
    }

}
