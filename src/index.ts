import Phaser from 'phaser'

// TODO: Надо подумать как сделать нормальные инпуты с алиасами, а также не писать кучу буйлерплейта
import skyImg from './assets/sky.png'
import platformImg from './assets/platform.png'
import starImg from './assets/star.png'
import bombImg from './assets/bomb.png'
import heroImg from './assets/dude.png'

import { CONFIG } from './const/consts'

type GameConfig = Phaser.Types.Core.GameConfig

const config: GameConfig = {
  ...CONFIG,
  type: Phaser.WEBGL,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const game = new Phaser.Game(config)

function preload(): void {
  this.load.image('sky', skyImg)
  this.load.image('ground', platformImg)
  this.load.image('star', starImg)
  this.load.image('bomb', bombImg)
  this.load.spritesheet('hero', heroImg, {
    frameWidth: 32,
    frameHeight: 48
  })
}

function create(): void {
  this.add.image(0, 0, 'sky').setOrigin(0, 0)
  this.add.image(0, 0, 'star').setOrigin(0, 0)
}

function update(): void {}
