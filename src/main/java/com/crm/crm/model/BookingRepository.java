package com.crm.crm.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RepsoitoryRestResource;

@RepositoryRestResource

public interface BookingRepository extends CrudRepository<Booking, Long>{



}
