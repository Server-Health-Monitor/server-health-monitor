package com.healthmonitor.statuses;


import com.healthmonitor.applications.Application;
import com.healthmonitor.groups.Group;
import com.healthmonitor.proxy.Proxy;

import javax.persistence.*;

@Entity
@Table(name = "statuses")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id")
    private Integer serverId;

    @Column(name = "status_name")
    private String statusName;

    public Integer getServerId() {
        return serverId;
    }

    public void setServerId(Integer serverId) {
        this.serverId = serverId;
    }

    public String getStatusName() {
        return statusName;
    }

    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }
}
