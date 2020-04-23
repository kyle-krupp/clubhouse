package com.clubhouse.demo.player

import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("players")
class PlayerController (private val playerService: PlayerService) {
    @GetMapping
    fun getAllPlayers() : List<PlayerEntity> {
       return playerService.allPlayers()
    }
    @PostMapping
    fun addNewPlayer(@RequestBody playerResource: PlayerResource) {
        playerService.addNewPlayer(PlayerEntity(
                playerId = UUID.randomUUID().toString(),
                firstName = playerResource.firstName,
                lastName = playerResource.lastName,
                battingAverage = playerResource.battingAverage,
                playerType = playerResource.playerType

        ))
    }

    @DeleteMapping("/{playerId}")
    fun deleteStudent(@PathVariable("playerId") playerId: String) {
        playerService.deletePlayer(playerId)
    }

}