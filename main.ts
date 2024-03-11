namespace SpriteKind {
    export const energy = SpriteKind.create()
    export const Skull = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Goalie = SpriteKind.create()
    export const DEF = SpriteKind.create()
    export const CAP = SpriteKind.create()
    export const MAN2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile17`, function (sprite2, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "OWN GOAL!")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (RED_TEAM.vy == 100) {
        RED_TEAM.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile1`, function (sprite2, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GOAL!")
})
let RED_TEAM: Sprite = null
info.startCountdown(13)
scene.setBackgroundColor(7)
RED_TEAM = sprites.create(assets.image`Red Team character`, SpriteKind.Player)
let Ball2 = sprites.create(assets.image`Ball`, SpriteKind.Ball)
Ball2.setPosition(95, 85)
controller.moveSprite(RED_TEAM, 105, 105)
RED_TEAM.setPosition(88, 75)
tiles.setCurrentTilemap(tilemap`level1 map arena`)
scene.cameraFollowSprite(RED_TEAM)
let GK = sprites.create(assets.image`Goalie`, SpriteKind.Goalie)
GK.follow(RED_TEAM, 70)
GK.setPosition(260, 55)
let DEF2 = sprites.create(assets.image`DEF`, SpriteKind.DEF)
DEF2.follow(RED_TEAM, 80)
DEF2.setPosition(760, 120)
let CAP2 = sprites.create(assets.image`man`, SpriteKind.CAP)
CAP2.follow(RED_TEAM, 60)
CAP2.setPosition(500, 100)
let MID2 = sprites.create(assets.image`man`, SpriteKind.CAP)
MID2.follow(RED_TEAM, 30)
MID2.setPosition(400, 200)
let DEF_3 = sprites.create(assets.image`man`, SpriteKind.CAP)
DEF_3.follow(RED_TEAM, 80)
DEF_3.setPosition(200, 200)
let GK2 = sprites.create(img`
    ........................
    ..........fffff.........
    ..........fdddf.........
    ....eeee..dfdfd..eeee...
    ....eeee..ddddd..eeee...
    .....ee...ddddd...ee....
    .....dd...11111...dd....
    .....dd...7f7f7...dd....
    .....ddd7f7f7f7f7ddd....
    .....ddd7f7f7f7f7ddd....
    ..........7f7f7.........
    ..........7f7f7.........
    ..........7f7f7.........
    ..........77777.........
    ..........fffff.........
    ..........fffff.........
    ..........fffff.........
    ..........ff.ff.........
    ..........ff.ff.........
    ..........dd.dd.........
    ..........dd.dd.........
    ..........77.77.........
    ..........77.77.........
    ..........77.77.........
    .........fff.fff........
    .........fff.fff........
    `, SpriteKind.CAP)
GK2.follow(RED_TEAM, 20)
GK2.setPosition(900, 150)
forever(function () {
    if (controller.A.isPressed()) {
        controller.moveSprite(Ball2, 200, 200)
    }
})
forever(function () {
    if (GK.overlapsWith(RED_TEAM)) {
        sprites.destroy(RED_TEAM)
        game.gameOver(false)
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        if (RED_TEAM.overlapsWith(Ball2)) {
            controller.moveSprite(Ball2, 105, 105)
        }
    }
})
forever(function () {
    if (GK2.overlapsWith(Ball2)) {
        sprites.destroy(Ball2)
        game.gameOver(false)
    }
})
forever(function () {
    if (CAP2.overlapsWith(RED_TEAM)) {
        sprites.destroy(RED_TEAM)
        game.gameOver(false)
    }
})
forever(function () {
    if (DEF2.overlapsWith(RED_TEAM)) {
        sprites.destroy(RED_TEAM)
        game.gameOver(false)
    }
})
forever(function () {
    if (DEF_3.overlapsWith(RED_TEAM)) {
        sprites.destroy(RED_TEAM)
        game.gameOver(false)
    }
})
