package com.clubhouse.demo.player


import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository


@Repository
interface PlayerDataAccessRepository : CrudRepository<PlayerEntity, String>
