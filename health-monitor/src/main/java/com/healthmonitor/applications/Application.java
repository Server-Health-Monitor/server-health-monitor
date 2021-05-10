package com.healthmonitor.applications;

import javax.persistence.*;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id")
    private Integer applicationID;

    private String name;

    public Integer getApplicationID(){
        return applicationID;
    }

    public String getName() {
        return name;
    }
}
