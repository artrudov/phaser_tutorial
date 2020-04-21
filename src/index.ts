import Phaser from 'phaser'
type GameConfig = Phaser.Types.Core.GameConfig

const config: GameConfig = {
  type: Phaser.WEBGL,
  width: 800,
  height: 500,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)

function preload(): void {
  this.load.image('sky', 'assets/sky.png')
  this.load.image('ground', 'assets/platform.png')
  this.load.image('star', 'assets/star.png')
  this.load.image('bomb', 'assets/bomb.png')
  this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
  })
}

function create(): void {}

function update(): void {}
