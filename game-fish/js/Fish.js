class Fish extends Spirit {
  constructor(type) {
    if (type > 9 || type < 1) {
      throw new Error('鱼的类型只能在1-9之间');
    }
    let data = __g_resource['fish'][`fish${type}`];
    super({
      img: data.img,
      w: data.frame.w,
      h: data.frame.h,
      sx: data.frame.x,
      sy: data.frame.y,
      rotation: 90,
      speed: Math.random() * 1.5 + 0.5,
    });
    this.type = type;

    this.max_fame = 4;
    this.max_tick = 5;
  }

  //覆盖父级素材问题
  draw(gd) {
    this.rotation -= 90;

    super.draw(gd);

    this.rotation += 90;

  }

}