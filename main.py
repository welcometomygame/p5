@namespace
class SpriteKind:
    energy = SpriteKind.create()
    Skull = SpriteKind.create()
    Ball = SpriteKind.create()
    Goalie = SpriteKind.create()
    DEF = SpriteKind.create()
    CAP = SpriteKind.create()

def on_overlap_tile(sprite2, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.dissolve)
    game.set_game_over_message(False, "OWN GOAL!")
scene.on_overlap_tile(SpriteKind.Ball,
    assets.tile("""
        myTile17
    """),
    on_overlap_tile)

def on_a_pressed():
    if RED_TEAM.vy == 100:
        RED_TEAM.vy = -250
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite22, location2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_message(True, "GOAL!")
scene.on_overlap_tile(SpriteKind.Ball,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

RED_TEAM: Sprite = None
info.start_countdown(12)
scene.set_background_color(7)
RED_TEAM = sprites.create(assets.image("""
        Red Team character
    """),
    SpriteKind.player)
Ball2 = sprites.create(assets.image("""
    Ball
"""), SpriteKind.Ball)
Ball2.set_position(88, 70)
controller.move_sprite(RED_TEAM, 105, 105)
tiles.set_current_tilemap(tilemap("""
    level1 map arena
"""))
scene.camera_follow_sprite(RED_TEAM)
GK = sprites.create(assets.image("""
    Goalie
"""), SpriteKind.Goalie)
GK.follow(RED_TEAM, 70)
GK.set_position(260, 55)
DEF2 = sprites.create(assets.image("""
    DEF
"""), SpriteKind.DEF)
DEF2.follow(RED_TEAM, 80)
DEF2.set_position(760, 120)
CAP2 = sprites.create(assets.image("""
    CAP
"""), SpriteKind.CAP)
CAP2.follow(RED_TEAM, 60)
CAP2.set_position(500, 100)
MID2 = sprites.create(assets.image("""
    CAP
"""), SpriteKind.CAP)
MID2.follow(RED_TEAM, 30)
MID2.set_position(400, 200)
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)

def on_forever():
    if controller.B.is_pressed():
        if RED_TEAM.overlaps_with(Ball2):
            controller.move_sprite(Ball2, 105, 105)
forever(on_forever)

def on_forever2():
    if controller.A.is_pressed():
        controller.move_sprite(Ball2, 200, 200)
forever(on_forever2)

def on_forever3():
    if GK.overlaps_with(RED_TEAM):
        sprites.destroy(RED_TEAM)
        game.game_over(False)
forever(on_forever3)

def on_forever4():
    if CAP2.overlaps_with(RED_TEAM):
        sprites.destroy(RED_TEAM)
        game.game_over(False)
forever(on_forever4)

def on_forever5():
    if DEF2.overlaps_with(RED_TEAM):
        sprites.destroy(RED_TEAM)
        game.game_over(False)
forever(on_forever5)
