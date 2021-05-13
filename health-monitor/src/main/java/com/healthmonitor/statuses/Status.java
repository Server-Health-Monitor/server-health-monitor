package com.healthmonitor.statuses;


import com.healthmonitor.applications.Application;
import com.healthmonitor.groups.Group;
import com.healthmonitor.proxy.Proxy;

import javax.persistence.*;

@Entity
@Table(name = "servers")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id")
    private Integer serverId;

    @Column(name = "status_name")
    private Integer statusName;

    public Integer getServerId() {
        return serverId;
    }

    public void setServerId(Integer serverId) {
        this.serverId = serverId;
    }

    public Integer getStatusName() {
        return statusName;
    }

    public void setStatusName(Integer statusName) {
        this.statusName = statusName;
    }
}
