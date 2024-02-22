@namespace
class SpriteKind:
    energy = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.energy, on_on_overlap)

def on_a_pressed():
    if RED_TEAM.vy == 0:
        RED_TEAM.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite2, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.bubbles)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite3, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile2)

Energy: Sprite = None
RED_TEAM: Sprite = None
scene.set_background_color(6)
RED_TEAM = sprites.create(assets.image("""
        Red Team character
    """),
    SpriteKind.player)
controller.move_sprite(RED_TEAM, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1 map arena
"""))
RED_TEAM.ay = 200
scene.camera_follow_sprite(RED_TEAM)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile7
""")):
    Energy = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . c c c . . . . . . . . 
                    . . . . 2 2 2 2 2 . . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . 5 5 5 5 5 5 5 . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . 5 5 5 5 5 5 5 . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . 2 2 2 2 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.energy)
    animation.run_image_animation(Energy,
        [img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f f . . . . . . . . 
                        . . . . 2 2 2 2 2 . . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 5 5 5 5 5 5 5 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 5 5 5 5 5 5 5 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 5 5 5 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 5 5 5 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 5 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 5 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . f . . . . . . . . . 
                        . . . . . . 2 . . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 5 5 5 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 5 5 5 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . 2 2 2 . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f f . . . . . . . . 
                        . . . . 2 2 2 2 2 . . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 5 5 5 5 5 5 5 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 5 5 5 5 5 5 5 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . 2 2 2 2 2 2 2 . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
            """)],
        100,
        True)
    tiles.place_on_tile(Energy, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))