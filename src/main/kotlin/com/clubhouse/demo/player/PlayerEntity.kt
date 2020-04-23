package com.clubhouse.demo.player
import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.jpa.repository.EntityGraph
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table


@Entity
@Table(name="players")
data class PlayerEntity(
        @Id
        val playerId: String,
        @Column
        val firstName: String,
        @Column
        val lastName: String,
        @Column
        val battingAverage: String,
        @Column
        val playerType: String

) {

    enum class PlayerType {
        HITTER, PITCHER
    }
}

