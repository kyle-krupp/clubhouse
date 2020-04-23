CREATE TABLE IF NOT EXISTS player (
    player_id UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    batting_average VARCHAR(100) NOT NULL,
    player_type VARCHAR NOT NULL
        CHECK (
            player_type = 'HITTER'   OR
            player_type = 'hitter'   OR
            player_type = 'PITCHER' OR
            player_type = 'pitcher'
        )
);
