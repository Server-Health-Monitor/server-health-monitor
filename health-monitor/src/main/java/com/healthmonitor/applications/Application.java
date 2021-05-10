package com.healthmonitor.applications;

import javax.persistence.*;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer applicationID;

    private String name;

    public String getName() {
        return name;
    }
}
