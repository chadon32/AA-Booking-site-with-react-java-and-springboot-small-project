package com.crm.crm.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component

public class DemoLoader implements CommandLineRunner {
    private final BookingRepository repository;

    @Autowired
    public DemoLoader(BookingRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String...strings) throws Exception{
        this.repository.save(new Booking("Chadon","Mathurin","chadon322@gmail.com"));

    }
}
