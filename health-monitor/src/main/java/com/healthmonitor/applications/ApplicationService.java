package com.healthmonitor.applications;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;

import java.util.List;

public class ApplicationService {
    @Autowired
    ApplicationRepository applicationRepository;

    public List<Application> findPeople(Application probe) {
        return (List<Application>) applicationRepository.findAll();
    }

}
