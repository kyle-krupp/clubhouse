package com.clubhouse.demo.player

import org.springframework.stereotype.Component

@Component
class PlayerService(private val playerDataAccessRepository: PlayerDataAccessRepository) {

    fun allPlayers(): List<PlayerEntity> = playerDataAccessRepository.findAll().map{ it }

    fun addNewPlayer(playerEntity: PlayerEntity) {
        playerDataAccessRepository.save(playerEntity)
    }

    fun deletePlayer(playerId: String) {
        playerDataAccessRepository.deleteById(playerId)
    }
}