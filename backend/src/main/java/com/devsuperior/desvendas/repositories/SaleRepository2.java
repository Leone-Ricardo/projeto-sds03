package com.devsuperior.desvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.desvendas.dto.SaleSucessDTO;
import com.devsuperior.desvendas.dto.SaleSumDTO;
import com.devsuperior.desvendas.entities.Sale;

public interface SaleRepository2 extends JpaRepository <Sale, Long>{
	
	@Query("SELECT new com.devsuperior.desvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount ) ) "
			+ " FROM Sale As obj GROUP BY obj.seller ")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.devsuperior.desvendas.dto.SaleSucessDTO(obj.seller, SUM(obj.visited ),SUM(obj.deals )) "
			+ " FROM Sale As obj GROUP BY obj.seller ")
	List<SaleSucessDTO> sucessGroupedBySeller();

}

