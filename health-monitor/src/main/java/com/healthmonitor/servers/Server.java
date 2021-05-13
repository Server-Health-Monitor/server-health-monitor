package com.healthmonitor.servers;


import com.healthmonitor.applications.Application;
import com.healthmonitor.groups.Group;
import com.healthmonitor.proxy.Proxy;
import com.healthmonitor.statuses.Status;

import javax.persistence.*;

@Entity
@Table(name = "servers")
public class Server {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "server_id")
    private Integer serverId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "group_id")
    private Group group;

    @Column(name = "display_name")
    private String displayName;

    private String uri;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "organization_id")
//    private long organization;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "application_id")
    private Application application;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "proxy_id")
    private Proxy proxy;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "status_id")
    private Status status;

    public Integer getServerId() {
        return serverId;
    }

    public void setServerId(Integer serverId) {
        this.serverId = serverId;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

//    public long getOrganization() {
//        return organization;
//    }
//
//    public void setOrganization(long organization) {
//        this.organization = organization;
//    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public Proxy getProxy() {
        return proxy;
    }

    public void setProxy(Proxy proxy) {
        this.proxy = proxy;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
