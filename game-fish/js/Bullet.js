class Bullet extends Spirit {
  constructor(type) {
    if (type > 7 || type < 1) {
      throw new Error('弹的类型只能在1-7之间');
    }
    let data = __g_resource['bullet'][`bullet${type}`];
    super({
      img: data.img,
      w: data.frame.w,
      h: data.frame.h,
      sx: data.frame.x,
      sy: data.frame.y
    });
    this.type = type;
    this.speed = 10;
  }
}