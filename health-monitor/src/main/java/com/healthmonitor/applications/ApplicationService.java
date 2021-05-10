package com.healthmonitor.applications;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    ApplicationRepository applicationRepository;

    public List<Application> listAll() {
        return (List<Application>) applicationRepository.findAll();
    }

}
