package com.crm.crm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity

public class Booking {
    public @Id @GeneratedValue Long id;

    private String firstName;
    private String lastName;
    private String email;

    public Booking() {}

    public Booking(String firstName,String lastName, String email){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}