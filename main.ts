namespace SpriteKind {
    export const energy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.energy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (RED_TEAM.vy == 0) {
        RED_TEAM.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(true)
})
let Energy: Sprite = null
let RED_TEAM: Sprite = null
scene.setBackgroundColor(6)
RED_TEAM = sprites.create(assets.image`Red Team character`, SpriteKind.Player)
controller.moveSprite(RED_TEAM, 100, 0)
tiles.setCurrentTilemap(tilemap`level1 map arena`)
RED_TEAM.ay = 200
scene.cameraFollowSprite(RED_TEAM)
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    Energy = sprites.create(img`
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
        `, SpriteKind.energy)
    animation.runImageAnimation(
    Energy,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    100,
    true
    )
    tiles.placeOnTile(Energy, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
