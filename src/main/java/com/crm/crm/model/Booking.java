package com.crm.crm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity

public class Booking {
    private @Id @GeneratedValue Long id;

    private String firstName;
    private String lastName;
    private String email;

    private Booking() {}

    public Booking(String firstName,String lastName, String email){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}