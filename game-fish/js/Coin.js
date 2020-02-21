class Coin extends Spirit {
  constructor(type) {
    if (type > 2 || type < 1) {
      throw new Error('金币的类型只能在1-2之间');
    }
    let data = __g_resource['coin'][`coinAni${type}`];
    super({
      img: data.img,
      w: data.frame.w,
      h: data.frame.h,
      sx: data.frame.x,
      sy: data.frame.y,
      speed: 5,
    });
    this.type = type;

    this.max_fame = 10;
    this.max_tick = 2;
  }

}