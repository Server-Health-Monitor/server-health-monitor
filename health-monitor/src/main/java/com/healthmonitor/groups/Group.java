package com.healthmonitor.groups;

import javax.persistence.*;

@Entity
@Table(name = "groups")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private Integer groupID;

    private String name;

    public Integer getGroupID(){
        return groupID;
    }

    public String getName() {
        return name;
    }
}
