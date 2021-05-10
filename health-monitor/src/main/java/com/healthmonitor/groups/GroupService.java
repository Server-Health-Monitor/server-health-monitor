package com.healthmonitor.groups;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    GroupRepository groupRepository;

    public List<Group> listAll() {
        return (List<Group>) groupRepository.findAll();
    }



}
