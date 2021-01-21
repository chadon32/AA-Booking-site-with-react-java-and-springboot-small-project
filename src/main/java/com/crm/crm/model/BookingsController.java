package com.crm.crm.model;

import java.net.URISyntaxException;
import java.util.Collection;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// passing the mapping of api
@RequestMapping("/api")
//pass the address thats trying to get resources from this server
@CrossOrigin(origins = "http://localhost:3000")
class BookingsController {
    private BookingRepository bookingRepository;

    public BookingsController(BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }
    @GetMapping("/bookings")
    Collection<Booking> bookings(){
        return (Collection<Booking>) bookingRepository.findAll();
    }

    @PostMapping("/bookings")
    ResponseEntity<Booking> createBookings(@Valid @RequestBody Booking bookings) throws URISyntaxException{
        Booking result = bookingRepository.save(bookings);
        return ResponseEntity.ok().body(result);
    }
}
