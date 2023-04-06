package com.xfactor.openlibrary.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xfactor.openlibrary.domain.publisher;


public interface PublisherRepository extends JpaRepository<publisher,Integer> {
    List<publisher> findByName(String name);
}
