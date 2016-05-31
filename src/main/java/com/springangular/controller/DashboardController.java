package com.springangular.controller;

import com.springangular.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

	@Autowired
	DashboardService dashboardService;

	@RequestMapping(value = "/radar/status", method = RequestMethod.GET)
	public Boolean radarApiStatus() {
		return true;
	}

}
