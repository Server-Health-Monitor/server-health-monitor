package com.healthmonitor.proxy;

import javax.persistence.*;

@Entity
@Table(name = "proxies")
public class Proxy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proxy_id")
    private Integer proxyID;

    @Column
    private String host;

    @Column
    private int port;

    public Integer getProxyID() {
        return proxyID;
    }

    public void setProxyID(Integer proxyID) {
        this.proxyID = proxyID;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }
}
