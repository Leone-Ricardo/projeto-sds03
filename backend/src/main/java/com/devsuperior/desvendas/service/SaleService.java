package com.devsuperior.desvendas.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.desvendas.dto.SaleDTO;
import com.devsuperior.desvendas.entities.Sale;
import com.devsuperior.desvendas.repositories.SaleRepository2;
import com.devsuperior.desvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository2 repository2;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll (Pageable pageable){
		sellerRepository.findAll();
		Page<Sale> result = repository2.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
   
}
